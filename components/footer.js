import React from 'react';
import Logo from '../components/logo';
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer
      className={`bg-gray-100 h-52 lg:mt-44 py-10 dark:bg-gray-800 dark:text-white`}
    >
      <div
        className={`mx-5 md:mx-20 lg:mx-32 flex flex-col content-center items-center`}
      >
        <Logo />
        <div className='flex mt-4 mb-6'>
          <a href='mailto:suyashvks@gmail.com' className='text-lg mr-5'>
            <MdEmail />
          </a>
          <a
            href={'https://github.com/su988'}
            target='_blank'
            rel='noopener'
            className='text-lg '
          >
            <FaGithub />
          </a>
        </div>
        <p className='text-xs tracking-widest text-gray-400 mt-10'>
          Built with NextJs & Tailwind
        </p>
      </div>
    </footer>
  );
}
