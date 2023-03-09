import { FC, useEffect, useState } from 'react';
import IntroTexts from './IntroTexts/IntroTexts';
import Form from './Form/Form';
import styles from './intro.module.css';

interface IIntroProps {
};

const Intro: FC<IIntroProps> = (props) => {

  return (
    <div className={styles['intro']}>
      <IntroTexts />
      <Form />
    </div>
  )
};

export default Intro;
