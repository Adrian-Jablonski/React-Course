import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

const calcButtonObj = [
    {
        buttonText: "(",
        newRow: false,
        className: 'paren-button button'
    },
    {
        buttonText: ")",
        newRow: false,
        className: 'paren-button button'
    },
    {
        buttonText: "Back",
        newRow: false,
        className: 'other-button button'
    },
    {
        buttonText: "Clear",
        newRow: false,
        className: 'other-button button'
    },
    {
        buttonText: "9",
        newRow: true,
        className: 'numeric-button button'
    },
    {
        buttonText: "8",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "7",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "/",
        newRow: false,
        className: 'operator-button button'
    },
    {
        buttonText: "6",
        newRow: true,
        className: 'numeric-button button'
    },
    {
        buttonText: "5",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "4",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "*",
        newRow: false,
        className: 'operator-button button'
    },
    {
        buttonText: "3",
        newRow: true,
        className: 'numeric-button button'
    },
    {
        buttonText: "2",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "1",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "-",
        newRow: false,
        className: 'operator-button button'
    },
    {
        buttonText: "0",
        newRow: true,
        className: 'numeric-button button'
    },
    {
        buttonText: ".",
        newRow: false,
        className: 'numeric-button button'
    },
    {
        buttonText: "=",
        newRow: false,
        className: 'operator-button button'
    },
    {
        buttonText: "+",
        newRow: false,
        className: 'operator-button button'
    }
]

ReactDOM.render(<App calcButtonsObj={calcButtonObj}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
