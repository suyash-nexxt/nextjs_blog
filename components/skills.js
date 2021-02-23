import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { FaNode } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import styles from '../styles/Landing.module.css';

export default function Skills() {
  return (
    <div className={`mt-24 mx-5 md:mx-20 lg:mx-32 pb-20 ${styles.skills}`}>
      <h4 className={`text-5xl lg:text-8xl font-black mb-10`}>Skills</h4>
      <div className='flex flex-wrap justify-center p-4 lg:mt-20'>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-gray-400`}
        >
          <FaHtml5 />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-gray-400 `}
        >
          <FaCss3 />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-gray-400`}
        >
          <SiTailwindcss />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-3xl text-gray-400`}
        >
          <SiJavascript />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-gray-400`}
        >
          <FaReact />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl text-gray-400`}
        >
          <SiRedux />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl text-gray-400`}
        >
          <SiFirebase />
        </div>
        <div
          className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-gray-400`}
        >
          <FaNode />
        </div>
        <div
          className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl text-gray-400`}
        >
          <SiPostgresql />
        </div>
      </div>
    </div>
  );
}
