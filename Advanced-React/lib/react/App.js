import React, {Component} from 'react';
import ArticleList from './components/ArticleList';
import PropTypes from 'prop-types';

// import { data } from '../data/testData';

// const api = new DataApi(data);

class App extends Component {
	static childContextTypes = {
		store: PropTypes.object
	}
	getChildContext() {
		return {
			store: this.props.store
		};
	}

	state = this.props.store.getState();
	
	// ***** Data is now pre loaded on server so this is not needed *******
	// componentDidMount = async () => {
	// 	const resp = await axios.get('/data');
	// 	const api = new DataApi(resp.data);

	// 	this.setState(() => {
	// 		return {
	// 			articles: api.getArticles(),
	// 			authors: api.getAuthors()
	// 		};
	// 	});
	// }

	// **** Moved to DataApi
	// articleActions = {
	// 	lookupAuthor: authorId => this.state.authors[authorId]
	// }

	render() {
		return (
			<ArticleList
				articles={this.state.articles}
				store={this.props.store}
			/>
		);
	}
}

export default App;

App.propTypes = {
	store: PropTypes.object.isRequired
};