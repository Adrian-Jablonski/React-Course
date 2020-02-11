import React, {memo} from 'react';

// Wrapping in memo and using useCallBack for setGridVal function prevents rerendering of every box when one box is clicked
const Box = memo(({rIndex, cIndex, boxPixels, boxVal, setGridVal }) => {
	const boxStyle = {
		width: boxPixels,
		height: boxPixels
	}

	return (
		<div
			style={boxStyle}
			className={`box ${boxVal ? 'alive' : 'dead'}`}
			onClick={() => setGridVal(rIndex, cIndex)}
		>

		</div>
	)
})

export default Box;