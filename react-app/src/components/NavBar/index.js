import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { demo } from '../../store/session';
import logo from '../../Images/logo.png';
import './NavBar.css';

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
    <>
      <nav id='nav'>
          <div className='nav-bar-item'>
            <NavLink id='nav-logo' to='/' exact={true}><img id='logo' src={logo} alt='Be My Reader Logo'/></NavLink>
          </div>
            {user ? (
              <>
                <div className='nav-bar-item'>
                  <NavLink className='nav-bar-item' to={`/users/${user.id}`} exact={true} activeClassName='active'>My Profile</NavLink>
                </div>
                <div className='nav-bar-item'>
                  <NavLink className='nav-bar-item' to='/search' exact={true} activeClassName='active'>Search</NavLink>
                </div>
                <div className='nav-bar-item'>
                  <NavLink className='nav-bar-item' to={`/recording/upload/`} exact={true} activeClassName='active'>Record Audio</NavLink>
                </div>
                <div>
                  <LogoutButton />
                </div>
              </> ) : (
                <>
                  <label htmlFor='demo-login'></label>
                  <button className='nav-bar-item nav-btn demo-btn' name='demo-login' type='button' id='demo-btn' onClick={demoLogin}>Demo Login</button>
                  <div className='nav-bar-item'>
                    <NavLink className='nav-bar-item nav-btn' to='/sign-up' exact={true} activeClassName='active'>Sign Up</NavLink>
                  </div>
                  <div className='nav-bar-item'>
                    <NavLink className='nav-bar-item nav-btn' to='/login' exact={true} activeClassName='active'>Login</NavLink>
                  </div>
                </>
            )}
      </nav>
    </>
  );
}

export default NavBar;
