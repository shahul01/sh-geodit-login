import { FC, useEffect, useState } from 'react';
import styles from './form.module.css';

interface IFormProps {
};

const Form: FC<IFormProps> = (props) => {

  return (
    <div className={styles['form']}>
      <div className={styles['header']}>
        <h3>Admin Panel</h3>
        <p>Register now to get 15 days trial.</p>
      </div>
      <div className={styles['form-box']}>
        Login | Register
      </div>

    </div>
  )
};

export default Form;
