import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../Utils';
import Headline from '../component/headline/Headline';

const setUp = (props={}) => {
	return shallow(<Headline {...props} />)
}

describe('Headline Component', () => {
	describe('Have props', () => {
		let wrapper
		beforeEach(() => {
			const props = {
				header: 'Test Header',
				desc: 'Test Desc'
			}
			wrapper = setUp(props);
		});

		it('Should render without errors', () => {
			const component = findByTestAttr(wrapper, 'headline-component');
			expect(component.length).toBe(1);
		});

		it('Should render a H1', () => {
			const component = findByTestAttr(wrapper, 'header');
			expect(component.length).toBe(1);
		});

		it('Should render a description', () => {
			const component = findByTestAttr(wrapper, 'description');
			expect(component.length).toBe(1);
		});
		
	});

	describe('Have NO props', () => {
		let wrapper
		beforeEach(() => {
			wrapper = setUp();
		})
		it('Should not render', () => {
			const component = findByTestAttr(wrapper, 'headline-component');
			expect(component.length).toBe(0);
		})
	});
})