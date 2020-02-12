import React, {useReducer} from 'react';

const App4 = () => {
	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<div>Count: {count}</div>
			<button onClick={() => dispatch({type: 'INCREMENT'})}> + </button>
			<button onClick={() => dispatch({type: 'DECREMENT'})}> - </button>
		</div>
	);
}

export default App4;

const reducer = (state, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	};
}