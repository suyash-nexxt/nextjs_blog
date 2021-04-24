import React from 'react';
import styles from '../styles/Landing.module.css';
import { FaGithub } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';

export default function Project({ text, background, github, live }) {
  return (
    <article
      className={`h-60 mb-4 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 ${background} bg-cover relative ${styles.container}`}
    >
      <div
        className={`${styles.overlay} bg-gray-900 dark:bg-gray-800 opacity-80 lg:opacity-90`}
      >
        <p
          className={`text-base text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
        >
          {text}
        </p>
        <div className={`flex absolute right-5 bottom-5`}>
          <a
            href={github}
            target="blank"
            rel="noopener"
            className={`text-xl lg:text-3xl text-gray-100 mr-4`}
          >
            <FaGithub />
          </a>
          <a
            href={live}
            target="blank"
            rel="noopener"
            className={`text-xl lg:text-3xl text-gray-100`}
          >
            <MdLaptopMac />
          </a>
        </div>
      </div>
    </article>
  );
}
