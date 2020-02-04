import React, {Component} from 'react';
import axios from 'axios';

import DataApi from '../data/DataApi';
import ArticleList from './components/ArticleList';
import PropTypes from 'prop-types';

// import { data } from '../data/testData';

// const api = new DataApi(data);

class App extends Component {

	state = {
		articles: this.props.initialData.articles,
		authors: this.props.initialData.authors
	}
	
	componentDidMount = async () => {
		const resp = await axios.get('/data');
		const api = new DataApi(resp.data);

		this.setState(() => {
			return {
				articles: api.getArticles(),
				authors: api.getAuthors()
			};
		});
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId]
	}

	render() {
		return (
			<ArticleList
				articles={this.state.articles}
				articleActions={this.articleActions}
			/>
		);
	}
}

export default App;

App.propTypes = {
	initialData: PropTypes.object.isRequired,
};