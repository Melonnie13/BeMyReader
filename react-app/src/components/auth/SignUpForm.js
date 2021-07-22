import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [visionImpaired, setVisionImpaired] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, visionImpaired, password));
      if (data) {
        setErrors(data)
      }
    } else {
      alert ('passwords do not match')
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateVisionImpaired = () => {
    setVisionImpaired((prevValue)=>!prevValue);
  };
  console.log(visionImpaired, "***************from signup form component*****************")

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id='signup-page'>
      <form className='input-form' onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div id='signup-form-inputs-container'>
          <div>
            <label className='form-labels-signup' htmlFor='enter-username'>User Name</label>
            <input
              type='text'
              name='enter-username'
              className='form-input-signup-username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label className='form-labels-signup' htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              className='form-input-signup-email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <label className='form-labels-signup' htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className='form-input-signup-password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <label className='form-labels-signup' htmlFor='repeat_password'>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              className='form-input-signup'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <label htmlFor='sign_up_button'></label>
          <div>
            <label className='form-labels-signup' htmlFor='vision-impaired-checkbox'>Vision Impaired Check Box For Yes</label>
            <input
              type='checkbox'
              name='vision-impaired-checkbox'
              id='form-checkbox'
              checked={visionImpaired}
              onChange={updateVisionImpaired}
            ></input>
          </div>
          <button className='button' name='sign_up_button' type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
