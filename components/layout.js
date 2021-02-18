import React, { Fragment, useState, useEffect } from 'react';
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
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
