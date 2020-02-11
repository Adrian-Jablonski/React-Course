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