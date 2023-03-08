import { FC, useEffect, useState } from 'react';
import styles from './register.module.css';
import RegisterInputs, { IRegisterForm } from './_components/RegisterInputs/RegisterInputs';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  const initRegisterForm: IRegisterForm = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    phoneNumber: '',
  };

  const [ isErrorRegister, setIsErrorRegister ] = useState(false);
  const [ registerForm, setRegisterForm ] = useState<IRegisterForm>(initRegisterForm);


  function handleForgotPassword() {
    return '';
  };

  function handleRegister() {

    console.log('registerForm', registerForm);

    return handleResetForm();
  };

  function handleResetForm() {
    return setRegisterForm(initRegisterForm);;
  };

  return (
    <div className={styles['register']}>
      <div className={styles['inputs-container']}>
        <RegisterInputs
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
        />
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
