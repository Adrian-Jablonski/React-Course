import React, { useState, useCallback, useRef } from 'react';
import Box from './components/Box';

import { gerenateEmptyGrid, getNumberOfNeighbors } from './functions/helpers';

const numRows = 50;
const numCols = 50;


const App = () => {
  const [grid, setGrid] = useState(() => {
    return gerenateEmptyGrid();
  });

  const [boxPixels, setBoxPixels] = useState(14);
  const [randomPerc, setRandomPerc] = useState(0);

  const [running, setRunning] = useState(false);


  const setGridVal = useCallback((rIndex, cIndex) => {
    setGrid((g) => {
      const gridCopy = [
        ...g
      ]
      const currValue = gridCopy[rIndex][cIndex];
      gridCopy[rIndex][cIndex] = (currValue) ? 0 : 1;
      return gridCopy;
    })
  }, [setGrid])

  // Setup running ref to use in runSimulation function in order for the function to be created once and not updated each time running is updated
  const runningRef = useRef(running);

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

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${numCols}, ${boxPixels}px)`
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
          <label>Box Pixels :</label>
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

      <div style={gridStyle}>
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
              />
            )
          })
        })}
      </div>
    </React.Fragment>
  );
}

export default App;
