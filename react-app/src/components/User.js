import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

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
