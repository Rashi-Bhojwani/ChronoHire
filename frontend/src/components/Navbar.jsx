import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Job Listings", path: "/jobs" },
    { label: "Contact", path: "/contact" },
  ];

  const goTo = (path) => {
    navigate(path);
    setMobileOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="nav-inner">

        <div
          className="nav-logo"
          onClick={() => goTo("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="nav-logo-icon">
            <img src="/images/logo.PNG" alt="ChronoHire Logo" />
          </div>
        </div>

        <div className="nav-links">
          {links.map((item) => (
            <button
              key={item.path}
              className={`nav-link${
                location.pathname === item.path ? " active" : ""
              }`}
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </button>
          ))}

          <button
            className="btn-cta"
            style={{ marginLeft: 8 }}
            onClick={() => goTo("/contact")}
          >
            Get In Touch
          </button>
        </div>

        <button
          className="hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span />
          <span />
          <span />
        </button>

      </div>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        {links.map((item) => (
          <button
            key={item.path}
            className={`nav-link${
              location.pathname === item.path ? " active" : ""
            }`}
            onClick={() => goTo(item.path)}
          >
            {item.label}
          </button>
        ))}

        <button
          className="btn-cta"
          style={{ marginTop: 8 }}
          onClick={() => goTo("/contact")}
        >
          Get In Touch
        </button>
      </div>
    </nav>
  );
}