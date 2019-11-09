import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = (action.incrementBy) ? action.incrementBy : 1
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            const decrementBy = (action.decrementBy) ? action.decrementBy : 1
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    // watches for changes in redux store state
    console.log(store.getState());
})

// Actions - an object that gets sent to the store

// Increment the count
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5  // used to pass dynamic data
});

store.dispatch({
    type: 'INCREMENT'
});

// RESET - set the count equal to zero
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
})