import { FC, useEffect, useState } from 'react';
import styles from './register.module.css';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  const [isErrorRegister, setIsErrorRegister] = useState(false);

  function handleForgotPassword() {
    return '';
  };

  function handleLogin() {
    return '';
  };


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
        {
          isErrorRegister && (
            <div className="error-text">
              Incorrect username or password
            </div>
          )
        }
      </div>
      <div className="buttons-container">
        <p className="btn-forgot" onClick={handleForgotPassword}>
          Forgot Password?
        </p>
        <button onClick={handleLogin}>
          Login
        </button>
      </div>
      <div className="notes">
      </div>

    </div>
  )
};

export default Register;
