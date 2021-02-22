import styles from '../styles/Landing.module.css';
import styles2 from '../styles/Logo.module.css';

export default function Landing() {
  return (
    <div
      className={`px-5 pt-20 md:mt-20 md:ml-20 md:w-4/5 lg:w-3/6 lg:ml-32 lg:mt-16`}
    >
      <h1 className={`text-4xl pb-8 ${styles.name}`}>
        Hi, I'm
        <span
          className={`${styles2.logo} ${styles.dot_parent} pl-3 text-6xl md:text-8xl text-gray-800`}
        >
          Suyash<span className={styles.dot}></span>
        </span>
      </h1>

      <div className={styles.box}>
        <div className={styles.role}>
          <div className={styles.block}></div>
          <p className={styles.role_name}>Front End Developer</p>
        </div>
      </div>

      <div
        className={`pt-5 pb-10 leading-loose tracking-wide text-lg text-gray-500 ${styles.summary}`}
      >
        I’m a multidisciplinary designer and developer specializing in front end
        web development. I have experience working with multiple programming
        languages and frameworks used in building static and dynamic websites
        for the web.
      </div>
      <button
        className={`bg-gray-800 text-gray-200 p-4 rounded-2xl pointer-cursor shadow ${styles.summary}`}
      >
        Get in Touch
      </button>
    </div>
  );
}
