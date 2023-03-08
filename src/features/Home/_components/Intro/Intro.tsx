import { FC, useEffect, useState } from 'react';
import Form from './Form/Form';
import styles from './intro.module.css';

interface IIntroProps {
};

const Intro: FC<IIntroProps> = (props) => {

  return (
    <div className={styles['intro']}>
      <Form />
    </div>
  )
};

export default Intro;
