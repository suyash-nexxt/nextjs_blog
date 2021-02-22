import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Marck+Script&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <ThemeProvider defaultTheme='dark' enableSystem={true} attribute='class'>
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
