const titleWithReactCreateElement = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' },
    'My First React Element!'
);  // Object with type, props, and children

console.log(titleWithReactCreateElement);

const descWithReactCreateElement = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);


// Using JSX
const title = <h1>My First React Element!</h1>;
console.log(title);

const desc = <p>I just learned how to create a React node and render it into the DOM.</p>

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

// // Renders title react html to root element
// ReactDOM.render(
//     title,
//     document.getElementById('root')
// );

ReactDOM.render(
    header,
    document.getElementById('root')
);