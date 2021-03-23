import React from 'react';
import FadeInSection from './fadeInSection';
import Project from './project';

// move to project
import { FaGithub } from 'react-icons/fa';
import { MdLaptopMac } from 'react-icons/md';
import styles from '../styles/Landing.module.css';

export default function ProjectGallery() {
  return (
    <section className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32`}>
      <h4
        className={`dark:text-gray-100 text-5xl lg:text-8xl font-black mb-10`}
      >
        Projects
      </h4>
      <FadeInSection>
        <main className='lg:flex flex-wrap'>
          {/* <Project text=''/> */}
          <article
            className={`h-60 mb-4 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 bg-project-landing bg-cover relative ${styles.container}`}
          >
            <div
              className={`${styles.overlay} bg-gray-900 dark:bg-gray-800 opacity-80 lg:opacity-90`}
            >
              <p
                className={`text-base text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
              >
                Landing page built with NextJS and Tailwind.
              </p>
              <div className={`flex absolute right-5 bottom-5`}>
                <a
                  href='https://github.com/su988/landing_page'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100 mr-4`}
                >
                  <FaGithub />
                </a>
                <a
                  href='https://landing-page-su988.vercel.app/'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100`}
                >
                  <MdLaptopMac />
                </a>
              </div>
            </div>
          </article>

          <article
            className={`h-60 mb-4 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 bg-project-chat bg-cover relative ${styles.container}`}
          >
            <div
              className={`${styles.overlay} bg-gray-900 dark:bg-gray-800 opacity-60 lg:opacity-80`}
            >
              <p
                className={`text-base text-gray-100 tracking-widest leading-normal lg:leading-loose m-2 lg:m-6`}
              >
                Real time chat app where users can either create their own
                channel or join an existing one. Built with ReactJS for frontend
                and Firebase for user authentication and real time database.
              </p>
              <div className={`flex absolute right-5 bottom-5`}>
                <a
                  href='https://github.com/su988/react_firebase_chat_app'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </article>

          <article
            className={`h-60 mb-4 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 bg-project-github bg-cover relative ${styles.container}`}
          >
            <div
              className={`${styles.overlay} bg-gray-900 dark:bg-gray-800 opacity-80 lg:opacity-90`}
            >
              <p
                className={`text-base text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
              >
                Job search website which pulls data from Github Jobs api. Built
                with React using Hooks and context for state management.
              </p>
              <div className={`flex absolute right-5 bottom-5`}>
                <a
                  href='https://github.com/su988/github_jobs'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100`}
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </article>

          <article
            className={`h-60 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 bg-project-address bg-contain md:bg-cover lg:bg-contain relative ${styles.container}`}
          >
            <div
              className={`${styles.overlay} bg-gray-900 dark:bg-gray-800 opacity-80 lg:opacity-90`}
            >
              <p
                className={`text-base text-gray-100 tracking-widest leading-normal lg:leading-loose m-6`}
              >
                A minimalist address book built with vanilla Javascript.
                Persists data into local storage.
              </p>
              <div className={`flex absolute right-5 bottom-5`}>
                <a
                  href='https://github.com/su988/address_book_js'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100 mr-4`}
                >
                  <FaGithub />
                </a>
                <a
                  href='https://modest-curran-ab2d49.netlify.app/'
                  target='blank'
                  rel='noopener'
                  className={`text-xl lg:text-3xl text-gray-100`}
                >
                  <MdLaptopMac />
                </a>
              </div>
            </div>
          </article>
        </main>
      </FadeInSection>
    </section>
  );
}
