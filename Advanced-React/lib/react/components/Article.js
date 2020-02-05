import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	article: {
		paddingBottom: 10,
		borderBottomStyle: 'solid',
		borderBottomColor: '#aaa',
		borderBottomWidth: 1,
		marginBottom: 10
	},
	title: {
		fontWeight: 'bold'
	},
	date: {
		fontSize: '0.8em',
		color: '#888'
	},
	author: {
		paddingTop: 10,
		paddingBottom: 10
	},
	body: {
		paddingLeft: 20
	}
};

const Article = ({article, store}) => {
	const author = store.lookupAuthor(article.authorId);
	return (
		<div style={styles.article}>
			<p style={styles.title}>{article.title}</p>
			<p style={styles.date}>{dateDisplay(article.date)}</p>
			<p style={styles.author}>{author.firstName} {author.lastName}</p>
			<p style={styles.body}>{article.body}</p>
		</div>
	);
};

export default Article;


Article.propTypes = {
	article: PropTypes.object.isRequired,
	store: PropTypes.object.isRequired
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();
