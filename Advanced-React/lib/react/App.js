import React, {Component} from 'react';

import DataApi from '../data/DataApi';
import { data } from '../data/testData';

import ArticleList from './components/ArticleList';

const api = new DataApi(data);

class App extends Component {
	state = {
		articles: api.getArticles(),
		authors: api.getAuthors()
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