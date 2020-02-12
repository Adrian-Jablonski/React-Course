// useContext example

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const AppRouter = () => {
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

				<Route path='/' exact component={Home} />
				<Route path='/about/' component={About} />
			</div>
		</Router>
	);
}

export default AppRouter;

const Home = () => {
	return (
		<div>
			<h2>Home</h2>
		</div>
	)
}

const About = () => {
	return (
		<div>
			<h2>About</h2>
		</div>
	)
}