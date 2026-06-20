import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import JobCard from "../components/JobCard";
import { JOBS, TESTIMONIALS } from "../data/jobs";
const { useState, useEffect, useRef } = React;


export default function HomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-grid">
                    <div>
                        <div className="hero-badge fade-in">
                            <span className="hero-badge-dot" />
                            India's Fast-Growing Recruitment Partner
                        </div>
                        <h1 className="hero-heading fade-up delay-1">
                            Hire Smarter,<br />
                            <span className="teal">Grow Faster</span>
                        </h1>
                        <p className="hero-sub fade-up delay-2">
                            ChronoHire connects top-tier talent with ambitious companies through precise, reliable, and time-efficient recruitment. We don't just fill positions — we build teams.
                        </p>
                        <div className="hero-btns fade-up delay-3">
                            <button
                                className="btn-primary"
                                onClick={() => navigate("/contact")}
                            >Request Talent →</button>
                            <button
                                className="btn-outline"
                                onClick={() => navigate("/jobs")}
                            >Browse Jobs</button>
                        </div>
                        <div className="hero-stats fade-up delay-4">
                            <div>
                                <div className="hero-stat-num">500<span>+</span></div>
                                <div className="hero-stat-label">Placements Made</div>
                            </div>
                            <div>
                                <div className="hero-stat-num">98<span>%</span></div>
                                <div className="hero-stat-label">Client Retention</div>
                            </div>
                            <div>
                                <div className="hero-stat-num">12<span>d</span></div>
                                <div className="hero-stat-label">Avg. Time to Hire</div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-visual fade-in delay-3">

                        <div className="hero-image-bg"></div>

                        <img
                            src="/images/hero.png"
                            alt="ChronoHire Recruitment"
                            className="hero-image"
                        />

                    </div>
                </div>
            </section>

            {/* STATS STRIP */}
            <div className="stats-strip">
                <div className="stats-grid">
                    {[
                        { num: '500+', label: 'Professionals Placed' },
                        { num: '120+', label: 'Companies Served' },
                        { num: '15+', label: 'Industries Covered' },
                        { num: '98%', label: 'Client Satisfaction' },
                    ].map(s => (
                        <div key={s.num} className="stat-item">
                            <div className="stat-num">{s.num}</div>
                            <div className="stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT PREVIEW */}
            <section className="section" style={{ background: 'white' }}>
                <div className="container">
                    <div className="about-grid">
                        <div className="about-visual fade-in">
                            <div className="about-img-card">
                                <div className="about-icon-grid">
                                    {[
                                        { icon: '🎯', label: 'Precision Hiring' },
                                        { icon: '⚡', label: 'Fast Turnaround' },
                                        { icon: '🤝', label: 'Trusted Partners' },
                                        { icon: '📊', label: 'Data-Driven' },
                                    ].map(c => (
                                        <div key={c.label} className="about-icon-card">
                                            <div className="icon">{c.icon}</div>
                                            <div className="label">{c.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="about-exp-badge">
                                <div className="about-exp-num">3+</div>
                                <div className="about-exp-label">Years of<br />Excellence</div>
                            </div>
                        </div>
                        <div className="fade-up">
                            <div className="section-label">About ChronoHire</div>
                            <h2 className="section-heading">We Build Teams That Drive Results</h2>
                            <p className="section-sub">
                                ChronoHire is a professional recruitment firm committed to helping organisations hire skilled, qualified professionals. We work closely with companies to deeply understand their hiring needs and connect them with candidates who match requirements and culture.
                            </p>
                            <ul className="about-list">
                                {['Industry-specific hiring expertise across 15+ sectors', 'Quality-screened, interview-ready candidates', 'Dedicated recruitment partner for each client', 'Confidential executive search capabilities', 'End-to-end RPO and HR consulting support'].map(item => (
                                    <li key={item}><span className="about-check">✓</span>{item}</li>
                                ))}
                            </ul>
                            <div style={{ marginTop: 32 }}>
                                <button
                                    className="btn-primary"
                                    onClick={() => {
                                        navigate("/about");

                                        setTimeout(() => {
                                            document
                                                .getElementById("our-story-section")
                                                ?.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start",
                                                });
                                        }, 100);
                                    }}
                                >
                                    Our Story →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES PREVIEW */}
            <section className="section" style={{ background: 'var(--bg)' }}>
                <div className="container">
                    <div className="text-center">
                        <div className="section-label" style={{ margin: '0 auto 16px' }}>What We Do</div>
                        <h2 className="section-heading">Recruitment Solutions<br />Built for Your Scale</h2>
                        <p className="section-sub">From entry-level hiring to C-suite executive search, we cover every tier of your talent pipeline with precision.</p>
                    </div>
                    <div className="services-grid">
                        {[
                            {
                                icon: '👔',
                                title: 'Permanent Staffing',
                                desc: 'We identify, screen, and hire full-time professionals who fit your organisation’s needs, culture, and long-term goals.'
                            },

                            {
                                icon: '💡',
                                title: 'HR Consulting',
                                desc: 'Strategic HR advisory covering workforce planning, policy design, compliance, and organisational development.'
                            },

                            {
                                icon: '🏆',
                                title: 'Executive Search',
                                desc: 'Confidential leadership hiring supported by market intelligence, targeted outreach, and rigorous assessment.'
                            },

                            {
                                icon: '💻',
                                title: 'IT Services and Consulting',
                                desc: 'Technology staffing, software development, web applications, and consulting solutions tailored to business needs.'
                            },

                            {
                                icon: '📈',
                                title: 'Marketing Services',
                                desc: 'Performance-driven marketing strategies including branding, lead generation, digital campaigns, and growth planning.'
                            },

                            {
                                icon: '🔄',
                                title: 'Recruitment Process Outsourcing',
                                desc: 'Embedded recruitment teams that manage the complete hiring lifecycle while you focus on business growth.'
                            }
                        ].map((s, i) => (
                            <div key={s.title} className={`service-card fade-up delay-${i % 3 + 1}`}>
                                <div className="service-icon">{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <div
                                    className="service-link"
                                    onClick={() => {
                                        localStorage.setItem(
                                            "scrollToService",
                                            s.title.toLowerCase().replace(/\s+/g, "-")
                                        );

                                        navigate("/services");
                                    }}
                                >
                                    Learn more <span>→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: 48 }}>
                        <button
                            className="btn-primary"
                            onClick={() => {
                                localStorage.setItem("scrollToService", "top");
                                navigate("/services");
                            }}
                        >
                            View All Services →
                        </button>
                    </div>
                </div>
            </section>


            {/* PROCESS */}
            <section className="section process-section">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label">How We Work</div>
                        <h2 className="section-heading">From Brief to Hire<br />in 4 Steps</h2>
                        <p className="section-sub">Our proven 4-step process ensures every engagement is precise, fast, and built on deep understanding of your business.</p>
                    </div>
                    <div className="process-steps">
                        {[
                            { num: '01', title: 'Discovery & Briefing', desc: 'We begin with a thorough consultation to understand your hiring needs, culture, and success criteria.' },
                            { num: '02', title: 'Search & Screening', desc: 'Our specialists run targeted searches and rigorously evaluate candidates for skills, fit, and reliability.' },
                            { num: '03', title: 'Shortlist & Interviews', desc: 'You receive a curated shortlist of 3–5 qualified candidates, ready for your review and interview.' },
                            { num: '04', title: 'Offer & Onboarding', desc: 'We manage the offer process and support onboarding to ensure a smooth, confident start for your new hire.' },
                        ].map(step => (
                            <div key={step.num} className="process-step fade-up">
                                <div className="step-num">{step.num}</div>
                                <div className="step-title">{step.title}</div>
                                <div className="step-desc">{step.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* WHY CHOOSE */}
            <section className="section why-section">
                <div className="container">
                    <div className="text-center">
                        <div className="section-label" style={{ margin: '0 auto 16px' }}>Why ChronoHire</div>
                        <h2 className="section-heading">The Difference Is<br />In the Details</h2>
                    </div>
                    <div className="why-grid">
                        {[
                            { num: '01', title: 'Speed Without Compromise', desc: 'Our streamlined process delivers pre-screened candidates within days, not weeks. Every shortlist is built for quality, not volume.' },
                            { num: '02', title: 'Industry-Specific Expertise', desc: 'We don\'t generalise. Our recruitment specialists are domain experts who speak your industry\'s language.' },
                            { num: '03', title: 'Precision Matching', desc: 'Beyond skills, we evaluate culture fit, growth mindset, and long-term alignment — reducing costly mis-hires.' },
                            { num: '04', title: 'Confidentiality First', desc: 'All executive and sensitive searches are handled with absolute discretion, protecting your strategy and candidates alike.' },
                            { num: '05', title: 'Dedicated Partnership', desc: 'A single point of contact manages your account, understands your team dynamics, and delivers consistent results.' },
                            { num: '06', title: 'Post-Placement Support', desc: 'Our relationship doesn\'t end at offer acceptance. We support onboarding and early performance alignment.' },
                        ].map(w => (
                            <div key={w.num} className="why-card fade-up">
                                <div className="why-num">{w.num}</div>
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA */}
            <div className="cta-banner">
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2>Ready to Build Your Dream Team?</h2>
                    <p>Partner with ChronoHire and experience recruitment that's Fast, Precise, and Reliable. Let's get started today.</p>
                    <div className="cta-btns">
                        <button className="btn-white" onClick={() => navigate("/contact")}>Request Talent</button>
                        <button className="btn-outline" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'white' }} onClick={() => navigate("/jobs")}>Browse Jobs</button>
                    </div>
                </div>
            </div>

            {/* <Footer setPage={setPage} /> */}

        </>
    );
}

