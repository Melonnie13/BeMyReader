import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RecordingsContainer from './RecordingsContainer';
import { useParams } from 'react-router-dom';
import { getOneUser } from '../store/user';

const UserPage = ({currentUser}) => {

  const {id} = useParams(); // userId for the userpage
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)// user for the userPage
  console.log(user, '&&&&&&&&&&&&&&&&&&&&&&user from userpage component')
  // const sessionUser = useSelector(state => state.session.user)// passed in as prop instead

  useEffect(() => {
    dispatch(getOneUser(parseInt(id)))
  }, [dispatch, id]);

  return (

      <div>
        <strong>{`${user.username}'s Page`}</strong>
        <RecordingsContainer />
      </div>

  );




}


export default UserPage;
