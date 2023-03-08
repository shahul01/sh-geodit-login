import { FC, useEffect, useState } from 'react';

interface IRegisterProps {
};

const Register: FC<IRegisterProps> = (props) => {

  return (
    <div className='register'>
      <input type="text" placeholder='First name'/>
      <input type="text" placeholder='Last name'/>
      <input type="text" placeholder='Username'/>
      <input type="text" placeholder='Phone number'/>
      <input type="password" placeholder='password'/>

    </div>
  )
};

export default Register;
