import React, { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

const App3 = () => {
	const [count, setCount] = useState(0);
	const {data} = useFetch('https://jsonplaceholder.typicode.com/todos')

	const longestTitle = useMemo(() => computeLongestTitle(data), [data]);

	return (
		<div>
			<div>count: {count}</div>
			<button onClick={() => setCount(count + 1)}>+</button>
			<div>{longestTitle}</div>
		</div>
	);
}

export default App3;

const computeLongestTitle = (apiData) => {
	if (!apiData) {
		return [];
	};

	console.log('computing longest title');
	
	const longestTitle = JSON.parse(apiData).reduce((a, b) => {
		return a.title.length > b.title.length ? a : b;
	}).title;
	return [longestTitle];
}