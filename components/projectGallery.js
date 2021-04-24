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
            text="Find the best time to post on a subreddit. We find the 500 top posts from the past year for a subreddit. This data is visualized in a heatmap grouped by weekday and hour of the day. Built using Reactjs, Styled components. "
            background="bg-project-reddit"
            github="https://github.com/su988/reddit-timer-su988"
            live="https://reddit-timer-su988.vercel.app/"
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

          <Project
            text="Landing page built with NextJS and Tailwind."
            background="bg-project-landing"
            github="https://github.com/su988/landing_page"
            live="https://landing-page-su988.vercel.app/"
          />
        </main>
      </FadeInSection>
    </section>
  );
}
