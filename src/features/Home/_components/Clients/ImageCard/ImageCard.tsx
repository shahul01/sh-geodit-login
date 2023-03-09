import Image, {StaticImageData } from 'next/image';
import { FC, useEffect, useState } from 'react';

interface IImageCardProps {
  src: string | StaticImageData ;
  alt: string;
};

const ImageCard: FC<IImageCardProps> = (props) => {

  return (
    <div className='image-card'>
      <Image
        src={props.src}
        alt={props.alt}
      />
    </div>
  )
};

export default ImageCard;
