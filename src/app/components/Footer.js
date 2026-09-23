import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            <img src="/trust-logo.png" alt="MWM Trust logo" width="32" height="32" />
            Mission Word Movement Trust
          </div>
          <p>
            A registered public trust walking alongside tribal and nomadic
            communities across Tamil Nadu since 2016 — with education,
            healthcare, and dignity.
          </p>
        </div>

        <div>
          <h5>Explore</h5>
          <ul className="footer-links">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/services">Our services</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/donate">Donate</Link></li>
          </ul>
        </div>

        <div>
          <h5>Get in touch</h5>
          <ul className="footer-links">
            <li><Link href="/contact">Contact us</Link></li>
            <li><a href="mailto:mwmtrust2016@gmail.com">Email us</a></li>
            <li><a href="https://wa.me/919597894420" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </div>

        <div>
          <h5>Reach us</h5>
          <ul className="footer-contact">
            <li>
              <i className="bi bi-geo-alt"></i>
              P. Kumaralingapuram, Valliyur P.O, Virudhunagar Dt, Tamil Nadu – 626005
            </li>
            <li>
              <i className="bi bi-telephone"></i>
              +91 63743 57008
            </li>
            <li>
              <i className="bi bi-envelope"></i>
              mwmtrust2016@gmail.com
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Mission Word Movement Trust. All rights reserved.</span>
        <div className="footer-social">
          <a href="https://wa.me/919597894420" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="tel:+916374357008" aria-label="Call">
            <i className="bi bi-telephone"></i>
          </a>
          <a href="mailto:mwmtrust2016@gmail.com" aria-label="Email">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
