import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Brand */}
        <div className="footer-brand">
          <div
            className="nav-logo"
            onClick={() => goTo("/")}
            style={{ cursor: "pointer", marginBottom: 0 }}
          >
            <div className="nav-logo-icon">
              <img src="/images/logo.PNG" alt="ChronoHire Logo" />
            </div>
          </div>

          <p>
            A premier recruitment and HR consulting firm connecting companies
            with the right talent and helping professionals build successful
            careers. Fast. Precise. Reliable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>

          <ul className="footer-links">
            <li><button onClick={() => goTo("/")}>Home</button></li>
            <li><button onClick={() => goTo("/about")}>About Us</button></li>
            <li><button onClick={() => goTo("/services")}>Services</button></li>
            <li><button onClick={() => goTo("/jobs")}>Job Listings</button></li>
            <li><button onClick={() => goTo("/contact")}>Contact</button></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Get In Touch</h4>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">📞</span>
            <a
              href="tel:+919714027997"
              className="footer-contact-text"
            >
              +91 97140 27997
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">✉️</span>
            <a
              href="mailto:hr@chronohire.com"
              className="footer-contact-text"
            >
              hr@chronohire.com
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-icon">📍</span>
            <a
              href="https://maps.google.com/?q=Ahmedabad,Gujarat,India"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-text"
            >
              Ahmedabad, Gujarat, India
            </a>
          </div>
        </div>

        {/* Social */}
        <div className="footer-col footer-social-col">
          <h4>Follow Us</h4>

          <div className="flex flex-col gap-3">
            <a
              href="https://linkedin.com/company/chronohire-consulting/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="/RecruitmentBrochure .pdf"
              target="_blank"
              rel="noreferrer"
            >
              E-Brochure
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 ChronoHire. All rights reserved.</p>
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
}