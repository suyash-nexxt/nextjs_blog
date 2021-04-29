import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import Head from 'next/head';
import { BlogLayout } from '../../components/blogLayout';
import { Header } from '../../components/header';

export default function PostList({ posts }) {
  const [postData, setPostData] = useState(posts);

  const sortedPost = postData.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  );

  const postUI = sortedPost.map(
    ({ frontmatter: { title, description, date, tags }, slug }) => (
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

          <span className="text-xs text-gray-400">{date}</span>
        </header>

        <section className="">
          <p className="text-lg mb-12 mt-4 dark:text-white tracking-wide cursor-pointer">
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
    ),
  );

  return (
    <>
      <Head>
        <meta
          name="Description"
          content="Personal blog on Web development"
        ></meta>
      </Head>
      <BlogLayout>
        <Header name={'Blog'} />
        <main>{postUI}</main>
      </BlogLayout>
    </>
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
      date: formattedDate,
    };

    return {
      slug: filename.replace('.md', ''),
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}
