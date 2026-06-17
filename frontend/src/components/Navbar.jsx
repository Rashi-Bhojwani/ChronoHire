import { useState, useEffect } from "react";

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const links = ['Home', 'About', 'Services', 'Jobs', 'Contact'];
  const pageKeys = { Home: 'home', About: 'about', Services: 'services', Jobs: 'jobs', Contact: 'contact' };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => setPage('home')}>
          <div className="nav-logo-icon">
            <img src="/images/logo.PNG" alt="ChronoHire Logo" />
          </div>
        </div>

        <div className="nav-links">
          {links.map(l => (
            <button key={l} className={`nav-link${page === pageKeys[l] ? ' active' : ''}`}
              onClick={() => setPage(pageKeys[l])}>
              {l === 'Jobs' ? 'Job Listings' : l === 'About' ? 'About Us' : l}
            </button>
          ))}
          <button className="btn-cta" style={{ marginLeft: 8 }} onClick={() => setPage('contact')}>Get In Touch</button>
        </div>

        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <button key={l} className={`nav-link${page === pageKeys[l] ? ' active' : ''}`}
            onClick={() => { setPage(pageKeys[l]); setMobileOpen(false); }}>
            {l === 'Jobs' ? 'Job Listings' : l === 'About' ? 'About Us' : l}
          </button>
        ))}
        <button className="btn-cta" style={{ marginTop: 8 }} onClick={() => { setPage('contact'); setMobileOpen(false); }}>Get In Touch</button>
      </div>
    </nav>
  );
}