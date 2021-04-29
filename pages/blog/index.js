import React, { useState, useEffect } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Head from 'next/head';
import { BlogLayout } from '../../components/blogLayout';
import { Header } from '../../components/header';
import PostInfo from '../../components/postInfo';

export default function PostList({ sortedPost }) {
  const [posts] = useState(sortedPost);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = posts.filter((post) =>
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredPosts(results);
  }, [searchTerm]);

  const postUI =
    filteredPosts &&
    filteredPosts.map(
      ({ frontmatter: { title, description, date, tags }, slug }) => (
        <PostInfo
          title={title}
          description={description}
          date={date}
          tags={tags}
          slug={slug}
        />
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
        <input
          className={`focus:outline-none focus:ring focus:border-blue-300 w-full my-8 p-2 border-2 border-gray-800 dark:border-0 tracking-widest`}
          type="text"
          placeholder={'Search'}
          value={searchTerm}
          onChange={handleChange}
        />
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

  const sortedPost = posts.sort(
    (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date),
  );

  return {
    props: {
      sortedPost,
    },
  };
}
