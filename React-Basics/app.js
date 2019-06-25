const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.' },
    'My First React Element!'
);  // Object with type, props, and children

console.log(title);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it into the DOM.'
);

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