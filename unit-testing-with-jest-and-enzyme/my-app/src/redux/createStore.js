import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = createStore(
	RootReducer, 
	compose(applyMiddleware
	(...middlewares),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	));

export const store = createStoreWithMiddleware;
