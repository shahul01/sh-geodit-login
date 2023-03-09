import { FC, useEffect, useState } from 'react';

interface IButtonProps {
  onClick: ()=>void;
  name: string;
};

const Button: FC<IButtonProps> = (props) => {

  return (
    <button onClick={props.onClick}>
      {props.name}
    </button>
  )
};

export default Button;
