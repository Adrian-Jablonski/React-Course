import React from 'react';
import PropTypes from 'prop-types';

const Article = ({article, author}) => {
	return (
		<div>
			<p>{article.title}</p>
			<p>{article.date}</p>
			<p>{author.firstName} {author.lastName}</p>
			<p>{article.body}</p>
		</div>
	);
};

export default Article;


Article.propTypes = {
	article: PropTypes.object.isRequired,
	author: PropTypes.object.isRequired
};