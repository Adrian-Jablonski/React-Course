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
	let neightborCount = 0;
	operations.forEach(([x, y]) => {
		const newI = row + x;
		const newJ = col + y;

		// Checking grid bounds
		if (newI >= 0 && newI < numRows && newJ >= 0 && newJ < numCols) {
			neightborCount += grid[newI][newJ];
		}
	})
	return neightborCount;
}
