import { FC, useEffect, useState } from 'react';
import Logo from '@/components/Images/Logo/Logo';
import IntroTexts from './IntroTexts/IntroTexts';
import Form from './Form/Form';
import styles from './intro.module.css';

interface IIntroProps {
};

const Intro: FC<IIntroProps> = (props) => {

  return (
    <div className={styles['intro']}>
      <Logo />

      <div className={styles['content']}>
        <IntroTexts />
        <Form />
      </div>

    </div>
  )
};

export default Intro;
