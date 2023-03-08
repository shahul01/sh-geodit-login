import { FC, useEffect, useState } from 'react';
import Clients from './_components/Clients/Clients';
import Intro from './_components/Intro/Intro';

interface IHomeFeatureProps {
};

const HomeFeature: FC<IHomeFeatureProps> = (props) => {

  return (
    <div className='home-feature'>
      <Intro />
      <Clients />
    </div>
  )
};

export default HomeFeature;
