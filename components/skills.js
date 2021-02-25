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
import FadeInSection from '../components/fadeInSection';

export default function Skills() {
  return (
    <section className={`mt-28 mx-5 md:mx-20 lg:mx-32 pb-20`}>
      <h4
        className={`dark:text-gray-100 text-5xl lg:text-8xl font-black mb-10`}
      >
        Skills
      </h4>
      <FadeInSection>
        <main className='flex flex-wrap justify-center p-4 lg:mt-20'>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <FaHtml5 />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <FaCss3 />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <SiTailwindcss />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl text-3xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <SiJavascript />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <FaReact />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <SiRedux />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <SiFirebase />
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-4xl md:text-6xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <FaNode />
          </article>
          <article
            className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <SiPostgresql />
          </article>
        </main>
      </FadeInSection>
    </section>
  );
}
