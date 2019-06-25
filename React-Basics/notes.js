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

const headerWithReactCreateElement = React.createElement(
    'header',
    null,
    title,
    desc
);

// Using JSX
const title = <h1>My First React Element!</h1>;
console.log(title);

const desc = <p>I just learned how to create a React node and render it into the DOM.</p>

// const header = (
//     <header>
//         <h1>My First React Element!</h1>
//         <p>I just learned how to create a React node and render it into the DOM.</p>
//     </header>
// );

const title2 = 'My First React Element!';
const desc2 = 'I just learned how to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const name = 'Adrian';

// Curly braces used to write javascript in JSX
const header = (
    <header>
    {/* This is a comment */}
        <h1 id={myTitleID}>{ name }'s First React Element!</h1>
        <p className="main-desc">{ desc2 }</p>
    </header>
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


// Using Props
// Props - A list of properties used to pass data to a component. Components are customized and made reusable with props. Two steps to use props
// 1. Define the props in a component's JSX tag
// 2. Enable the use of props in a component


// Types of State
// Application State - Data that is available to the entire application
// Component State - State that is specific to a component and not shared outside of the component