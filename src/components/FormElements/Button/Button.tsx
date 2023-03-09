import { FC, useEffect, useState } from 'react';
import styles from './button.module.css';

interface IButtonProps {
  onClick: ()=>void;
  name: string;
};

const Button: FC<IButtonProps> = (props) => {

  return (
    <button
      className={styles['button']}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
};

export default Button;
