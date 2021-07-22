import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordingsContainer from './RecordingsContainer';
import AddFavorite from './AddFavorite';
import FavoritesContainer from './FavoritesContainer';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../store/user';
import { getUsersRecordings } from '../store/recording';
import './UserPage.css';

const UserPage = () => {

  const {id} = useParams(); // userId for the userpage
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)// user for the userPage
  // console.log(user, '&&&&&&&&&&&&&&&&&&&&&&user from userpage component')
  // const sessionUser = useSelector(state => state.session.user)// passed in as prop instead

  dispatch(getUsersRecordings(parseInt(id)))

  useEffect(() => {
    dispatch(getOneUser(parseInt(id)))
  }, [dispatch, id]);

  dispatch(getUsersRecordings(parseInt(id)))

  return (

      <div id='user-page'>
        <div className='headline'>{`${user.username}'s Page`}</div>
        <div id='user-page-items-container'>
          <div className='user-page-container'>
            <RecordingsContainer />
          </div>
          <div>
            <div className='user-page-container'>
              <FavoritesContainer />
            </div>
            <div>
              <AddFavorite />
            </div>
          </div>
        </div>
        </div>

  );




}


export default UserPage;
