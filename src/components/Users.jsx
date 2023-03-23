import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from './Users.module.css';

const users = ['James', 'John', 'Alice', 'Ulathi', 'Allison', 'Maria'];
const Users = () => {
  const userRef = useRef();
  const [userState, setUserState] = useState('');
  const [errorState, setErrorState] = useState('');
  const [animate, setAnimate] = useState(false);

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

      // reset animation
      setAnimate(true);
    } else {
      setErrorState('Invalid data, please try again');
      setUserState(false);
    }
  };
  return (
    <>
      <button onClick={getUserHandler}>Get User</button>
      <div>{errorState ? <div>{errorState}</div> : <div>&nbsp;</div>}</div>
      <motion.div>
        {userState ? (
          <motion.div
            animate={{ opacity: 1 }}
            className={styles.user}
            ref={userRef}
          >
            {userState}
          </motion.div>
        ) : (
          <div>Click the button to show a random user </div>
        )}
      </motion.div>
    </>
  );
};

export default Users;
