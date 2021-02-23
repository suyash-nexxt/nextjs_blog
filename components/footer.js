import React from 'react';
import Logo from '../components/logo';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className={`bg-gray-100 h-40 py-10 dark:bg-gray-800 dark:text-white`}>
      <div className={`mx-5 md:mx-20 lg:mx-32 flex justify-between`}>
        <Logo />
        <a
          href={'https://github.com/su988'}
          target='_blank'
          className='text-4xl'
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}
