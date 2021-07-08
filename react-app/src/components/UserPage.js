import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordingsContainer from './RecordingsContainer';
import AddFavorite from './AddFavorite';
import FavoritesContainer from './FavoritesContainer';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../store/user';
import './UserPage.css';

const UserPage = ({currentUser}) => {

  const {id} = useParams(); // userId for the userpage
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)// user for the userPage
  // console.log(user, '&&&&&&&&&&&&&&&&&&&&&&user from userpage component')
  // const sessionUser = useSelector(state => state.session.user)// passed in as prop instead

  useEffect(() => {
    dispatch(getOneUser(parseInt(id)))
  }, [dispatch, id]);

  return (

      <div>
        <div className='headline'>{`${user.username}'s Page`}</div>
        <div>
          <RecordingsContainer />
        </div>
        <div>
          <AddFavorite />
        </div>
        <div>
          <FavoritesContainer />
        </div>
      </div>

  );




}


export default UserPage;
