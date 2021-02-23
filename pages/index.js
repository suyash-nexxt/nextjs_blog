import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Hero from '../components/hero';
import DownArrow from '../components/downArrow';
import Project from '../components/project';
import Skills from '../components/skills';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <div className={styles.container}>
        <Hero />
        <DownArrow />
        <Project />
        <Skills />
      </div>
      <Footer />
    </>
  );
}
