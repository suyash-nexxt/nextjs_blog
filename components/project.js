import React from 'react';
import FadeInSection from '../components/fadeInSection';
import { FaGithub } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';

import styles from '../styles/Landing.module.css';

export default function Project() {
  return (
    <div className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32`}>
      <h4
        className={`dark:text-gray-100 text-5xl lg:text-8xl font-black mb-10`}
      >
        Projects
      </h4>
      <FadeInSection>
        <div className='lg:flex flex-wrap'>
          <div
            className={`h-60 mb-4 lg:mb-0 lg:border-r-2 lg:min-w-1/2 lg:h-96 bg-project-chat bg-cover relative ${styles.container}`}
          >
            <a
              href='https://github.com/su988/react_firebase_chat_app'
              target='blank'
              className={`absolute bottom-5 right-5 text-3xl md:hidden text-gray-100`}
            >
              <FaGithub />
            </a>
            <div className={`${styles.overlay} bg-gray-900 dark:bg-gray-800`}>
              <p
                className={`text-gray-100 tracking-widest leading-normal lg:leading-loose m-2 lg:m-6`}
              >
                Real time chat app where users can either create their own
                channel or join an existing one. Built with ReactJS for frontend
                and Firebase for user authentication and real time database.
              </p>
              <a
                href='https://github.com/su988/react_firebase_chat_app'
                target='blank'
                className={`absolute bottom-5 right-10 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div
            className={`h-60 mb-4 lg:mb-0 lg:border-l-2 lg:min-w-1/2 lg:h-96 bg-gray-800 bg-project-github bg-cover relative ${styles.container}`}
          >
            <a
              href='https://github.com/su988/github_jobs'
              target='blank'
              className={`absolute bottom-5 right-5 text-3xl md:hidden`}
            >
              <FaGithub />
            </a>
            <div className={`${styles.overlay} bg-gray-900 dark:bg-gray-800`}>
              <p
                className={`text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
              >
                Job search website which pulls data from Github Jobs api. Built
                with React using Hooks and context for state management.
              </p>
              <a
                href='https://github.com/su988/github_jobs'
                target='blank'
                className={`absolute bottom-5 right-10 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <FaGithub />
              </a>
            </div>
          </div>

          <div
            className={`h-60 mb-4 lg:mb-0 lg:border-t-2 lg:border-r-2 lg:min-w-1/2 lg:h-96 bg-gray-800 bg-gray-800 bg-project-fpl bg-contain md:bg-cover lg:bg-cover relative ${styles.container}`}
          >
            <a
              href='https://github.com/su988/fpli_api'
              target='blank'
              className={`absolute bottom-5 right-5 text-3xl md:hidden text-white`}
            >
              <FaGithub />
            </a>
            <div className={`${styles.overlay} bg-gray-900 dark:bg-gray-800`}>
              <p
                className={`text-gray-100 tracking-widest leading-normal lg:leading-loose m-2 lg:m-6`}
              >
                Dashboard tracking Fantasy Premiere League data. Python request
                to get data from FPL API. Pandas library to clean data and
                Sqlalchemy to export dataframe into Postgres database. Express
                server with React front end
              </p>
              <a
                href='https://github.com/su988/fpli_api'
                target='blank'
                className={`absolute bottom-5 right-10 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <FaGithub />
              </a>
              <a
                href='https://fpl-dash.herokuapp.com/'
                target='blank'
                className={`absolute bottom-4 right-24 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <MdLaptopMac />
              </a>
            </div>
          </div>

          <div
            className={`h-60 lg:mb-0 lg:border-t-2 lg:border-l-2 lg:min-w-1/2 lg:h-96 bg-gray-800 bg-project-address bg-contain md:bg-cover lg:bg-contain relative ${styles.container}`}
          >
            <a
              href='https://github.com/su988/address_book_js'
              target='blank'
              className={`absolute bottom-5 right-5 text-3xl md:hidden text-gray-100`}
            >
              <FaGithub />
            </a>
            <div className={`${styles.overlay} bg-gray-900 dark:bg-gray-800`}>
              <p
                className={`text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
              >
                A minimalist address book built with vanilla Javascript.
                Persists data into local storage.
              </p>
              <a
                href='https://github.com/su988/address_book_js'
                target='blank'
                className={`absolute bottom-5 right-10 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <FaGithub />
              </a>
              <a
                href='https://modest-curran-ab2d49.netlify.app/'
                target='blank'
                className={`absolute bottom-4 right-24 sm:text-xl lg:text-3xl text-gray-100`}
              >
                <MdLaptopMac />
              </a>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
