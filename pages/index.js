import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import Project from '../components/project';
import Skills from '../components/skills';
import Footer from '../components/footer';

import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme();
  }, []);

  return (
    <>
      <Head></Head>
      <div
        className={
          theme === 'dark'
            ? `${styles.container_dark}`
            : `${styles.container_light}`
        }
      >
        <Hero />
        <DownArrow />
        <Project />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
