import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown/with-html';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import { BlogLayout } from '../../components/blogLayout';
import { Header } from '../../components/header';

export default function Post({ content, frontmatter }) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='Description' content={frontmatter.description}></meta>
      </Head>
      <BlogLayout>
        <Header name={'Blog'} />
        <h1 className='dark:text-white text-5xl font-bold mt-12'>
          {frontmatter.title}
        </h1>

        <article>
          <ReactMarkdown
            className='text-black dark:text-white prose lg:prose-lg dark:prose-dark tracking-wide'
            escapeHtml={false}
            source={content}
            renderers={{ code: CodeBlock }}
          />
        </article>
      </BlogLayout>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('content/posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', '')
    }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMetadata = fs
    .readFileSync(path.join('content/posts', slug + '.md'))
    .toString();

  const { data, content } = matter(markdownWithMetadata);

  // Convert post date to format: Month day, Year
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = data.date.toLocaleDateString('en-US', options);

  const frontmatter = {
    ...data,
    date: formattedDate
  };

  return {
    props: {
      content: `# ${content}`,
      frontmatter
    }
  };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};
