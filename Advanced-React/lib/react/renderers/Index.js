import React from 'react';
import ReactDOM from 'react-dom';

import DataApi from '../../data/DataApi';

import App from '../App';

const store = new DataApi(window.initialData);

ReactDOM.render(
	<App store={store}/>,
	document.getElementById('root')
);