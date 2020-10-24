import React from 'react';
import { shallow } from 'enzyme';
import Header from '../component/header';
import { findByTestAttr } from '../../Utils';

const setUp = (props={}) => {
	return shallow(<Header {...props} />);
}

describe('Header Component', () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it('Should render without errors', () => {
		const wrapper = findByTestAttr(component, 'header-component'); 
		expect(wrapper.length).toBe(1);
	});

	it('Should render a logo with class logo-img', () => {
		const logo = component.find('.logo-img'); // Looks for class logo-img
		expect(logo.length).toBe(1);
	});
})
