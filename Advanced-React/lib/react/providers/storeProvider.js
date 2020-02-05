import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (Component) => {

	return class extends React.Component {
		static displayName = `${Component.name}Container`; // Display name to show in Components Dev Tools
		static contextTypes = {
			store: PropTypes.object
		}

		render() {
			return <Component {...this.props} store={this.context.store} />;
		}
	};

	// // Function component example
	// const WithStore = (props, {store}) => {
	// 	return <Component {...props} store={store} />;
	// };

	// WithStore.contextTypes = {
	// 	store: PropTypes.object
	// };

	// WithStore.displayName = `${Component.name}Container`;

	// return WithStore;
};

export default storeProvider;