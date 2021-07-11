import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './Auth.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='login-page'>
      <form className='input-form' onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <div>
            <label className='form-labels' htmlFor='email'>Email</label>
            <input
              name='email'
              type='text'
              className='form-input-login'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <label className='form-labels' htmlFor='password'>Password</label>
            <input
              name='password'
              type='password'
              className='form-input-login-password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
            <label htmlFor='login-button'></label>
            <button className='button' name='login-button' type='submit'>Login</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default LoginForm;
