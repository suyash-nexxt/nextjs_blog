import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
        <h1>Hi, my name is Su, how do you do ?</h1>
        <h3>Front end developer</h3>
        <h6>Portfolio Porjects</h6>
        <h6>Blog posts</h6>
        <h6>Github</h6>
      </div>
      <section id='project'>Projects</section>
    </>
  );
}
