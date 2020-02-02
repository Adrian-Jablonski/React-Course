import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	state = {
		answer: 'test'
	}

	render() {
		return (
			<h2>Hello React {this.state.answer}</h2>
		);
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);