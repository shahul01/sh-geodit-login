import { FC, useEffect, useState } from 'react';
import Button from '@/components/FormElements/Button/Button';

interface IIntroTextsProps {
};

const IntroTexts: FC<IIntroTextsProps> = (props) => {

  return (
    <div className='intro-texts'>
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
  )
};

export default IntroTexts;
