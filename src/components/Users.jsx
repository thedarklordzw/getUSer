import React, { useEffect, useState } from 'react';

const users = ['James', 'John', 'Alice', 'Ulathi', 'Allison', 'Maria'];
const Users = () => {
  const [userState, setUserState] = useState('');
  const [errorState, setErrorState] = useState('');

  const getUserHandler = () => {
    const number = Math.floor(Math.random() * 4);

    if (users.length >= number) {
      setUserState(users[number]);
      setErrorState(false);
    } else {
      setErrorState('Invalid data, please try again');
      setUserState(false);
    }
  };
  return (
    <>
      <button onClick={getUserHandler}>Get User</button>
      {errorState && <div>{errorState}</div>}
      {userState && <div>{userState}</div>}
    </>
  );
};

export default Users;
