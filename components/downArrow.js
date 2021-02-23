import React from 'react';
import styles from '../styles/Landing.module.css';

export default function DownArrow() {
  return (
    <p className='flex justify-center lg:justify-end mt-20 animate-bounce lg:mr-32 lg:fixed -right-12 '>
      <i className={`${styles.arrow} border-gray-800 dark:border-gray-400`}></i>
    </p>
  );
}
