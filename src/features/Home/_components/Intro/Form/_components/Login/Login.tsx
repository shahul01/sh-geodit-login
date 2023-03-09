import { FC, useEffect, useState } from 'react';
import LoginInputs, { ILoginForm } from './_components/LoginInputs/LoginInputs';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Button from '@/components/FormElements/Button/Button';
import useLogin from '@/helpers/hooks/useLogin';
import { simpleValidate } from '@/helpers/misc';
import styles from './login.module.css';

interface ILoginProps {
};

export interface ITokens {
  access: string;
  refresh: string;
}

export interface IResLogin {
  data: ITokens;
  message: string;
};

const Login: FC<ILoginProps> = (props) => {
  const initialLoginForm:ILoginForm = {
    username: '',
    password: ''
  };
  const initialToken = {
    access: "",
    refresh: ""
  };
  const [ isErrorLogin, setIsErrorLogin ] = useState(false);
  const [ loginForm, setLoginForm ] = useState<ILoginForm>(initialLoginForm);
  const { login } = useLogin();

  function handleForgotPassword() {
    return '';
  };

  async function handleLogin() {
    console.log(`loginForm: `, loginForm);

    const allFilled = simpleValidate(loginForm);
    if (!allFilled) return setIsErrorLogin(true);
    setIsErrorLogin(false);

    try {
      await login({form:loginForm});
      return resetForm();

    } catch(caughtError) {
      return console.error(caughtError);
    };
  };

  function resetForm() {
    return setLoginForm(initialLoginForm);
  };

  return (
    <div className={styles['login']}>
      <LoginInputs
        loginForm={loginForm}
        setLoginForm={setLoginForm}
      />
      <div className={styles['error-banner-container']}>
        {isErrorLogin && (
          <ErrorBanner
            message = 'Kindly fill all the fields properly.'
          />
        )}
      </div>
      <div className={styles['buttons-container']}>
        <p onClick={handleForgotPassword} >
          Forgot Password?
        </p>
        <Button
          isTransparent={false}
          color="themePrimary"
          name='Login'
          onClick={handleLogin}
        />
      </div>
      <div className={styles['notes']}>
        <hr />
        <h3>For testing only.</h3>
        <p>username test & password test!@123</p>
      </div>
    </div>
  )
};

export default Login;
