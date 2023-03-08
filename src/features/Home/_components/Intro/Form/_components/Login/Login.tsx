import { FC, useEffect, useState } from 'react';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import styles from './login.module.css';
import LoginInputs from './_components/LoginInputs/LoginInputs';

interface ILoginProps {
};

const Login: FC<ILoginProps> = (props) => {
  const [ isErrorLogin, setIsErrorLogin ] = useState(false);

  function handleForgotPassword() {
    return '';
  };


  function handleLogin() {
    return '';
  };

  return (
    <div className={styles['login']}>
      <LoginInputs />

      {isErrorLogin && (
        <ErrorBanner
          message = 'Kindly fill all the fields properly.'
        />
      )}
      <div className="buttons-container">
        <p className={styles['btn-forgot']} onClick={handleForgotPassword} >
          Forgot Password?
        </p>
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className={styles['notes']}>
        <h3>For testing only.</h3>
        <p>username test & password test!@123</p>
      </div>
    </div>
  )
};

export default Login;
