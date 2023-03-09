import { FC, useEffect, useState } from 'react';
import LoginInputs, { ILoginForm } from './_components/LoginInputs/LoginInputs';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import { simpleValidate } from '@/helpers/misc';
import styles from './login.module.css';

interface ILoginProps {
};

const Login: FC<ILoginProps> = (props) => {
  const initialLoginForm:ILoginForm = {
    username: '',
    password: ''
  };
  const [ isErrorLogin, setIsErrorLogin ] = useState(false);
  const [ loginForm, setLoginForm ] = useState<ILoginForm>(initialLoginForm);

  function handleForgotPassword() {
    return '';
  };

  function handleLogin() {
    console.log(`loginForm: `, loginForm);

    const allFilled = simpleValidate(loginForm);
    if (!allFilled) return setIsErrorLogin(true);

    setIsErrorLogin(false);

    return resetForm();
  };

  function resetForm() {
    return setLoginForm(initialLoginForm);
  }

  return (
    <div className={styles['login']}>
      <LoginInputs
        loginForm={loginForm}
        setLoginForm={setLoginForm}
      />

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
