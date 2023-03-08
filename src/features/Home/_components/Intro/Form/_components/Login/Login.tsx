import { FC, useEffect, useState } from 'react';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import styles from './login.module.css';
import LoginInputs from './_components/LoginInputs/LoginInputs';

interface ILoginProps {
};

const Login: FC<ILoginProps> = (props) => {
  const [ isErrorLogin, setIsErrorLogin ] = useState(false);

  function handleLogin() {
    return '';
  };

  return (
    <div className={styles['login']}>
      <LoginInputs />
      <button onClick={handleLogin}>
        Login
      </button>
      {isErrorLogin && (
        <ErrorBanner
          message = 'Kindly fill all the fields properly.'
        />
      )}
      <div className={styles['notes']}>
      </div>
    </div>
  )
};

export default Login;
