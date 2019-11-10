import { createStore } from 'redux';

// Action generators - functions that return action objects
const incrementCount = ({incrementBy = 1} = {}) => {
    return {
        type: 'INCREMENT',
        // incrementBy: (incrementBy) ? incrementBy : 1
        incrementBy
    }
}

const decremantCount = ({decrementBy = 1} = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const setCount = ({count}) => {
    return {
        type: 'SET',
        count
    }
}

const reset = () => {
    return {
        type: 'RESET',
        count: 0
    }
}

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'SET':
            return {
                count: action.count
            }
        case 'RESET':
            return {
                count: action.count
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

// // Increment the count
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5  // used to pass dynamic data
// });

// store.dispatch({
//     type: 'INCREMENT'
// });

store.dispatch(incrementCount({incrementBy: 5}));
store.dispatch(incrementCount());

// RESET - set the count equal to zero
store.dispatch(reset());

store.dispatch(decremantCount());

store.dispatch(decremantCount({type: 'DECREMENT', decrementBy: 10}));

store.dispatch(setCount({count: 105}));