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
import { SiNextDotJs } from 'react-icons/si';
import { SiGatsby } from 'react-icons/si';
import { SiSketch } from 'react-icons/si';

import ReactTooltip from 'react-tooltip';
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
            <a data-tip data-for='html'>
              <FaHtml5 />
            </a>
            <ReactTooltip id='html' type='dark'>
              <span className={`hidden lg:block`}>HTML5</span>
            </ReactTooltip>
          </article>

          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='css'>
              <FaCss3 />
            </a>
            <ReactTooltip id='css'>
              <span className={`hidden lg:block`}>CSS3</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='tailwind'>
              <SiTailwindcss />
            </a>
            <ReactTooltip id='tailwind'>
              <span className={`hidden lg:block`}>Tailwind</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='javascript'>
              <SiJavascript />
            </a>
            <ReactTooltip id='javascript'>
              <span className={`hidden lg:block`}>JavaScript</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='react'>
              <FaReact />
            </a>
            <ReactTooltip id='react'>
              <span className={`hidden lg:block`}>React</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='redux'>
              <SiRedux />
            </a>
            <ReactTooltip id='redux'>
              <span className={`hidden lg:block`}>Redux</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-2xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='firebase'>
              <SiFirebase />
            </a>
            <ReactTooltip id='firebase'>
              <span className={`hidden lg:block`}>Firebase</span>
            </ReactTooltip>
          </article>

          <article
            className={`flex justify-center min-w-1/3 mb-10 lg:mb-20 text-4xl md:text-6xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='node'>
              <FaNode />
            </a>
            <ReactTooltip id='node'>
              <span className={`hidden lg:block`}>NodeJS</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='postgres'>
              <SiPostgresql />
            </a>
            <ReactTooltip id='postgres'>
              <span className={`hidden lg:block`}>PostgreSQL</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='nextjs'>
              <SiNextDotJs />
            </a>
            <ReactTooltip id='nextjs'>
              <span className={`hidden lg:block`}>NextJS</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='gatsby'>
              <SiGatsby />
            </a>
            <ReactTooltip id='gatsby'>
              <span className={`hidden lg:block`}>Gatsby</span>
            </ReactTooltip>
          </article>
          <article
            className={`flex justify-center min-w-1/3 lg:mb-20 text-3xl md:text-5xl dark:text-gray-400 text-gray-800 transform hover:scale-150 transition-all`}
          >
            <a data-tip data-for='sketch'>
              <SiSketch />
            </a>
            <ReactTooltip id='sketch'>
              <span className={`hidden lg:block`}>Sketch</span>
            </ReactTooltip>
          </article>
        </main>
      </FadeInSection>
    </section>
  );
}
