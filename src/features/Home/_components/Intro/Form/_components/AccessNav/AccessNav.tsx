import { FC, useEffect, useState } from 'react';

interface IAccessNavProps {
  handleChangeAccess: (arg0:string)=>void;
};

const AccessNav: FC<IAccessNavProps> = (props) => {

  return (
    <div className="access-nav">
      <button onClick={() => props.handleChangeAccess('login')}>Login</button>
      <button onClick={() => props.handleChangeAccess('register')}>Register</button>
    </div>
  )
};

export default AccessNav;
