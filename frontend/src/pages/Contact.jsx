import { useState, useEffect } from "react";

export default function ContactPage({ setPage }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const handle = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return;

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to send message.");
      }

      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb">
          <button
            type="button"
            onClick={() => setPage("home")}
            style={{
              background: "none",
              border: "none",
              color: "inherit",
              cursor: "pointer",
              padding: 0,
              font: "inherit",
            }}
          >
            Home
          </button>

          <span>/</span>

          <span style={{ color: "rgba(255,255,255,.6)" }}>
            Contact
          </span>
        </div>

        <h1>Get In Touch</h1>

        <p>
          Ready to hire smarter or find your next opportunity?
          Let's start the conversation.
        </p>
      </div>

      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div className="contact-grid">

            {/* Left */}
            <div>
              <div className="contact-info-card">
                <h2>Let's Talk Talent</h2>

                <p>
                  Whether you're an employer looking for your next great hire
                  or a professional ready for a new chapter, our team is here
                  to help.
                </p>

                {[
                  {
                    icon: "📞",
                    title: "Phone",
                    info: "+91 97140 27997\nMon–Fri, 10am–7pm IST",
                  },
                  {
                    icon: "✉️",
                    title: "Email",
                    info: "hr@chronohire.com",
                  },
                  {
                    icon: "📍",
                    title: "Office",
                    info: "Ahmedabad, Gujarat\nIndia",
                  },
                ].map((c) => (
                  <div key={c.title} className="contact-detail">
                    <div className="contact-detail-icon">{c.icon}</div>

                    <div className="contact-detail-text">
                      <h4>{c.title}</h4>

                      <p style={{ whiteSpace: "pre-line" }}>
                        {c.info}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 h-[250px] shadow-sm">
                  <iframe
                    title="Ahmedabad Location"
                    src="https://maps.google.com/maps?q=Ahmedabad,Gujarat,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="contact-form-wrap">
                <h3>Send Us a Message</h3>

                {sent ? (
                  <div className="form-success">
                    <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>
                      ✅
                    </div>

                    <div>
                      Message sent successfully! We'll get back to you soon.
                    </div>
                  </div>
                ) : (
                  <form
                    onSubmit={submit}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 20,
                    }}
                  >
                    <div className="form-grid" style={{ gap: 20 }}>
                      <div className="form-group">
                        <label className="form-label">
                          Your Name *
                        </label>

                        <input
                          className="form-input"
                          name="name"
                          placeholder="Full Name"
                          value={form.name}
                          onChange={handle}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Email *
                        </label>

                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handle}
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Phone
                        </label>

                        <input
                          className="form-input"
                          name="phone"
                          placeholder="+91 9876543210"
                          value={form.phone}
                          onChange={handle}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label">
                          Company
                        </label>

                        <input
                          className="form-input"
                          name="company"
                          placeholder="Company Name"
                          value={form.company}
                          onChange={handle}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">
                        Message *
                      </label>

                      <textarea
                        className="form-input"
                        name="message"
                        rows={6}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={handle}
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ justifyContent: "center" }}
                      disabled={loading}
                    >
                      {loading ? "⏳ Sending..." : "Send Message →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}