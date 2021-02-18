import React from 'react';

export default function Modal({ children }) {
  return (
    <div className='w-full h-screen bg-white dark:bg-gray-900 dark:text-white fixed top-0 z-40 md:hidden flex justify-center items-center'>
      {children}
    </div>
  );
}
