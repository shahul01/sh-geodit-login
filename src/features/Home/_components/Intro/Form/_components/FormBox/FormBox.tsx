import { FC, useEffect, useState } from 'react';
import styles from './formBox.module.css';

interface IFormBoxProps {
};

const FormBox: FC<IFormBoxProps> = (props) => {

  return (
    <div className={styles['form-box']}>
      Login | Register
    </div>
  )
};

export default FormBox;
