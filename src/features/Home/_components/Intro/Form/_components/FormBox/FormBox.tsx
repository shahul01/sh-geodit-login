import { FC, useEffect, useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import styles from './formBox.module.css';

interface IFormBoxProps {
};

const FormBox: FC<IFormBoxProps> = (props) => {

  return (
    <div className={styles['form-box']}>
      <Register />
      <hr />
      <Login />
    </div>
  )
};

export default FormBox;
