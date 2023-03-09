import { FC, useEffect, useState } from 'react';
import styles from './accessNav.module.css';

export type TPage = 'login'|'register';

interface IAccessNavProps {
  handleChangeAccess: (arg0:TPage)=>void;
  currAccess: 'login' | 'register';
};

const AccessNav: FC<IAccessNavProps> = (props) => {

  return (
    <div className={styles['access-nav']}>
      <div className={styles['nav-button']}>
        <span onClick={() => props.handleChangeAccess('login')}>Login</span>
        {props.currAccess === 'login' && <hr />}
      </div>
      <div className={styles['nav-button']}>
        <span onClick={() => props.handleChangeAccess('register')}>Register</span>
        {props.currAccess === 'register' && <hr />}
      </div>
    </div>
  )
};

export default AccessNav;
