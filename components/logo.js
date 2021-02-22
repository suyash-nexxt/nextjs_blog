import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Logo.module.css';

export default function Logo() {
  const { pathname } = useRouter();

  return (
    <div>
      {pathname !== '/' ? (
        <Link href={'/'} as={'/'}>
          <div
            className={`dark:text-white text-3xl cursor-pointer ${styles.header}`}
          >
            Suyash S
          </div>
        </Link>
      ) : (
        <div className='dark:text-white text-3xl invisible'>Suyash S</div>
      )}
    </div>
  );
}
