import { FC, useEffect, useState } from 'react';
import Form from './Form/Form';

interface IIntroProps {
};

const Intro: FC<IIntroProps> = (props) => {

  return (
    <div className='intro'>
      <Form />
    </div>
  )
};

export default Intro;
