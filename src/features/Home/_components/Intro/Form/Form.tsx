import { FC, useEffect, useState } from 'react';
import Header from './_components/Header';
import FormBox from './_components/FormBox/FormBox';
import styles from './form.module.css';

interface IFormProps {
};

const Form: FC<IFormProps> = (props) => {

  return (
    <div className={styles['form']}>
      <Header />
      <FormBox />

    </div>
  )
};

export default Form;
