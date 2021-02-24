import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Header = ({ name }) => {
  const { pathname } = useRouter();

  const isRoot = pathname === '/blog';

  return (
    <header
      className={clsx('flex items-center justify-between mt-10', {
        'mb-8': isRoot,
        'mb-2': !isRoot
      })}
    >
      <div className={'max-w-md'}>
        {isRoot ? <LargeTitle name={name} /> : <SmallTitle name={name} />}
      </div>
    </header>
  );
};

const LargeTitle = ({ name }) => (
  <h1>
    <a
      className={clsx(
        'text-3xl font-black leading-none text-black no-underline font-display',
        'sm:text-8xl',
        'dark:text-pink-700'
      )}
    >
      {name}
    </a>
  </h1>
);

const SmallTitle = ({ name }) => (
  <h1>
    <Link href='/blog'>
      <a
        className={clsx(
          'text-2xl font-black text-black no-underline font-display hover:opacity-60',
          'dark:text-white'
        )}
      >
        {name}
      </a>
    </Link>
  </h1>
);
