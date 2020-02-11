import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';
import { useMeasure } from '../hooks/useMeasure';

const App = () => {
  // useEffect(() => {
  //   console.log('render');
  //   const onMouseMove = e => {
  //     console.log(e);
  //   }
  //   window.addEventListener('mousemove', onMouseMove);

  //   return () => {
  //     console.log('Unmounting');
  //     window.removeEventListener('mousemove', onMouseMove);
  //   }
  // }, [values.email, values.password])

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  const [count, setCount] = useState(JSON.parse(localStorage.getItem('count')) || 0);
  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  const inputRef = useRef();

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  const [rect, divRef] = useMeasure([data]);

  return (
    <div className="App">
      <div style={{display: 'flex'}}>
        <div ref={divRef}>
          {!data ? 'loading...' : data}
        </div>
      </div>
      <pre>
        {JSON.stringify(rect, null, 2)}
      </pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>+</button>


      <div>
        <label>First Name</label>
        <input
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          ref={inputRef}
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

      <button onClick={() => {
        inputRef.current.focus();
      }}>Focus</button>

    </div>
  );
}

export default App;