import { FC, useEffect, useState } from 'react';
import LoginInputs, { ILoginForm } from './_components/LoginInputs/LoginInputs';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import { simpleValidate, urlPaths } from '@/helpers/misc';
import { fetchGet, IFetchGet } from '@/helpers/_api';
import styles from './login.module.css';

interface ILoginProps {
};

interface IResLogin {
  data: {
    access: string;
    refresh: string;
  };
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
  const [ tokens, setTokens ] = useState(initialToken);

  useEffect(() => {
    storeTokens();

  }, [tokens]);

  function storeTokens() {
    if (!tokens.access || !tokens.refresh) return;
    localStorage.setItem('tokens', JSON.stringify(tokens));
  };

  function handleForgotPassword() {
    return '';
  };

  async function handleLogin() {
    console.log(`loginForm: `, loginForm);

    const allFilled = simpleValidate(loginForm);
    if (!allFilled) return setIsErrorLogin(true);

    setIsErrorLogin(false);

    const payload:IFetchGet = {
      urlPath: urlPaths['login'],
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": "fgpkZS0u7b0CBpcHSE68nlAuzZ77PIG6mkDLVHbIwG4d3sSe7d9jJZhrwftzBXHX"
      },
      data: JSON.stringify({
        "username": loginForm.username,
        "password": loginForm.password,
      }),
    };

    const resFetchLogin:IResLogin = await fetchGet(payload);
    console.log('resFetchLogin', resFetchLogin);
    if (resFetchLogin?.message === "Login Successful") {
      setTokens({
        access: resFetchLogin.data?.access,
        refresh: resFetchLogin.data?.refresh
      });
    };
    return resetForm();
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
