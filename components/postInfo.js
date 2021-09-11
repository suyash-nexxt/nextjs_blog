import React from 'react';
import Link from 'next/link';

function PostInfo({ title, description, date, tags, slug }) {
  return (
    <article
      key={slug}
      className="mb-6 p-5 relative shadow-lg border-gray-800 dark:border-pink-700 bg-gray-50 dark:bg-gray-800 border-r-8 transform md:hover:scale-105 transition-all hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      <header className="flex items-center justify-between">
        <h3 className="text-2xl font-bold dark:text-white cursor-pointer tracking-wide">
          <Link href={'/blog/[slug]'} as={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>

        <span className="text-xs text-gray-600 dark:text-gray-400">{date}</span>
      </header>

      <section className="">
        <p className="text-lg mb-12 mt-4 dark:text-gray-400 tracking-wide cursor-pointer">
          <Link href={'/blog/[slug]'} as={`/blog/${slug}`}>
            {description}
          </Link>
        </p>
      </section>

      <footer className="absolute bottom-3">
        {tags &&
          tags.map((tag, id) => (
            <span
              key={id}
              className="mr-2 bg-gray-800 dark:bg-pink-700 text-white p-1.5 text-xs font-bold tracking-widest"
            >
              {tag}
            </span>
          ))}
      </footer>
    </article>
  );
}

export default PostInfo;
