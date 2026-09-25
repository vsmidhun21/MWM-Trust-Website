'use client';

import Link from 'next/link';
import { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../globals.css';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand-mark" href="/" onClick={() => setOpen(false)}>
          <img src="/trust-logo.png" alt="MWM Trust logo" width="34" height="34" />
          <span>
            Mission Word Movement
            <span className="brand-sub">Ministries India and Beyond</span>
          </span>
        </Link>

        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            href="https://wa.me/919597894420"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="tel:+916374357008" className="nav-icon" aria-label="Call">
            <i className="bi bi-telephone"></i>
          </a>
          <Link href="/donate" className="btn-donate desktop-only">
            Donate
          </Link>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            className={`nav-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <div className="mobile-actions">
          <div className="mobile-contact">
            <a
              href="https://wa.me/919597894420"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="tel:+916374357008" className="nav-icon" aria-label="Call">
              <i className="bi bi-telephone"></i>
            </a>
            <a href="mailto:mwmtrust2016@gmail.com" className="nav-icon" aria-label="Email">
              <i className="bi bi-envelope"></i>
            </a>
          </div>
          <Link href="/donate" className="btn-donate mobile-donate" onClick={() => setOpen(false)}>
            Donate
          </Link>
        </div>
      </div>
    </header>
  );
}
