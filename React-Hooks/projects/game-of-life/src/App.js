import React, { useState, useCallback, useRef } from 'react';
import Box from './components/Box';

import { gerenateEmptyGrid, getNumberOfNeighbors, setHoverBoxByShape } from './functions/helpers';

import { shapeTypes } from './data/shapeTypes';

const numRows = 200;
const numCols = 200;


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
    let locArray = setHoverBoxByShape(loc, shapeRef.current, numRows, numCols);
    hoverBoxesRef.current = locArray;
    setHoverBoxes(locArray);
  }, [setHoverBoxes]);



  const runSimulation = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    setGrid(g => {
      const gridCopy = [
        ...g
      ]
      // return produce(g, gridCopy => {
      const gridUpdateCells = [];

      for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
          const neighbors = getNumberOfNeighbors(g, i, j, numRows, numCols);

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
      // });
    });


    setTimeout(() => {
      runSimulation()
    }, 100);

  }, []); // Empty array will only create the function once

  // ------ Styles -------

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols}, ${boxPixels}px)`,
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
          onClick={() => setGrid(gerenateEmptyGrid(numRows, numCols))}
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
            onClick={() => setGrid(gerenateEmptyGrid(numRows, numCols, randomPerc * .01))}
          >Random</button>
        </div>
      </div>

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
