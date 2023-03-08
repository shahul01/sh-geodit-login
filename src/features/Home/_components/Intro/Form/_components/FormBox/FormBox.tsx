import { FC, useEffect, useState } from 'react';
import AccessNav from '../AccessNav/AccessNav';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './formBox.module.css';

interface IFormBoxProps {
};

const FormBox: FC<IFormBoxProps> = (props) => {
  const [accessPage, setAccessPage] = useState('login');


  function handleChangeAccess(page:string):void {
    return setAccessPage(page);
  };

  return (
    <div className={styles['form-box']}>
      <AccessNav
        handleChangeAccess={handleChangeAccess}
      />

      {
        accessPage === 'register'
          ? <Register />
          : <Login />
      }
    </div>
  )
};

export default FormBox;
