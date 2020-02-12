import {shapeTypes} from '../data/shapeTypes';

const operations = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, -1],
	[0, 1],
	[1, -1],
	[1, 0],
	[1, 1]
]

export const gerenateEmptyGrid = (numRows = 50, numCols = 50, randPerc = 0) => {
	const rows = [];
	for (let i = 0; i < numRows; i++) {
		// Creates grid and assigns initial values to 0
		rows.push(Array.from(Array(numCols), () => 
			randPerc === 0 
				? 0 
				: Math.random() < randPerc ? 1 : 0
			))
	}
	return rows;
}

export const getNumberOfNeighbors = (grid, row, col, numRows, numCols) => {
	let neighborCount = 0;
	operations.forEach(([x, y]) => {
		const newI = row + x;
		const newJ = col + y;
		
		if (isInsideGrid(newI, numRows, newJ, numCols)) {
			neighborCount += grid[newI][newJ];
		}
	})
	return neighborCount;
}

export const setHoverBoxByShape = (loc, shape, numRows, numCols) => {
	const origin = loc.split('-');
	let shapePoints = [];
	shapeTypes[shape].forEach(([x, y]) => {
		const newX = Number(origin[0]) + x;
		const newY = Number(origin[1]) + y;
		if (isInsideGrid(newX, numRows, newY, numCols)) {
			shapePoints.push(`${newX}-${newY}`);
		}
	})

	return shapePoints;
}

export const isInsideGrid = (newX, numRows, newY, numCols) => {
	// Checking grid bounds
	return newX >= 0 && newX < numRows && newY >= 0 && newY < numCols;
}