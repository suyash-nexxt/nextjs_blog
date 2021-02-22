import Link from 'next/link';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  return (
    <div>
      <Link href={'/'} as={'/'}>
        <div
          className={`dark:text-white text-3xl cursor-pointer hover:opacity-70 ${styles.logo}`}
        >
          Suyash S
        </div>
      </Link>
    </div>
  );
}
