import React, { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

const App = () => {

  const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });

  useEffect(() => {
    console.log('render');

    return () => {
      console.log('Unmounting');
    }
  }, [values.email, values.password])

  return (
    <div className="App">
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
  );
}

export default App;