import { FC, useEffect, useState } from 'react';
import IntroTexts from './IntroTexts/IntroTexts';
import IntroBanner from './IntroBanner/IntroBanner';
import Form from './Form/Form';
import styles from './intro.module.css';

interface IIntroProps {
};

const Intro: FC<IIntroProps> = (props) => {

  return (
    <div className={styles['intro']}>
      <IntroTexts />
      <IntroBanner />
      <Form />
    </div>
  )
};

export default Intro;
