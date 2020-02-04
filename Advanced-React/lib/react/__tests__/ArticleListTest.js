import React from 'react';
import ArticleList from '../components/ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {

	const testProps = {
		articles: {
			a: {id: 'a'},
			b: {id: 'b'}
		},
		articleActions: {
			lookupAuthor: jest.fn(() => ({})),
		}
	}

	it('renders correctly', () => {
		const tree = renderer.create(
			<ArticleList 
				{...testProps}
			/>
		).toJSON();

		expect(tree.children.length).toBe(2);

		expect(tree).toMatchSnapshot(); // Takes a snapshot the first time the test is run. And compares the snapshot taken to each following snapshot. The snapshot is saved in the __snapshots__ folder
		// Making any changes to component will cause the test to fail, but you could inspect the changes in the console and press u to update the snapshot
	});


});