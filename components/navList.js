import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ToggleTheme from './toggleTheme';
import styles from '../styles/NavList.module.css';

export default function NavList({ loc, toggleModal, hamburgerOpen }) {
  return (
    <>
      {loc === 'mobile' ? (
        <>
          <Link href={'/'} as={'/'}>
            <li
              className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'
              onClick={() => {
                toggleModal();
                hamburgerOpen(false);
              }}
            >
              Home
            </li>
          </Link>
          <Link href={'/post'} as={'/post'}>
            <li
              className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'
              onClick={() => {
                toggleModal();
                hamburgerOpen(false);
              }}
            >
              Blog
            </li>
          </Link>
          <Link href={'/project'} as={'/project'}>
            <li
              className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'
              onClick={() => {
                toggleModal();
                hamburgerOpen(false);
              }}
            >
              Projects
            </li>
          </Link>
          <li className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'>
            <a href='mailto:suyashvks@gmail.com'>Contact</a>
          </li>
          <li className='mb-8 text-4xl hover:opacity-20 transition-all cursor-pointer'>
            About Me
          </li>
          <li className='flex items-center text-2xl'>
            <a
              href={'https://github.com/su988'}
              target='_blank'
              className='mr-5 hover:opacity-20 transition-all cursor-pointer'
              onClick={() => {
                toggleModal();
                hamburgerOpen(false);
              }}
            >
              <FaGithub />
            </a>
            <span>
              <ToggleTheme />
            </span>
          </li>
        </>
      ) : (
        <>
          <Link href={'/post'} as={'/post'}>
            <span>
              <li
                className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${styles.my_li}`}
              >
                Blog
              </li>
            </span>
          </Link>
          <span>
            <li
              className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${styles.my_li}`}
            >
              Projects
            </li>
          </span>
          <span>
            <li
              className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${styles.my_li}`}
            >
              <a href='mailto:suyashvks@gmail.com'>Contact</a>
            </li>
          </span>
          <span>
            <li
              className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${styles.my_li}`}
            >
              About me
            </li>
          </span>
          <li className='mr-3 hidden md:block'>|</li>
          <li className='mr-4 hover:opacity-20 transition-all cursor-pointer'>
            <a href={'https://github.com/su988'} target='_blank'>
              <FaGithub />
            </a>
          </li>
          <li className='cursor-pointer'>
            <ToggleTheme />
          </li>
        </>
      )}
    </>
  );
}
