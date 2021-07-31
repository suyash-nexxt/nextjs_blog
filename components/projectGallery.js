import React from 'react';
import FadeInSection from './fadeInSection';
import Project from './project';
import styles from '../styles/Landing.module.css';
import ProjectMore from './projectMore';

export default function ProjectGallery({ background, text, github, live }) {
  return (
    <section className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32`}>
      <h2
        className={`dark:text-gray-100 text-5xl lg:text-8xl font-black mb-10`}
      >
        Projects
      </h2>
      <FadeInSection>
        <main className="lg:flex flex-wrap">
          <Project
            text="E-commerce store which gets data from Fake Store API. Built with React for front-end, Redux for state management and Chakra UI for design components."
            background="bg-project-ecommerce"
            github="https://github.com/su988/shopping_cart_redux"
            live="https://shopping-cart-redux.vercel.app/"
          />
          <Project
            text="Visualized top 500 posts for a subreddit in a heatmap. Worked with tasks, user stories designs and used the GitHub flow with Pull Requests and code reviews. Built with ReactJS & Styled components."
            background="bg-project-reddit"
            github="https://github.com/su988/reddit-timer-su988"
            live="https://reddit-timer-su988.vercel.app/"
          />

          <Project
            text="Note taking app with features to search, filter and categorize. Built with React - custom hooks and context for state management. Styled using Material UI components and MUI icons."
            background="bg-project-notes"
            github="https://github.com/su988/notes_react"
            live="https://notes-react-alpha.vercel.app/"
          />

          <Project
            text="Real time chat app where users can either create their own
                channel or join an existing one. Built with ReactJS for frontend and Firebase for user authentication and real time database."
            background="bg-project-chat"
            github="https://github.com/su988/react_firebase_chat_app"
            live="https://github.com/su988/react_firebase_chat_app"
          />

          <Project
            text="Job search website which pulls data from Github Jobs api. Built with React using Hooks and context for state management."
            background="bg-project-github"
            github="https://github.com/su988/github_jobs"
            live="https://github.com/su988/github_jobs"
          />
          <article
            className={`h-60 mb-4 lg:mb-0 lg:border-2 lg:min-w-1/2 lg:h-96 ${background} bg-cover relative ${styles.container} hidden md:block`}
          >
            <div
              className={` min-h-full bg-gray-100 dark:bg-gray-800 opacity-80 lg:opacity-90`}
            >
              <div
                className={`text-base dark:text-gray-100 tracking-widest leading-normal lg:leading-loose p-6`}
              >
                <p className="mb-6 text-2xl ">More Projects...</p>
                <ProjectMore
                  title="PERN stack TODO"
                  src="https://github.com/su988/pern_todo"
                />
                <ProjectMore
                  title="CryptoCurrency Finder Javascript"
                  src="https://github.com/su988/project11-coinbase"
                />
                <ProjectMore
                  title="Fantasy Premiere League Dashboard - PERN stack"
                  src="https://github.com/su988/fpl_api"
                />
                <ProjectMore
                  title="Address Book Javascript"
                  src="https://github.com/su988/fpl_api"
                />
              </div>
            </div>
          </article>
        </main>
      </FadeInSection>
    </section>
  );
}
