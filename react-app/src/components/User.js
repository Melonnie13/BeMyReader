import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function User() {
    const user = useSelector(state => state.session.user)

    if (!user) {
      return null;
    }

  return (
      <div>
      {/* <li>
        <strong>User Id</strong> {userId}
      </li> */}
      <div>
        <strong>{`${user.username}'s Page`}</strong>
      </div>
      {/* <li>
        <strong>Email</strong> {user.email}
      </li> */}
      </div>
  );
}
export default User;
