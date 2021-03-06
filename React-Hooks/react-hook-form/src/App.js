import React from 'react';
import { useForm } from 'react-hook-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const App = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const validateUserName = async (value) => {
    await sleep(1000);
    if (value === 'test') return true;
    return false;
  }

  return (
    <form className='App' onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign Up</h1>
      <label>First Name:</label>
      <input name='firstName' ref={register({ required: true, minLength: 2, pattern: /^[A-Za-z]+$/i })} />
      {errors.firstName && errors.firstName.type === 'required' &&
        <p>This is required</p>
      }
      {errors.firstName && errors.firstName.type === 'minLength' &&
        <p>This field required min length of 2</p>
      }
      {errors.firstName && errors.firstName.type === 'pattern' &&
        <p>Please enter only letters</p>
      }

      <label>Last Name:</label>
      <input name='lastName' ref={register({ required: true })} />
      {errors.lastName &&
        <p>This is required</p>
      }

      <label>Gender</label>
      <select name='gender' ref={register({ required: true })}>
        <option value=''>Select...</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      <label>Username</label>
      <input name='username' ref={register({ required: true, validate: validateUserName })} />
      {errors.username &&
        <p>This is required</p>
      }

      <label>Email</label>
      <input name='email' ref={register({ required: true })} />
      {errors.email &&
        <p>This is required</p>
      }

      <label>About you</label>
      <textarea name='aboutYou' ref={register({ required: true })} />
      {errors.aboutYou &&
        <p>This is required</p>
      }

      <input type='submit' />
    </form>
  );
}

export default App;