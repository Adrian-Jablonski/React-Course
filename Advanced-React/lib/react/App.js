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


	render() {
		return (
			<ArticleList
				articles={this.state.articles}
				authors={this.state.authors}
			/>
		);
	}
}

export default App;