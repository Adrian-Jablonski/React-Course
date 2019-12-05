import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './redux/actions/expenses';
import { setTextFilter } from './redux/actions/filters';

import getVisibleExpenses from './redux/selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }))
store.dispatch(addExpense({ description: 'Gas bill' }))

store.dispatch(setTextFilter('water'));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

// Provider gives access to the Redux store to all components that need to use it and that use Connect to access the store
const jsx = (
    <Provider store={store}>
        <AppRouter></AppRouter>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));