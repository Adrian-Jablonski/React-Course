import React from 'react';

const Headline = ({ header, desc }) => {
	if (!header) {
		return null;
	}
	return (
		<div data-test="headline-component">
			<h1 data-test="header">{header}</h1>
			<p data-test="description">{desc}</p>
		</div>
	)
}

export default Headline;
