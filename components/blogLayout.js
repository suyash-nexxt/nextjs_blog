export function BlogLayout({ children }) {
  return (
    <>
      <section className='w-full min-h-screen dark:bg-gray-900'>
        <div className='max-w-screen-sm px-4 py-12 mx-auto antialiased'>
          <main>{children}</main>
        </div>
      </section>
    </>
  );
}
