import { FC, useEffect, useState } from 'react';
import styles from './header.module.css';

interface IHeaderProps {
};

const Header: FC<IHeaderProps> = (props) => {

  return (
    <div className={styles['header']}>
      <h3>Admin Panel</h3>
      <p>Register now to get 15 days trial.</p>
    </div>
  )
};

export default Header;
