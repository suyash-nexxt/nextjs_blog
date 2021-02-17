import React, { Fragment, useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';

export function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className='w-full min-h-screen dark:bg-gray-900'>
        <div className='max-w-screen-sm px-4 py-12 mx-auto antialiased font-body'>
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

const Header = () => {
  const { pathname } = useRouter();

  const isRoot = pathname === '/post';

  return (
    <header
      className={clsx('flex items-center justify-between ', {
        'mb-8': isRoot,
        'mb-2': !isRoot
      })}
    >
      <div className={'max-w-md'}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-3xl font-black leading-none text-black no-underline font-display',
          'sm:text-8xl',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-2xl font-black text-black no-underline font-display',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);
