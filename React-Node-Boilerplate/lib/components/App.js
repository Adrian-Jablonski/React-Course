import React, {Component} from 'react';

class App extends Component {
	state = {
		test: 'test'
	}


	render() {
		return (
			<div>State: {this.state.test}</div>
		);
	}
}

export default App;