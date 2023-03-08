import { FC, useEffect, useState } from 'react';

interface ILoginProps {
};

const Login: FC<ILoginProps> = (props) => {

  return (
    <div className='login'>
      <input type="text" placeholder='Username' />
      <input type="text" placeholder='Password' />
      <button>Login</button>
    </div>
  )
};

export default Login;
