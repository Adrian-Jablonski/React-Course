import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';

const ArticleList = ({articles, articleActions}) => {
	return (
		<div>
			{Object.values(articles).map((article, index) => {
				return (
					<Article 
						key={index}
						article={article}
						actions={articleActions}
					/>
				);
			})}
		</div>
	);
};

export default ArticleList;

ArticleList.propTypes = {
	articles: PropTypes.object.isRequired,
	articleActions: PropTypes.object.isRequired
};