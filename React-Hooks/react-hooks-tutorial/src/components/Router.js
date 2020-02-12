// useContext example

import React, {useContext, useState, useMemo} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AppRouter = () => {
	const [value, setValue] = useState('hello from app router');

	const providerValue = useMemo(() => ({value, setValue}), [value, setValue]); // Prevents providerValue from changing unless value or setValue changes

	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about/'>About</Link>
						</li>
					</ul>
				</nav>

				<UserContext.Provider value={providerValue}>
					<Route path='/' exact component={Home} />
					<Route path='/about/' component={About} />
				</UserContext.Provider>
			</div>
		</Router>
	);
}

export default AppRouter;

const Home = () => {
	const {value, setValue} = useContext(UserContext);
	return (
		<div>
			<h2>Home</h2>
			<div>{value}</div>
			<button onClick={() => setValue('Home Page changed value')}>Change Value</button>
		</div>
	)
}

const About = () => {
	const {value, setValue} = useContext(UserContext);
	return (
		<div>
			<h2>About</h2>
			<div>{value}</div>
			<button onClick={() => setValue('About Page changed value')}>Change Value</button>
		</div>
	)
}