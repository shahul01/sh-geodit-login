import { FC, useEffect, useState } from 'react';
import ImageCard from './ImageCard/ImageCard';
import ImageAIILSG from '@/public/images/svg/clients/client1-AIILSG.svg';
import ImageTraffic from '@/public/images/svg/clients/client2-traffic.svg';
import ImageWRI from '@/public/images/svg/clients/client3-wri.svg';

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
    <div className='clients'>
      <div className='headers'>
        <div className='left'>
          <h2>Our Clients</h2>
          <div className="sub-header">
            <p>{"It's all about clients we care a lot for them."}</p>
            <div className="buttons-container">


            </div>
          </div>
          <div className="image-cards-container">
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
        <div className='right'>

        </div>
      </div>
    </div>
  )
};

export default Clients;
