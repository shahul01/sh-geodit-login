import { FC, useEffect, useState } from 'react';
import styles from './register.module.css';
import RegisterInputs from './_components/RegisterInputs/RegisterInputs';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  const [ isErrorRegister, setIsErrorRegister ] = useState(false);
  const [ registerForm, setRegisterForm ] = useState([]);


  function handleForgotPassword() {
    return '';
  };

  function handleRegister() {

    console.log('registerForm', registerForm);
    return '';
  };

  function handleResetForm() {
    return '';
  };

  return (
    <div className={styles['register']}>
      <div className={styles['inputs-container']}>
        <RegisterInputs />
      </div>
      <div className={styles['error-banner']}>
        {
          isErrorRegister && (
            <div className={styles['error-text']}>
              Incorrect username or password
            </div>
          )
        }
      </div>
      <div className={styles['buttons-container']}>
        <p className={styles['btn-forgot" onClick={handleForgotPassword']}>
          Forgot Password?
        </p>
        <button onClick={handleRegister}>
          Register
        </button>
      </div>
      <div className={styles['notes']}>
      </div>

    </div>
  )
};

export default Register;
