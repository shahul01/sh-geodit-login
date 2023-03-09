import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import ImageCard from './ImageCard/ImageCard';
import ImageAIILSG from '@/public/images/svg/clients/client1-AIILSG.svg';
import ImageTraffic from '@/public/images/svg/clients/client2-traffic.svg';
import ImageWRI from '@/public/images/svg/clients/client3-wri.svg';
import ImageBannerClient from '@/public/images/svg/clients/clients.svg';
import styles from './clients.module.css';

interface IClientsProps {
};

const Clients: FC<IClientsProps> = (props) => {

  const imageCards = [
    {src: ImageAIILSG, alt: 'Image AIILSG'},
    {src: ImageTraffic, alt: 'Image Traffic'},
    {src: ImageWRI, alt: 'Image WRI'},
    {src: ImageAIILSG, alt: 'Image AIILSG'},
  ];

  return (
    <div className={styles['clients']}>
      <div className={styles['texts']}>
        <div className={styles['headers']}>
          <h2>Our Clients</h2>
          <div className={styles['sub-header']}>
            <p>{"It's all about clients we care a lot for them."}</p>
            <div className={styles['buttons-container']}>


            </div>
          </div>
          <div className={styles['image-cards-container']}>
            {
              imageCards.map((currImage, idx) => (
                <ImageCard
                  key={idx}
                  src={currImage.src}
                  alt={currImage.alt}
                />

              ))
            }
          </div>

        </div>
      </div>
      <div className={styles['right']}>
        <Image
          src={ImageBannerClient}
          alt="Image banner client"
        />
      </div>
    </div>
  )
};

export default Clients;
