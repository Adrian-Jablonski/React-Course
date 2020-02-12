# React Hooks

- React hooks can only be used with functional components. Hooks do not work with class Components
- Can't call Hooks inside loops, conditions, or nested function. Always use Hooks at the top level of a React function

## useState
- useState is a replacement for state
- useState returns an array with two values. The first is the state and the second is a function to update state

### Basic useState Example
```javascript
import React, {useState} from 'react';

const App = () => {
	const [count, setCount] = useState(10);
	
	return (
		<div className="App">
			{/* Using the count variable */}
			<button onClick={() => setCount(count - 1)}>-</button>
			{/* Using a function */}
			<button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
			<div>{count}</div>
		</div>
	);
}

export default App;

```


### useState example with object as state
```javascript
import React, { useState } from 'react';

const App = () => {
  const [{ count2, count3 }, setCountObj] = useState({ count2: 20, count3: 50 });

  return (
    <div className="App">
      <div>
        <h2>Count 2 & 3</h2>
        <button
          onClick={() =>
            setCountObj(currentState => ({
              ...currentState,  // Need to make a copy of state or other values in state object will be lost
              count2: currentState.count2 + 1
            }))
          }
        >+</button>
        <div>Count: 2 {count2}</div>
        <button
          onClick={() =>
            setCountObj(currentState => ({
              ...currentState, // Need to make a copy of state or other values in state object will be lost
              count3: currentState.count3 + 1
            }))
          }
        >+</button>
        <div>Count: 3 {count3}</div>
      </div>
    </div>
  );
}

export default App;

```

### Form Example

```javascript 
import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <label>Email</label>
      <input 
        name='email' 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input 
        type='password' 
        name='password' 
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
}

export default App;
```

### Form Example using a hook file

App.js
```javascript 
import React from 'react';
import { useForm } from '../hooks/useForm';

const App = () => {

  const [values, handleChange] = useForm({email: '', password: ''});

  return (
    <div className="App">
      <label>Email</label>
      <input 
        name='email' 
        value={values.email}
        onChange={handleChange}
      />
      <label>Password</label>
      <input 
        type='password' 
        name='password' 
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
```

useForm.js
```javascript
import {useState} from 'react';

export const useForm = (initialValues) => {
	const [values, setValues] = useState(initialValues);

	return [values, e => {
		setValues({
			...values,
			[e.target.name]: e.target.value
		})
	}]
}
```

## UseEffect
- Runs each time a component is rendered
- Replacement for componentDidMount and componentWillUnmount

### Basic use effect example
```javascript
import React, {useEffect} from 'react';

const App = () => {

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  useEffect(() => {
    console.log('render');
  }, [values.email, values.password]) // Only renders when email or password is changed since dependency array is passed values.email and values.password

  return (
    <div className="App">
      ....
    </div>
  );
}

export default App;

```

### componentWillUnmount example
- Can return a cleanup function in useEffect to run a function that works like componentWillUnmount

```javascript
import React, {useEffect} from 'react';

const App = () => {

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  useEffect(() => {
    return () => {
      // componentWillUnmount replacement
      console.log('Unmounting');
    }
  }) 

  return (
    <div className="App">
      ....
    </div>
  );
}

export default App;

```

### API fetch example with useEffect and useState

```javascript
// useFetch.js
import { useEffect, useState } from "react"

export const useFetch = (url) => {
	const [state, setState] = useState({data: null, loading: true});

	useEffect(() => {
		setState(state => ({data: state.data, loading: true}));
		fetch(url)
			.then(x => x.text())
			.then(y => {
				setState({data: y, loading: false})
			});
	}, [url])

	return state;
}
```

```javascript
// App.js
import React from 'react';
import { useFetch } from '../hooks/useFetch';

const App = () => {
  const [count, setCount] = useState(0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  return (
    <div className="App">
      <div>
        {!data ? 'loading...' : data}
      </div>
    </div>
  );
}

export default App;

```

## useRef

### Basic useRef example

```javascript
import React, { useRef } from 'react';

const App = () => {
  const inputRef = useRef();

  return (
    <div className="App">
      <div>
        <label>Email</label>
        <input
          ref={inputRef}
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <button onClick={() => {
        inputRef.current.focus();
      }}>Focus</button>

    </div>
  );
}

export default App;

```

## useLayoutEffect

- The signiture is identical to useEffect, but it fires synchronously after all DOM mutations.
- useEffect can usually be used in place of useLayoutEffect

### Basic useLayoutEffect example

```javascript
import React, { useRef } from 'react';

const App = () => {
  const inputRef = useRef();

   useLayoutEffect(() => {
    //  Logs the position of the element stored in inputRef
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const divRef = useRef();
  useLayoutEffect(() => {
    // Will show everytime data updates
    console.log(divRef.current.getBoundingClientRect());
  }, [data]);

  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <div ref={divRef}>
          {!data ? 'loading...' : data}
        </div>
      </div>
      <div>
        <label>Email</label>
        <input
          ref={inputRef}
          name='email'
          value={values.email}
          onChange={handleChange}
        />
      </div>

      <button onClick={() => {
        inputRef.current.focus();
      }}>Focus</button>

    </div>
  );
}

export default App;

```

## useCallback
- useCallback can be used to prevent a function from rerendering a child component when passed as a prop. The child component must be using React.memo to prevent rerendering if the prop values did not change

```javascript
import React, { useState, useCallback } from 'react';
import AppChild from './AppChild';

const App2 = () => {
	const [count, setCount] = useState(0);

	const increment = useCallback(() => {
		// passing count to function like below will still change the function
		// setCount(count + 1)

		// Using the below will not change the function
		setCount(c => c + 1);
	}, [setCount])

	return (
		<div>
			<AppChild increment={increment}/>
			<div>count: {count}</div>
		</div>
	);
}

export default App2;

```

```javascript
import React from 'react';
import {useCountRenders} from '../hooks/useCountRenders';

// React.memo compares props and will only rerender component if props have changed. By Default React always rerenders a child component if the parent component changes
const AppChild = React.memo(({increment}) => {
	useCountRenders();

	return (
		<div>
			<h2>Hello</h2>
			<button onClick={increment}>+</button>
		</div>
	);
});

export default AppChild;

```

## useMemo
- Used to limit function computation to only when the dependency value changes instead of on each render

### Basic Example

```javascript
import React, { useState, useMemo } from 'react';
import { useFetch } from '../hooks/useFetch';

const App3 = () => {
	const [count, setCount] = useState(0);
	const {data} = useFetch('https://jsonplaceholder.typicode.com/todos')

  // This will only be computed when data changes
	const longestTitle = useMemo(() => computeLongestTitle(data), [data]);

	return (
		<div>
			<div>count: {count}</div>
			<button onClick={() => setCount(count + 1)}>+</button>
			<div>{longestTitle}</div>
		</div>
	);
}

export default App3;

// This function should either be outside of the component or inside of useCallback for useMemo to work
const computeLongestTitle = (apiData) => {
	if (!apiData) {
		return [];
	};

	const longestTitle = JSON.parse(apiData).reduce((a, b) => {
		return a.title.length > b.title.length ? a : b;
	}).title;
	return [longestTitle];
}

```

## useReducer
- Is used similarly to Redux Reducer

### Basic Example
```javascript
import React, {useReducer} from 'react';

const App4 = () => {
	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			<div>Count: {count}</div>
			<button onClick={() => dispatch({type: 'INCREMENT'})}> + </button>
			<button onClick={() => dispatch({type: 'DECREMENT'})}> - </button>
		</div>
	);
}

export default App4;

const reducer = (state, action) => {
	switch(action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	};
}
```