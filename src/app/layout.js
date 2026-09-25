import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Mission Word Movement Ministries India and Beyond | Serving Tamil Nadu\'s Forgotten Communities',
  description:
    'Mission Word Movement Ministries India and Beyond is a registered public trust (est. 2016) supporting tribal and nomadic communities across Tamil Nadu with education, healthcare, and livelihood programs. Donate to support our work.',
  icons: {
    icon: '/trust-logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-bg">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
