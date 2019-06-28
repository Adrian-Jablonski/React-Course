import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const calcButtonObj = [
    {
        buttonText: "9",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "8",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "7",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "-",
        newRow: false,
        className: 'operator-button'
    },
    {
        buttonText: "6",
        newRow: true,
        className: 'numeric-button'
    },
    {
        buttonText: "5",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "4",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "+",
        newRow: false,
        className: 'operator-button'
    },
    {
        buttonText: "3",
        newRow: true,
        className: 'numeric-button'
    },
    {
        buttonText: "2",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "1",
        newRow: false,
        className: 'numeric-button'
    },
    {
        buttonText: "=",
        newRow: false,
        className: 'operator-button'
    },
]

ReactDOM.render(<App calcButtonsObj={calcButtonObj}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
