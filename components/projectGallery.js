import React from 'react';
import FadeInSection from './fadeInSection';
import Project from './project';

export default function ProjectGallery() {
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
            text="Visualized top 500 posts from the past year for a subreddit in a heatmap grouped by weekday and hour of the day. Worked with tasks, user stories designs and used the GitHub flow with Pull Requests and code reviews. Built with ReactJS & Styled components."
            background="bg-project-reddit"
            github="https://github.com/su988/reddit-timer-su988"
            live="https://reddit-timer-su988.vercel.app/"
          />

          <Project
            text="Note taking app with features to search, filter and categorize. Built with React - custom hooks and context for state management. Styled using Material UI components and MUI icons."
            background="bg-project-notes"
            github="https://github.com/su988/notes_react"
            live="https://github.com/su988/notes_react"
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
        </main>
      </FadeInSection>
    </section>
  );
}
