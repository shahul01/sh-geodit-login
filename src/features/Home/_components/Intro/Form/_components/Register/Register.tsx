import { FC, useEffect, useState } from 'react';
import RegisterInputs, { IRegisterForm } from './_components/RegisterInputs/RegisterInputs';
import ErrorBanner from '../ErrorBanner/ErrorBanner';
import Button from '@/components/FormElements/Button/Button';
import useLogin from '@/helpers/hooks/useLogin';
import { fetchGet } from '@/helpers/_api';
import { simpleValidate, urlPaths } from '@/helpers/misc';
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
  const { login } = useLogin();

  async function handleRegister() {
    console.log('registerForm', registerForm);
    const allFilled = simpleValidate(registerForm);
    if (!allFilled) return setIsErrorRegister(true);

    setIsErrorRegister(false);

    const payloadRegister = {
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

    const payloadLogin = {
      form: {
        username: registerForm.username,
        password: registerForm.password
      }
    };

    try {
      const resFetchRegister = await fetchGet(payloadRegister);
      console.log(`resFetchRegister: `, resFetchRegister);
      const statusLogin = await login(payloadLogin);
      return resetForm();

    } catch (caughtError) {
      return console.error(caughtError);
    };
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
        <Button
          isTransparent={false}
          color="themePrimary"
          onClick={handleRegister}
          name='Register'
        />
      </div>
      <div className={styles['notes']}>
      </div>

    </div>
  )
};

export default Register;
