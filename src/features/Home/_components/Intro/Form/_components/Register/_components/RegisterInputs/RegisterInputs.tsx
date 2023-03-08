import { FC, useEffect, useState } from 'react';
import styles from './registerInputs.module.css';

interface IRegisterInputsProps {
};

const RegisterInputs: FC<IRegisterInputsProps> = (props) => {

  return (
    <div className={styles['register-inputs']}>
      <input
        type="text"
        placeholder='First name'
      />
      <input
        type="text"
        placeholder='Last name'
      />
      <input
        type="text"
        placeholder='Username'
      />
      <input
        type="text"
        placeholder='Phone number'
      />
      <input
        type="password"
        placeholder='password'
      />
    </div>
  )
};

export default RegisterInputs;
