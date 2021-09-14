import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { BlogLayout } from '../../components/blogLayout';
import { Header } from '../../components/header';
import PostInfo from '../../components/postInfo';
import { getBlogPosts } from '../../utils/getBlogPosts';

export default function PostList({ sortedPosts }) {
  const [posts] = useState(sortedPosts);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const results = posts.filter((post) =>
      post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase())
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
      )
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
          className={`focus:outline-none focus:ring focus:border-blue-300 w-full my-8 p-2 border-2 border-gray-800 dark:border-pink-700 tracking-widest`}
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
  const sortedPosts = getBlogPosts();

  return {
    props: {
      sortedPosts,
    },
  };
}
