import { FC, useEffect, useState } from 'react';
import RegisterInputs, { IRegisterForm } from './_components/RegisterInputs/RegisterInputs';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import { simpleValidate, urlPaths } from '@/helpers/misc';
import { fetchGet } from '@/helpers/_api';
import styles from './register.module.css';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  const initialRegisterForm: IRegisterForm = {
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    phoneNumber: '',
  };

  const [ isErrorRegister, setIsErrorRegister ] = useState(false);
  const [ registerForm, setRegisterForm ] = useState<IRegisterForm>(initialRegisterForm);

  async function handleRegister() {
    console.log('registerForm', registerForm);
    const allFilled = simpleValidate(registerForm);
    if (!allFilled) return setIsErrorRegister(true);

    setIsErrorRegister(false);

    const payload = {
      urlPath: urlPaths['register'],
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

    const resFetchRegister = await fetchGet(payload);
    console.log(`resFetchRegister: `, resFetchRegister);
    return resetForm();
  };

  function resetForm() {
    return setRegisterForm(initialRegisterForm);;
  };

  return (
    <div className={styles['register']}>
      <RegisterInputs
        registerForm={registerForm}
        setRegisterForm={setRegisterForm}
      />
      <div className={styles['error-banner-container']}>
        {isErrorRegister && (
          <ErrorBanner
            message='Kindly fill all the fields properly.'
          />
        )}
      </div>
      <div className={styles['buttons-container']}>
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
