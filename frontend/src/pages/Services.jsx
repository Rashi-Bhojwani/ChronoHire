import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function ServicesPage() {

  const navigate = useNavigate();

  const services = [
    {
      icon: '/images/PermanentStaffing.PNG',
      title: 'Permanent Staffing',
      desc: 'Our permanent staffing service identifies, screens, and delivers professionals who are ready to contribute from day one. We match candidates not just on skills and experience, but on values, work style, and long-term career goals to ensure genuine fit.',
      benefits: [
        'Rigorous multi-stage screening process',
        'Industry-matched recruitment specialists',
        '30-day replacement guarantee',
        'Offer negotiation and onboarding support'
      ],
    },

    {
      icon: '/images/HRConsulting.PNG',
      title: 'HR Consulting',
      desc: 'Beyond recruitment, we help organisations build stronger HR foundations. Our consulting practice covers workforce planning, HR policy design, compensation benchmarking, performance management frameworks, and compliance — everything you need to build a people-first culture.',
      benefits: [
        'Workforce planning and org design',
        'HR policy formulation and compliance',
        'Compensation benchmarking reports',
        'Performance management frameworks'
      ],
    },

    {
      icon: '/images/ExecutiveSearch.PNG',
      title: 'Executive Search',
      desc: 'Leadership hiring requires a different approach. Our executive search practice combines deep market intelligence, confidential outreach, and rigorous assessment to identify leaders who will drive your organisation forward. We operate with absolute discretion.',
      benefits: [
        'Access to passive, non-advertised candidates',
        'Comprehensive leadership assessment',
        'Competitor mapping and market intelligence',
        '100% confidential search process'
      ],
    },

    {
      icon: '/images/IT.PNG',
      title: 'IT Services and Consulting',
      desc: 'We provide end-to-end IT solutions including technology staffing, software development, and consulting services. Along with hiring skilled developers, we also help businesses build scalable digital products such as websites, web applications, and enterprise systems. Our team ensures the right mix of talent and technology to deliver high-performance solutions.',
      benefits: [
        'IT staffing for software, DevOps, data, and cloud roles',
        'Custom web development and application solutions',
        'Technical assessments and code-based evaluations',
        'End-to-end project delivery support (design to deployment)'
      ],
    },

    {
      icon: '/images/MarketingServices.PNG',
      title: 'Marketing Services',
      desc: 'We help brands grow through performance-driven marketing strategies including digital campaigns, brand positioning, and lead generation systems tailored for modern businesses.',
      benefits: [
        'Performance marketing campaigns',
        'Brand strategy and positioning',
        'Lead generation systems',
        'Social media growth strategy'
      ],
    },

    {
      icon: '/images/Recruitment.PNG',
      title: 'Recruitment Process Outsourcing',
      desc: 'For high-volume hiring or organisations looking to build scalable talent acquisition capabilities, our RPO service embeds our team as an extension of your HR department. We manage the full recruitment lifecycle while you focus on your business.',
      benefits: [
        'Dedicated embedded recruitment team',
        'Cost reduction of up to 40% vs. agency hiring',
        'Real-time reporting and analytics dashboard',
        'Customised SLAs and KPIs'
      ],
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("scrollToService")) {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    const target = localStorage.getItem("scrollToService");

    if (target) {
      setTimeout(() => {
        if (target === "top") {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        } else {
          document.getElementById(target)?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        localStorage.removeItem("scrollToService");
      }, 100);
    }
  }, []);

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span style={{ color: 'rgba(255,255,255,.6)' }}>Services</span>
        </div>

        <h1>Our Services</h1>
        <p>Tailored recruitment and HR solutions designed to support every stage of your business growth.</p>
      </div>

      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          {services.map((svc, i) => (
            <div
              id={svc.title.toLowerCase().replace(/\s+/g, "-")}
              key={svc.title}
              className={`service-detail${i % 2 === 1 ? ' reverse' : ''} fade-up`}
            >
              <div>
                {/* IMAGE REPLACEMENT HERE */}
                <img
                  src={svc.icon}
                  alt={svc.title}
                  className="service-detail-icon"
                />

                <div className="section-label">{`0${i + 1}`}</div>
                <h2>{svc.title}</h2>
                <p>{svc.desc}</p>

                <ul className="benefit-list">
                  {svc.benefits.map(b => (
                    <li key={b} className="benefit-item">
                      <span className="benefit-dot" />
                      {b}
                    </li>
                  ))}
                </ul>

                <button
                  className="btn-primary"
                  onClick={() => navigate("/contact")}
                >
                  Enquire About This Service →
                </button>
              </div>

              <div className="service-visual">
                <img src={svc.icon} alt={svc.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-banner">
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2>Not Sure Which Service You Need?</h2>
          <p>
            Talk to our team. We'll assess your situation and recommend the
            right engagement model for your business.
          </p>

          <div className="cta-btns">
            <button
              className="btn-white"
              onClick={() => navigate("/contact")}
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </>
  );
}