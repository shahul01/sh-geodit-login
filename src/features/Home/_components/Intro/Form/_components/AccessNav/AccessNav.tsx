import { FC, useEffect, useState } from 'react';
import styles from './accessNav.module.css';

interface IAccessNavProps {
  handleChangeAccess: (arg0:string)=>void;
};

const AccessNav: FC<IAccessNavProps> = (props) => {

  return (
    <div className={styles['access-nav']}>
      <div className={styles['nav-button']}>
        <span onClick={() => props.handleChangeAccess('login')}>Login</span>
        <hr />
      </div>
      <div className={styles['nav-button']}>
        <span onClick={() => props.handleChangeAccess('register')}>Register</span>
        <hr />
      </div>
    </div>
  )
};

export default AccessNav;
