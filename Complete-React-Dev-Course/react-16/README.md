# What's new in React 16

## componentDidCatch()

```javascript
state = {
    hasError: false
}

componentDidCatch() {
    this.setState({hasError: true});
}

render() {
    if (this.state.hasError) {
        return <h1>Something went wrong. </h1>
    } else {
        return (
            <div>
                // Regular component here
            </div>
        )
    }
}

```

## Error boundaries
- Error boundaries are wrapper components that use componentDidCatch() to capture errors anywhere in their child component tree and display a fallback UI

```javascript 

import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({hasError: true});
        // Could send error and info to error tracking service
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong. </h1>
        } else {
            return this.props.children
        }
    }
}

```

```javascript
class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Welcome to React</h1>
                </header>

                <ErrorBoundary>
                    <StudentForm />
                </ErrorBoundary>
            </div>
        )
    }
}

```

## New return types
- React 16 no longer requires that a render method returns a single React element. Multiple sibling elements can be rendered without a wrapping element by returning an array 

```javascript

import React from 'react';

const ColorList = () => {
    return [
        <li key="1">Red</li>,
        <li key="2">Green</li>,
        <li key="3">Blue</li>
    ];
}

export default ColorList

```

```javascript

import React from 'react';
import ColorList from './ColorList';

const AllColors = () => {
    <div>
        <h1>Color List</h1>
        <ul>
            <li>Yellow</li>
            <li>Black</li>
            <ColorList />   // ColorList is merged into the existing list
            <li>White</li>
        </ul>
    </div>
}

export default AllColors;

```

- The other new return types that React 16 supports are strings and numbers. These can be used without importing React

```javascript
const Header = () => 'Header';

export default Header;

```

```javascript
const Footer = () => 2020;

export default Footer;

```

- React v16.2.0 provides a first-class <Fragment> component that can be used in place of arrays letting you return multiple children from a component’s render method

```javascript

const Fragment = React.Fragment;

render() {
  return (
    <Fragment>
      Some text.
      <h2>A heading</h2>
      More text.
      <h2>Another heading</h2>
      Even more text.
    </Fragment>
  );
}

```

## Render Children into Other Dom Nodes with Portals

- React 16 introduces a new way of rendering into the DOM. You can render children into a DOM element that exists outside of your App's main DOM tree, with a new feature called portals

```html
<!-- index.html file -->

....

<div id="root"></div>
<div id="my-portal"></div>

...

```



```javascript
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
            {ReactDom.createPortal(
                <h1>Hellow from inside the portal!</h1>,
                document.getElementById('my-portal')
            )}
                <header>
                    <h1>Welcome to React</h1>
                </header>

                <ErrorBoundary>
                    <StudentForm />
                </ErrorBoundary>
            </div>
        )
    }
}

```

## Returning null from setState

- Check if the new value of state is the same as the existing value
- If the values are the same, return null
- Returning null will not update state and trigger a re-render

```javascript

class App extends Component {

    state = {
        value: ''
    }

    updateValue = value => {
        const newValue = value;
        this.setState(prevState => {
            if (state.value === newValue) {
                // Won't rerender component if the value is the same
                return null;
            } else {
                return {value}
            }
        })
    }

    ....
}

```