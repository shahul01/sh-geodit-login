import { FC, useEffect, useState } from 'react';
import styles from './button.module.css';

type TColor = 'white' | 'themePrimary';

interface IButtonProps {
  isTransparent: boolean;
  color: TColor;
  onClick: ()=>void;
  name: string;
};

const Button: FC<IButtonProps> = (props) => {

  const colorDict:{[x in TColor]:string} = {
    white: 'white',
    themePrimary: 'theme-primary'
  };

  function styleButton() {
    let style = {};

    props.isTransparent
      ? style = {...style,
          'border-color': 'hsl(var(--white))',
          'background-color': 'transparent'
        }
      : undefined
    style = {
      ...style,
      color: colorDict[props.color]
    };

    return style;
  };

  return (
    <button
      style={styleButton()}
      className={styles['button']}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  )
};

export default Button;
