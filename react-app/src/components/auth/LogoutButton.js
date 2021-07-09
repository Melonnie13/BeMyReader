import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './Auth.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return (

    <div className='nav-bar-item'>
      <label htmlFor='logout'></label>
      <button className='nav-bar-item' name='logout' onClick={onLogout}>Logout</button>
    </div>
  )
};

export default LogoutButton;
