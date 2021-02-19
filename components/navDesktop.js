import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import ToggleTheme from './toggleTheme';
import styles from '../styles/NavDesktop.module.css';
import { useRouter } from 'next/router';

export default function NavDesktop() {
  const router = useRouter();

  return (
    <>
      <span>
        <li
          className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${
            styles.my_li
          } ${router.pathname === '/blog' ? styles.active : ''}`}
        >
          <Link href={'/blog'} as={'/blog'}>
            Blog
          </Link>
        </li>
      </span>

      <span>
        <li
          className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${
            styles.my_li
          } ${router.pathname === '/project' ? styles.active : ''}`}
        >
          <Link href={'/project'} as={'/project'}>
            Projects
          </Link>
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
          className={`mr-3 hover:opacity-20 transition-all cursor-pointer ${
            styles.my_li
          } ${router.pathname === '/about' ? styles.active : ''}`}
        >
          <Link href={'/about'} as={'/about'}>
            About me
          </Link>
        </li>
      </span>
      <li className='mr-3 hidden md:block'>|</li>
      <li className='mr-4 hover:opacity-20 transition-all cursor-pointer'>
        <a href={'https://github.com/su988'} target='_blank'>
          <FaGithub />
        </a>
      </li>
      <li>
        <ToggleTheme />
      </li>
    </>
  );
}
