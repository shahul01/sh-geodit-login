import { ChangeEvent, FC, useEffect, useState } from 'react';
import styles from './input.module.css';

interface IInputProps {
  width: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
  value: string;
};

const Input: FC<IInputProps> = (props) => {

  function styleInput() {
    let style = {};
    props.width === 'full'
      ? style = {...style, width: '100%'}
      : style = {...style, width: '12.40rem'}

    return style;
  }

  return (
    <input
      style={styleInput()}
      className={styles['input']}
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      onChange={props.onChange}
      value={props.value}
    />
  )
};

export default Input;
