import Image from 'next/image';
import ImageIntro from '@/public/images/svg/intro.svg';
import { FC, useEffect, useState } from 'react';

interface IIntroBannerProps {
};

const IntroBanner: FC<IIntroBannerProps> = (props) => {

  return (
    <div className='intro-banner'>
      <Image
        src={ImageIntro}
        alt='Intro banner image'
      />
    </div>
  )
};

export default IntroBanner;
