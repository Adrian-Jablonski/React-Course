import React from 'react';
import {useCountRenders} from '../hooks/useCountRenders';

// React.memo compares props and will only rerender component if props have changed. By Default React always rerenders a child component if the parent component changes
const Square = React.memo(({n, increment}) => {
	useCountRenders();

	return (
		<div>
			<h2>Hello</h2>
			<button onClick={() => increment(n)}>{n}</button>
		</div>
	);
});

export default Square;