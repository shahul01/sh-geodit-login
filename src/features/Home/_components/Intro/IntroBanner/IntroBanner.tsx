import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ImageIntro from '@/public/images/svg/intro.svg';
import styles from './introBanner.module.css';

interface IIntroBannerProps {
};

const IntroBanner: FC<IIntroBannerProps> = (props) => {

  return (
    <div className={styles['intro-banner']}>
      <Image
        src={ImageIntro}
        alt='Intro banner image'
      />
    </div>
  )
};

export default IntroBanner;
