import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import RecordingsContainer from './RecordingsContainer';

function User() {
    const user = useSelector(state => state.session.user)

    if (!user) {
      return null;
    }

  return (

      <div>
        <strong>{`${user.username}'s Page`}</strong>
        <RecordingsContainer />
      </div>

  );
}
export default User;
