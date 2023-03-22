import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const users = ['James', 'John', 'Alice', 'Ulathi', 'Allison', 'Maria'];
const Users = () => {
  const [userState, setUserState] = useState('');
  const [errorState, setErrorState] = useState('');

  useEffect(() => {
    const getAsyncUserData = async () => {
      const response = await fetch();
    };
  });

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
      <div>{errorState ? <div>{errorState}</div> : <div>&nbsp;</div>}</div>
      {userState ? (
        <motion.div animate={{ opacity: 1 }}>{userState}</motion.div>
      ) : (
        <div>Click the button to show a random user </div>
      )}
    </>
  );
};

export default Users;
