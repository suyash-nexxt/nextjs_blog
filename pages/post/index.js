import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { Layout } from '../../components/layout';

export default function PostList({ posts }) {
  return (
    <Layout>
      <div>
        <p className='mb-12 text-xl dark:text-white tracking-wide'>
          Sip with snippets is a place where I share my knowledge of all things
          web development.
        </p>
        {posts.map(
          ({ frontmatter: { title, description, date, tags }, slug }) => (
            <article
              key={slug}
              className='mb-6 p-5 relative shadow-lg border-gray-300 dark:border-pink-500 bg-gray-50 dark:bg-gray-800 border-r-8 rounded-md'
            >
              <header className=''>
                <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                  <h3 className='text-indigo-900 text-2xl font-bold dark:text-white cursor-pointer tracking-wide'>
                    {title}
                  </h3>
                </Link>
                <span className='text-xs text-gray-400'>{date}</span>
              </header>
              <section className=''>
                <p className='text-lg mb-12 mt-4 dark:text-white tracking-wide'>
                  {description}
                </p>
              </section>
              <footer className='absolute bottom-3'>
                {tags &&
                  tags.map((tag, id) => (
                    <span
                      key={id}
                      className='mr-2 bg-gray-300 dark:bg-pink-500 text-gray-500 dark:text-white p-1.5 text-xs font-bold'
                    >
                      {tag}
                    </span>
                  ))}
              </footer>
            </article>
          )
        )}
      </div>
    </Layout>
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
