import { FC, useEffect, useState } from 'react';
import styles from './loginInputs.module.css';

interface ILoginInputsProps {
};

const LoginInputs: FC<ILoginInputsProps> = (props) => {

  return (
    <div className={styles['login-inputs']}>
      <input
        type="text"
        placeholder='Username'
      />
      <input
        type="text"
        placeholder='Password'
      />

    </div>
  )
};

export default LoginInputs;
