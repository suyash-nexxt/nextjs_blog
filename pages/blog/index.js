import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { BlogLayout } from '../../components/blogLayout';
import { Header } from '../../components/header';

export default function PostList({ posts }) {
  const [postData, setPostData] = useState(posts);

  const postUI = postData.map(
    ({ frontmatter: { title, description, date, tags }, slug }) => (
      <article
        key={slug}
        className='mb-6 p-5 relative shadow-lg border-gray-300 dark:border-pink-500 bg-gray-50 dark:bg-gray-800 border-r-8 transform md:hover:scale-105 transition-all hover:opacity-80'
      >
        <header className='flex items-center justify-between'>
          <h3 className='text-2xl font-bold dark:text-white cursor-pointer tracking-wide'>
            <Link href={'/post/[slug]'} as={`/post/${slug}`}>
              {title}
            </Link>
          </h3>

          <span className='text-xs text-gray-400'>{date}</span>
        </header>

        <section className=''>
          <p className='text-lg mb-12 mt-4 dark:text-white tracking-wide cursor-pointer'>
            <Link href={'/post/[slug]'} as={`/post/${slug}`}>
              {description}
            </Link>
          </p>
        </section>
        <footer className='absolute bottom-3'>
          {tags &&
            tags.map((tag, id) => (
              <span
                key={id}
                className='mr-2 bg-gray-300 dark:bg-pink-500 dark:text-white p-1.5 text-xs font-bold'
              >
                {tag}
              </span>
            ))}
        </footer>
      </article>
    )
  );

  return (
    <BlogLayout>
      <Header name={'Blog'} />
      <p className='mb-12 text-xl dark:text-white tracking-wide'>
        Idea behind this blog is to share quick short snippets for different use
        cases and learn new things about web development daily.
      </p>
      {postUI}
    </BlogLayout>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map((filename) => {
    const markdownWithMetadata = fs
      .readFileSync(`content/posts/${filename}`)
      .toString();

    const { data } = matter(markdownWithMetadata);

    // Convert post date to format: Month day, Year
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = data.date.toLocaleDateString('en-US', options);

    const frontmatter = {
      ...data,
      date: formattedDate
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter
    };
  });

  return {
    props: {
      posts
    }
  };
}
