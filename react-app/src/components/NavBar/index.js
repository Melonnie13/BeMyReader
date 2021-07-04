import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { demo } from '../../store/session';
import './NavBar.css'

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)

  const demoLogin = async (e) => {
    e.preventDefault();
    dispatch(demo())

    history.push("/");
  };

  return (
    <nav>
      <NavLink to='/' exact={true}>BMR</NavLink>
      <ul className='nav-bar'>
        {user ? (
          <>
            <li className='nav-bar-item'>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li className='nav-bar-item'>
              <NavLink to={`/recording/upload/`} exact={true} activeClassName='active'>
                Record Audio
              </NavLink>
            </li>
            <li className='nav-bar-item'>
              <LogoutButton />
            </li>
              <li className='nav-bar-item'>
                <NavLink to={`/users/${user.id}`} exact={true} activeClassName='active'>My Profile</NavLink>
              </li>
          </> ) : (
            <>
              <label htmlFor='demo-login'></label>
              <button name='demo-login' type='button' id='demo-btn' onClick={demoLogin}>Demo Login</button>
              <li className='nav-bar-item'>
                <NavLink to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
              </li>
              <li className='nav-bar-item'>
                <NavLink to='/login' exact={true} activeClassName='active'>Login</NavLink>
              </li>
            </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
