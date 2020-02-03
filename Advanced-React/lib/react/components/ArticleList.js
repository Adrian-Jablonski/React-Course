import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({articles, authors}) => {
	return (
		<div>
			{Object.values(articles).map((article, index) => {
				return (
					<Article 
						key={index}
						article={article}
						author={authors[article.authorId]}
					/>
				);
			})}
		</div>
	);
};

export default ArticleList;

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	authors: PropTypes.object.isRequired
};