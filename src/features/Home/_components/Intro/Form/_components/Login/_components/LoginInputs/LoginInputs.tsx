import Input from '@/components/FormElements/Input/Input';
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styles from './loginInputs.module.css';

export interface ILoginForm {
  username: string;
  password: string;
};

interface ILoginInputsProps {
  loginForm: ILoginForm;
  setLoginForm: Dispatch<SetStateAction<ILoginForm>>;
};

const LoginInputs: FC<ILoginInputsProps> = ({loginForm, setLoginForm}) => {

  function handleChangeLogin(e:ChangeEvent<HTMLInputElement>) {
    return setLoginForm({
      ...loginForm,
      [e.target?.name]: e.target?.value
    });
  };

  return (
    <div className={styles['login-inputs']}>
      <Input
        width="full"
        type="text"
        name="username"
        placeholder='Username'
        required={true}
        onChange={handleChangeLogin}
        value={loginForm.username}
      />
      <Input
        width="full"
        type="password"
        name="password"
        placeholder='Password'
        required={true}
        onChange={handleChangeLogin}
        value={loginForm.password}
      />

    </div>
  )
};

export default LoginInputs;
