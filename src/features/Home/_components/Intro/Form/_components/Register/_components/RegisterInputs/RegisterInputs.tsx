import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import styles from './registerInputs.module.css';

export interface IRegisterForm {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  phoneNumber: string;
};

interface IRegisterInputsProps {
  registerForm: IRegisterForm;
  setRegisterForm: Dispatch<SetStateAction<IRegisterForm>>;
};

const RegisterInputs: FC<IRegisterInputsProps> = ({registerForm, setRegisterForm}) => {

  function handleChangeRegister(e:ChangeEvent<HTMLInputElement>) {
    setRegisterForm({
      ...registerForm,
      [e.target?.name]: e.target?.value
    });
    return '';
  };

  return (
    <div className={styles['register-inputs']}>
      <input
        type="text"
        name="firstName"
        placeholder='First name'
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.firstName}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last name"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.lastName}
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.password}
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone number"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.phoneNumber}
      />
    </div>
  )
};

export default RegisterInputs;
