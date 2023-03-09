import Input from '@/components/FormElements/Input/Input';
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
    return setRegisterForm({
      ...registerForm,
      [e.target?.name]: e.target?.value
    });
  };

  return (
    <div className={styles['register-inputs']}>
      <Input
        width='half'
        type="text"
        name="firstName"
        placeholder='First name'
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.firstName}
      />
      <Input
        width='half'
        type="text"
        name="lastName"
        placeholder="Last name"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.lastName}
      />
      <Input
        width='half'
        type="text"
        name="username"
        placeholder="Username"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.username}
      />
      <Input
        width='half'
        type="password"
        name="password"
        placeholder="Password"
        required={true}
        onChange={handleChangeRegister}
        value={registerForm.password}
      />
      <Input
        width='full'
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
