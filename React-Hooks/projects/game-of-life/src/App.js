import React, { useState, useCallback, useRef } from 'react';
import Box from './components/Box';

import { gerenateEmptyGrid, getNumberOfNeighbors, setHoverBoxByShape } from './functions/helpers';

import { shapeTypes } from './data/shapeTypes';

const App = () => {
  // ------ State -------
  const [grid, setGrid] = useState(() => {
    return gerenateEmptyGrid();
  });
  const [boxPixels, setBoxPixels] = useState(10);
  const [randomPerc, setRandomPerc] = useState(0);
  const [running, setRunning] = useState(false);
  const [hoverBoxes, setHoverBoxes] = useState([]);
  const [shape, setShape] = useState('point');
  const [numRows, setNumRows] = useState({ rows: 50, inputRows: 50 });
  const [numCols, setNumCols] = useState({ cols: 50, inputCols: 50 });
  const [speed, setSpeed] = useState(100);

  // ------ Refs -------
  // Setup running ref to use in runSimulation function in order for the function to be created once and not updated each time running is updated
  const runningRef = useRef(running);
  const hoverBoxesRef = useRef(hoverBoxes);
  const shapeRef = useRef(shape);

  // ------ useCallBack -------

  const setGridVal = useCallback((rIndex, cIndex) => {
    setGrid((g) => {
      const gridCopy = [
        ...g
      ]

      if (hoverBoxesRef.current.length === 1) {
        // Allow erease for point
        const currValue = gridCopy[rIndex][cIndex];
        gridCopy[rIndex][cIndex] = (currValue) ? 0 : 1;
      } else {
        hoverBoxesRef.current.forEach((point) => {
          const [x, y] = point.split('-');
          gridCopy[x][y] = 1;
        })
      }
      return gridCopy;
    })
  }, [setGrid]);

  const setHoverBoxVal = useCallback((loc) => {
    let locArray = setHoverBoxByShape(loc, shapeRef.current, numRows.rows, numCols.cols);
    hoverBoxesRef.current = locArray;
    setHoverBoxes(locArray);
  }, [setHoverBoxes, numRows, numCols]);



  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid(g => {
      const gridCopy = [
        ...g
      ]
      const gridUpdateCells = [];

      for (let i = 0; i < numRows.rows; i++) {
        for (let j = 0; j < numCols.cols; j++) {
          const neighbors = getNumberOfNeighbors(g, i, j, numRows.rows, numCols.cols);

          const currGridVal = g[i][j];

          if ((neighbors < 2 || neighbors > 3) && currGridVal === 1) {
            gridUpdateCells.push([i, j, 0]);
          } else if (currGridVal === 0 && neighbors === 3) {
            gridUpdateCells.push([i, j, 1]);
          }
        }
      }

      // Prevents incorrectly placed cells
      gridUpdateCells.forEach(([x, y, val]) => {
        gridCopy[x][y] = val;
      })
      return gridCopy;
    });


    setTimeout(() => {
      runSimulation()
    }, speed);

  }, [speed]); // Empty array will only create the function once

  // ------ Styles -------

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols.cols}, ${boxPixels}px)`,
    // width: `${numCols * boxPixels}px`
  }

  return (
    <React.Fragment>

      <div className="options">
        <button
          onClick={() => {
            setRunning(!running);
            if (!running) {
              runningRef.current = true;
              runSimulation();
            } else {
              runningRef.current = false;
            }
          }}
        >{running ? 'stop' : 'start'}</button>

        <button
          onClick={() => setGrid(gerenateEmptyGrid(numRows.rows, numCols.cols))}
        >Clear</button>

        <div className="set-box-pixels setting">
          <label>Zoom Level :</label>
          <input
            type="number"
            value={boxPixels}
            onChange={(e) => setBoxPixels(Math.max(e.target.value, 1))}
          />
        </div>

        <div className="setting">
          <label>Random Percentage :</label>
          <input
            type="number"
            value={randomPerc}
            onChange={(e) => setRandomPerc(Math.min(Math.max(e.target.value, 0)), 100)}
          />
          <button
            onClick={() => setGrid(gerenateEmptyGrid(numRows.rows, numCols.cols, randomPerc * .01))}
          >Random</button>
        </div>
      </div>

      {!running &&
        <div className="setting">
          <label>Width :</label>
          <input
            type="number"
            value={numCols.inputCols}
            onChange={(e) => setNumCols({
              ...numCols,
              inputCols: Number(e.target.value)
            })}
          />
          <label>Height :</label>
          <input
            type="number"
            value={numRows.inputRows}
            onChange={(e) => setNumRows({
              ...numRows,
              inputRows: Number(e.target.value)
            })}
          />
          <button
            onClick={() => {
              setNumRows({
                ...numRows,
                rows: numRows.inputRows
              });
              setNumCols({
                ...numCols,
                cols: numCols.inputCols
              });
              setGrid(gerenateEmptyGrid(numRows.inputRows, numCols.inputCols));
            }}
          >Set Dimensions</button>

          <label>Speed (Lower is Faster) :</label>
          <input
            type="number"
            value={speed / 25}
            onChange={(e) => setSpeed(Number(e.target.value) * 25)}
          />
        </div>
      }


      <div className="options setting">
        <label>Shape: </label>
        <select
          value={shape}
          onChange={(e) => {
            setShape(e.target.value);
            shapeRef.current = e.target.value;
          }}
        >
          {Object.keys(shapeTypes).map((shape, index) => {
            return (
              <option key={index} value={shape}>{`${shape.slice(0, 1).toUpperCase()}${shape.slice(1)}`}</option>
            )

          })}
        </select>
      </div>

      <div style={gridStyle}
        onMouseOut={
          () => {
            setHoverBoxes([])
          }}
      >
        {grid.map((rows, rIndex) => {
          return rows.map((col, cIndex) => {
            const boxVal = grid[rIndex][cIndex];
            return (
              <Box
                key={`${rIndex}-${cIndex}`}
                rIndex={rIndex}
                cIndex={cIndex}
                boxPixels={boxPixels}
                boxVal={boxVal}
                setGridVal={setGridVal}
                hoverClass={hoverBoxes.indexOf(`${rIndex}-${cIndex}`) !== -1}
                setHoverBoxVal={setHoverBoxVal}
              />
            )
          })
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
