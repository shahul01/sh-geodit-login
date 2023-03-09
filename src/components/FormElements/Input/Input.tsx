import { ChangeEvent, FC, useEffect, useState } from 'react';

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  onChange: (e:ChangeEvent<HTMLInputElement>)=>void;
  value: string;
};

const Input: FC<IInputProps> = (props) => {

  return (
    <input
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
