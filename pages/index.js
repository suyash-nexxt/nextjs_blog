import React, { useRef } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import PostInfo from '../components/postInfo';
import ProjectGallery from '../components/projectGallery';
import SkillsGallery from '../components/skillsGallery';
import ContactForm from '../components/contactForm';
import Footer from '../components/footer';
import FadeInSection from '../components/fadeInSection';
import { getBlogPosts } from '../utils/getBlogPosts';

export default function Home({ recentPosts }) {
  const formEl = useRef(null);

  const executeScroll = () =>
    formEl.current.scrollIntoView({ block: 'end', behavior: 'smooth' });

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
          key={slug}
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
      <main className={`dark:bg-gray-900`}>
        <Hero executeScroll={executeScroll} reference={formEl} />
        <DownArrow />
        <section
          className={`mt-24 lg:mt-44 mx-5 md:mx-20 lg:mx-32 ${styles.recent_posts}`}
        >
          <h2
            className={`dark:text-gray-100 text-5xl lg:text-7xl font-black mb-10`}
          >
            Recent Posts
          </h2>
          <FadeInSection>{postUI}</FadeInSection>
        </section>
        <ProjectGallery />
        <SkillsGallery />
        <ContactForm reference={formEl} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const recentPosts = getBlogPosts().slice(0, 3);

  return {
    props: {
      recentPosts,
    },
  };
}
