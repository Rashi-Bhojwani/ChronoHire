import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function AboutPage() {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span style={{ color: 'rgba(255,255,255,.6)' }}>About Us</span></div>
        <h1>About ChronoHire</h1>
        <p>Our story, mission, and the people behind every successful placement.</p>
      </div>

      {/* Story */}
      <section className="section" style={{ background: 'white' }} id="our-story-section">
        <div className="container">
          <div className="about-grid">
            <div className="fade-up">
              <div className="section-label">Our Story</div>
              <h2 className="section-heading">Born From a Frustration,<br />Built on a Promise</h2>
              <p style={{ color: 'var(--slate)', lineHeight: 1.75, marginBottom: 20 }}>
                ChronoHire was founded to solve a common hiring challenge — companies struggling to find the right talent quickly, while skilled professionals missed the right opportunities.
              </p>

              <p style={{ color: 'var(--slate)', lineHeight: 1.75, marginBottom: 20 }}>
                Built on the promise of faster, smarter, and more human recruitment, we now serve clients across 15+ industries and have successfully placed 500+ professionals.
              </p>

              <p style={{ color: 'var(--slate)', lineHeight: 1.75 }}>
                "Chrono" represents time, and "Hire" represents our mission — helping businesses connect with the right talent at the right moment.
              </p>
            </div>
            <div
              className="fade-in delay-2"
              style={{
                borderRadius: 24,
                minHeight: 400,
                overflow: "hidden",
              }}
            >
              <img
                src="/images/AboutUs.PNG"
                alt="About ChronoHire"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "24px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="mission-grid">
            {[
              {
                icon: "🎯",
                title: "Our Mission",
                text: "To eliminate hiring friction for businesses and career barriers for professionals — by delivering fast, precise, and reliable recruitment solutions powered by expertise and human connection.",
              },
              {
                icon: "🔭",
                title: "Our Vision",
                text: "To be India's most trusted recruitment partner, known not for the volume of placements but for the quality and longevity of every match we make.",
              },
            ].map((mv) => (
              <div key={mv.title} className="mission-card">
                <div className="mission-icon">{mv.icon}</div>

                <h3 className="mission-title">
                  {mv.title}
                </h3>

                <p className="mission-text">
                  {mv.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 16px' }}>Our Values</div>
            <h2 className="section-heading">What We Stand For</h2>
          </div>
          <div className="values-grid" style={{ marginTop: 48 }}>
            {[
              { icon: '⚡', title: 'Speed', desc: 'We respect your time. Our processes are engineered to deliver results faster than the industry standard without cutting corners.' },
              { icon: '🎯', title: 'Precision', desc: 'Every candidate we present is carefully evaluated for skills, culture, and long-term potential. No irrelevant CVs, ever.' },
              { icon: '🤝', title: 'Integrity', desc: 'We operate with full transparency. No hidden fees, no inflated pipelines, no compromises on honesty.' },
              { icon: '🌱', title: 'Partnership', desc: 'We\'re not a vendor. We\'re a partner invested in your success — before, during, and after every placement.' },
              { icon: '💡', title: 'Insight', desc: 'We bring market intelligence, salary benchmarks, and talent landscape data to every conversation.' },
              { icon: '🛡', title: 'Confidentiality', desc: 'Your search strategy and candidate information are protected with the highest standards of discretion.' },
            ].map(v => (
              <div key={v.title} className="value-card fade-up">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Let's Build Something Great Together</h2>
          <p>Whether you're hiring your first employee or your hundredth, ChronoHire is the partner you need.</p>
          <div className="cta-btns">
            <button
              className="btn-white"
              onClick={() => navigate("/contact")}
            >
              Get In Touch
            </button>
            <button
              className="btn-outline"
              style={{ borderColor: "rgba(255,255,255,.4)", color: "white" }}
              onClick={() => navigate("/jobs")}
            >
              View Opportunities
            </button>
          </div>
        </div>
      </div>
    </>
  );
}