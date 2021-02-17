import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' enableSystem={true} attribute='class'>
      <Navbar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
