import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { useFetch } from '../hooks/useFetch';

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

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count])

  return (
    <div className="App">
      <div>
        {!data ? 'loading...' : data}
      </div>
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

    </div>
  );
}

export default App;