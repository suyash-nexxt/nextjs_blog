import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import PostInfo from '../components/postInfo';
import ProjectGallery from '../components/projectGallery';
import SkillsGallery from '../components/skillsGallery';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import { getBlogPosts } from '../utils/getBlogPosts';

import { useTheme } from 'next-themes';

export default function Home({ recentPosts }) {
  const { theme, setTheme } = useTheme();

  console.log(recentPosts);

  useEffect(() => {
    setTheme();
  }, []);

  const postUI =
    recentPosts &&
    recentPosts.map(
      ({ frontmatter: { title, description, date, tags }, slug }) => (
        <PostInfo
          title={title}
          description={description}
          date={date}
          tags={tags}
          slug={slug}
        />
      )
    );

  return (
    <>
      <Head>
        <meta
          name="Description"
          content="Front end developer in Toronto, Canada"
        ></meta>
        <meta
          name="google-site-verification"
          content="xJ_ak0Bu5rUoZnHFg7HVc4qcBP58qN9IGgE-jwDF3ZE"
        />
      </Head>
      <div
        className={
          theme === 'dark'
            ? `${styles.container_dark}`
            : `${styles.container_light}`
        }
      >
        <Hero />
        <DownArrow />
        <section className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32`}>
          <h2
            className={`dark:text-gray-100 text-5xl lg:text-7xl font-black mb-10`}
          >
            Recent Posts
          </h2>
          {postUI}
        </section>
        <ProjectGallery />
        <SkillsGallery />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const recentPosts = getBlogPosts().slice(0, 2);

  return {
    props: {
      recentPosts,
    },
  };
}
