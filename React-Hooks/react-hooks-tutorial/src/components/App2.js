import React, { useState, useCallback } from 'react';
import AppChild from './AppChild';
import Square from './Square';

const App2 = () => {
	const [count, setCount] = useState(0);

	const increment = useCallback((n = 1) => {
		// passing count to function like below will still change the function
		// setCount(count + 1)

		// Using the below will not change the function
		setCount(c => c + n);
	}, [setCount])

	const favoriteNums = [7, 21, 37];

	return (
		<div>
			<AppChild increment={increment}/>
			<div>count: {count}</div>

			{favoriteNums.map((n) => {
				return (
					<Square 
						key={n}
						increment={increment}
						n={n}
					/>
				)
			})}
		</div>
	);
}

export default App2;