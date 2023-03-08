import { FC, useEffect, useState } from 'react';
import styles from './register.module.css';
import { fetchRegister } from './_api/register';
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

  async function handleRegister() {
    console.log('registerForm', registerForm);

    const payload = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRFTOKEN": "fgpkZS0u7b0CBpcHSE68nlAuzZ77PIG6mkDLVHbIwG4d3sSe7d9jJZhrwftzBXHX"
      },
      data: JSON.stringify({
        "first_name": registerForm.firstName,
        "last_name": registerForm.lastName,
        "username": registerForm.username,
        "password": registerForm.password,
        "phone_number": registerForm.phoneNumber,
      }),
    };

    const resFetchRegister = await fetchRegister(payload);
    console.log(`resFetchRegister: `, resFetchRegister);
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
