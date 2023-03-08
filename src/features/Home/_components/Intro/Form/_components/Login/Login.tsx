import { FC, useEffect, useState } from 'react';
import styles from './login.module.css';
import LoginInputs from './_components/LoginInputs/LoginInputs';

interface ILoginProps {
};

const Login: FC<ILoginProps> = (props) => {

  function handleLogin() {
    return '';
  };

  return (
    <div className={styles['login']}>
      <LoginInputs />
      <button onClick={handleLogin}>
        Login
      </button>
      <div className={styles['notes']}>
      </div>
    </div>
  )
};

export default Login;
