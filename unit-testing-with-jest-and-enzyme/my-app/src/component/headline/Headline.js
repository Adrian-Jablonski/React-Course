import React from 'react';
import { string } from 'prop-types';

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

Headline.propTypes = {
	header: string,
	desc: string
}

export default Headline;
