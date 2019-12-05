import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './redux/store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {addExpense} from './redux/actions/expenses';
import {setTextFilter} from './redux/actions/filters';

import getVisibleExpenses from './redux/selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill'}))
store.dispatch(addExpense({description: 'Gas bill'}))

console.log(store.getState());

store.dispatch(setTextFilter('bill'));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

store.dispatch(setTextFilter('water'));

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

ReactDOM.render(<AppRouter />, document.getElementById('app'));