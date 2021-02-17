import React from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <div className='flex justify-between items-center dark:bg-gray-900 pl-4 md:pl-10 pr-10 pt-4 pb-10'>
      <Link href={'/'} as={'/'}>
        <div className='dark:text-white text-3xl cursor-pointer'>Suyash S</div>
      </Link>

      <ul className='md:flex dark:text-white text-xl cursor-pointer items-center hidden'>
        <Link href={'/post'} as={'/post'}>
          <li className='mr-3'>Blog</li>
        </Link>

        <li className='mr-3'>Projects</li>
        <li className='mr-3'>Contact</li>
        <li className='mr-3'>About me</li>
        <li className='mr-3'>|</li>
        <li>
          <FaGithub />
        </li>
      </ul>
    </div>
  );
}
