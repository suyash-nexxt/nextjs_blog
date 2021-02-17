import React from 'react';
import Link from 'next/link';
import ToggleTheme from './toggleTheme';
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/Navbar.module.css';
import Hamburger from 'hamburger-react';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center dark:bg-gray-900 pl-4 pr-4 pt-4 pb-10 md:pl-10 md:pr-10'>
      <Link href={'/'} as={'/'}>
        <div className='dark:text-white text-3xl cursor-pointer'>Suyash S</div>
      </Link>

      <ul className='md:flex dark:text-white text-xl items-center hidden'>
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
        <li className={`mr-3`}>|</li>
        <li className='mr-4 hover:opacity-20 transition-all cursor-pointer'>
          <a href={'https://github.com/su988'} target='_blank'>
            <FaGithub />
          </a>
        </li>
        <li className='cursor-pointer'>
          <ToggleTheme />
        </li>
      </ul>
      <div className='md:hidden dark:text-white'>
        <Hamburger easing='ease-in' />
      </div>
    </div>
  );
}
