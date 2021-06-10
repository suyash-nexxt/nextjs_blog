---
title: Create react app or NextJS
description: If you need SEO use NextJS otherwise use NextJS
tags: ['react', 'nextjs', 'seo']
date: 2021-03-13
---

Recently I was working on my portfolio webite (if you are reading this then you are on it) with two main goals, first - show it to prospective employers and second - get it on first page of google with select keywords. My initial plan was to use create react app only becacuse I was familiar with it but on doing more research I figured Nextjs was the way to go.

Main arguement behind using nextJs over cra was client side rendering is not good for SEO. While nextJs has this advantage over CRA there are also other features which make nextJS a clear winner for your next side project. We'll be discussing few of them in this article.

## Rendering options with Nextjs

As mentioned earlier, create-react-app comes with client side rendering. What this means is that the HTML on the page is dynamically injected into the DOM once the page loads. While this is very fast it is not good for SEO as by the time HTML is loaded, search engine robots have completed its crawl. On the other hand Nextjs has options for pre-rendering HTML pages.

1. Static Generation without data - Ideal for static pages like about us, faq sections.

2. Static Generation with data - Pages which have data that do not change often - blog. Nextjs provides us with an async function getStaticProps which fetches data every time the page is loaded.

3. Server Side Rendering - Out of the box SSR which is ideal for pages which have data that changes often - web app news feed for example. SSR also comes with its in built async function getServerSideProps that fetches data and pre renders which is then sent to client on every request.

## No more React Router

Nextjs eliminates the need for installing additional library react-router. It comes with dynamic routing, similar to Gatsby.

![Folder](/folder.png)

1. Pages folder handles routing by default.
2. index.js file in the pages folder is the home page '/'
3. Every folder inside pages is a new route whose index.js points to '/folder-name'. In this case './blog'
4. And since there are multiple blogs. Each blog can be accessed at '/blog/:slug', where slug will be replaced by unique identifier

If we were to compare it to a react router it would be something like this -

```jsx
<Router>
  <Switch>
    <Route exact path="/">
      <Component /> {'pages/index.js'}
    </Route>
    <Route path="/blog">
      <Component /> {'pages/blog/index.js'}
    </Route>
    <Route path="/blog/:slug">
      <Component /> {'pages/blog/[slug].js'}
    </Route>
  </Switch>
</Router>
```

Accessing route parameters is also straight forward

```jsx
// First we import the router
import { useRouter } from 'next/router';

// inside the component function we invoke it
const router = useRouter();

// access it with the name we assigend it
{
  router.query.slug;
}
```

## SEO

Page title and meta description are important for search engines to know the content on the page which helps with page rank. In Nextjs we have the option to supply static or dynamic titles and meta description.

```jsx
import Head from 'next/head';
<Head>
  <title>Search results for: {router.query.slug}</title>
  <meta name="description" content="More info about the website"></meta>
  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/styles.css" />
</Head>;
```

## Deploy with Vercel

Vercel the creator of Nextjs make it very easy to deploy Nextjs application. Few clicks and we have a professional deployment pipeline.

## When to use which CRA or Nextjs

I have only scratched the surface as Nextjs is a complete framework and has a lot more to offer. But with what I know, it seems Nextjs truly shines when it comes to SEO and should be used when we are building landing pages for marketing purposes. When making web apps which are usually secured behind authentication we can go with either or but since server side rendering is not much use here CRA would be the faster and better option.
