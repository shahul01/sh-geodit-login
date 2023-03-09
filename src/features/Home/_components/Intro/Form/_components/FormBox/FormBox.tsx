import { FC, useEffect, useState } from 'react';
import AccessNav, { TPage } from '../AccessNav/AccessNav';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './formBox.module.css';

interface IFormBoxProps {
};

const FormBox: FC<IFormBoxProps> = (props) => {
  const [accessPage, setAccessPage] = useState<TPage>('login');


  function handleChangeAccess(page:TPage):void {
    return setAccessPage(page);
  };

  return (
    <div className={styles['form-box']}>
      <AccessNav
        handleChangeAccess={handleChangeAccess}
        currAccess={accessPage}
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
