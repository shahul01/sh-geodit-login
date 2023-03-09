import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import ImageLogo from '@/public/images/svg/logo.svg';
import styles from './logo.module.css';

interface ILogoProps {
};

const Logo: FC<ILogoProps> = (props) => {

  return (
    <div className={styles['logo']}>
      <Image
        src={ImageLogo}
        alt="Geodit Logo"
      />
    </div>
  )
};

export default Logo;
