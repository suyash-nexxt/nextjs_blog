import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = () => {
  const { pathname } = useRouter();

  const isRoot = pathname === '/post';

  return (
    <header
      className={clsx('flex items-center justify-between ', {
        'mb-8': isRoot,
        'mb-2': !isRoot
      })}
    >
      <div className={'max-w-md'}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
    </header>
  );
};

const LargeTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-3xl font-black leading-none text-black no-underline font-display',
          'sm:text-8xl',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);

const SmallTitle = () => (
  <h1>
    <Link href='/post'>
      <a
        className={clsx(
          'text-2xl font-black text-black no-underline font-display',
          'dark:text-white'
        )}
      >
        Blog
      </a>
    </Link>
  </h1>
);
