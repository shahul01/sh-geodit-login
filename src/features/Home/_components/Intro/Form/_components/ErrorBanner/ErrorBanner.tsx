import { FC, useEffect, useState } from 'react';
import styles from './errorBanner.module.css';

interface IErrorBannerProps {
  message: string;
};

const ErrorBanner: FC<IErrorBannerProps> = ({message}) => {

  return (
    <div className={styles['error-banner']}>
      <div className={styles['error-text']}>
        {message}
      </div>
    </div>
  )
};

export default ErrorBanner;
