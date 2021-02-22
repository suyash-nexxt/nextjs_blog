import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Landing from '../components/landing';

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
        <Landing />
        {/* <section id='project'>Projects</section> */}
      </div>
    </>
  );
}
