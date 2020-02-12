import React, {memo} from 'react';

// Wrapping in memo and using useCallBack for setGridVal function prevents rerendering of every box when one box is clicked
const Box = memo(({rIndex, cIndex, boxPixels, boxVal, setGridVal, hoverClass, setHoverBoxVal }) => {
	const boxStyle = {
		width: boxPixels,
		height: boxPixels
	}

	return (
		<div
			style={boxStyle}
			className={`box ${hoverClass ? 'hover-box' : boxVal ? 'alive' : 'dead'}`}
			onClick={() => setGridVal(rIndex, cIndex)}
			onMouseOver={() => 
				{
				setHoverBoxVal(`${rIndex}-${cIndex}`)
			}}
		>

		</div>
	)
})

export default Box;