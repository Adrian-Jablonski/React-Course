import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({articles, store}) => {
	return (
		<div>
			{Object.values(articles).map((article, index) => {
				return (
					<Article 
						key={index}
						article={article}
						store={store}
					/>
				);
			})}
		</div>
	);
};

export default ArticleList;

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
};