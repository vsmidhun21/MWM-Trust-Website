import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="site-bg">
        <Navbar />
        <main className="container-fluid px-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
