// useContext example

import React, { useContext, useState, useMemo } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { login } from '../utils/login';

const AppRouter = () => {
	const [user, setUser] = useState(null);

	const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]); // Prevents providerValue from changing unless user or setUser changes

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
	const { user, setUser } = useContext(UserContext);
	return (
		<div>
			<h2>Home</h2>
			<pre>{JSON.stringify(user, null, 2)}</pre>
			{user
				? 
				<button
					onClick={() => {
						// Call a logout function
						setUser(null);
					}}
				>Logout</button>
				:
				<button onClick={async () => {
					const user = await login();
					setUser(user);
				}}
				>Login</button>

			}

		</div>
	)
}

const About = () => {
	const { user } = useContext(UserContext);
	return (
		<div>
			<h2>About</h2>
			<pre>{JSON.stringify(user, null, 2)}</pre>
		</div>
	)
}