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