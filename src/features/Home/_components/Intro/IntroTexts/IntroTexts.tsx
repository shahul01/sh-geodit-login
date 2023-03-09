import { FC, useEffect, useState } from 'react';
import styles from './introText.module.css';
import Button from '@/components/FormElements/Button/Button';
import IntroBanner from '../IntroBanner/IntroBanner';

interface IIntroTextsProps {
};

const IntroTexts: FC<IIntroTextsProps> = (props) => {

  return (
    <div className={styles['intro-texts']}>
      <div className={styles['content']}>
        <h1>Geodit</h1>
        <p>One Stop Solution to all your GIS surveys</p>
        <h3>Now, store data on your server.</h3>
        <Button
          isTransparent={true}
          color="white"
          name='Watch Video ᐅ'
          onClick={()=>{}}
        />
      </div>
      <div className={styles['image-container']}>
        <IntroBanner />
      </div>
    </div>
  )
};

export default IntroTexts;
