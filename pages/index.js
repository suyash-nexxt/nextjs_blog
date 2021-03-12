import React, { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import ProjectGallery from '../components/projectGallery';
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
      <Head>
        <title>Suyash - Front End Developer</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          name='Description'
          content='Front end developer in Toronto, Canada'
        ></meta>
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
        <ProjectGallery />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
