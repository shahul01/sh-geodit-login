import { FC, useEffect, useState } from 'react';
import styles from './register.module.css';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  return (
    <div className={styles['register']}>
      <div className="inputs-container">
        <input type="text" placeholder='First name'/>
        <input type="text" placeholder='Last name'/>
        <input type="text" placeholder='Username'/>
        <input type="text" placeholder='Phone number'/>
        <input type="password" placeholder='password'/>
      </div>
      <div className="error-banner">

      </div>
      <div className="buttons-container">

      </div>
      <div className="notes">

      </div>

    </div>
  )
};

export default Register;
