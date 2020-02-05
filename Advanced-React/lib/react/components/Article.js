import React from 'react';
import PropTypes from 'prop-types';

import storeProvider from '../providers/storeProvider';

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

const Article = ({article, author}) => {
	return (
		<div style={styles.article}>
			<p style={styles.title}>{article.title}</p>
			<p style={styles.date}>{dateDisplay(article.date)}</p>
			<p style={styles.author}>{author.firstName} {author.lastName}</p>
			<p style={styles.body}>{article.body}</p>
		</div>
	);
};

Article.propTypes = {
	article: PropTypes.shape({
		authorId: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}),
	author: PropTypes.object.isRequired
};

function extraProps(store, originalProps) {
	return {
		author: store.lookupAuthor(originalProps.article.authorId)
	};
}

export default storeProvider(extraProps)(Article);

const dateDisplay = (dateString) => new Date(dateString).toDateString();
