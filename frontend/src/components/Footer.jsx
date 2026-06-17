import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* 1. Brand */}
        <div className="footer-brand">
          <div className="nav-logo" onClick={() => setPage('home')} style={{ cursor: 'pointer', marginBottom: 0 }}>
            <div className="nav-logo-icon">
              <img src="/images/logo.PNG" alt="ChronoHire Logo" />
            </div>
          </div>
          <p>
            A premier recruitment and HR consulting firm connecting companies with the right talent and helping professionals build successful careers. Fast. Precise. Reliable.
          </p>
        </div>

        {/* 2. Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            {['Home', 'About Us', 'Services', 'Job Listings', 'Contact'].map(l => (
              <li
                key={l}
                onClick={() => {
                  setPage(
                    l === 'Job Listings'
                      ? 'jobs'
                      : l === 'About Us'
                        ? 'about'
                        : l.toLowerCase()
                  );

                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {l}
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Contact */}
        <div className="footer-col">
          <h4>Get In Touch</h4>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <div className="footer-contact-text">+91 97140 27997</div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉️</span>
            <div className="footer-contact-text">hr@chronohire.com</div>
          </div>
          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <div className="footer-contact-text">Ahemdabad, Gujarat, India</div>
          </div>
        </div>

        {/* 4. Social Icons (NEW COLUMN) */}
        <div className="footer-col footer-social-col">
          <h4>Follow Us</h4>

<div className="flex flex-col gap-3">
  <a
    href="https://linkedin.com/company/your-company"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2"
  >
    <i className="fab fa-linkedin"></i>
    LinkedIn
  </a>

  <a
    href="/RecruitmentBrochure .pdf"
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-2"
  >
    📄 E-Brochure
  </a>
</div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 ChronoHire. All rights reserved.</p>
        <p>Privacy Policy &nbsp;|&nbsp; Terms of Service</p>
      </div>
    </footer>
  );
}