import { useState , useEffect} from "react";

export default function ApplyPage({ setPage }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', experience: '', position: '', message: '', file: null });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [candidateName, setCandidateName] = useState("");


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handle = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.position) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("city", form.city);
      formData.append("experience", form.experience);
      formData.append("position", form.position);
      formData.append("message", form.message);

      if (form.file) {
        formData.append("resume", form.file);
      }

      const response = await fetch(
        "http://localhost:5000/api/jobs/apply",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setCandidateName(form.name);
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        experience: "",
        position: "",
        message: "",
        file: null,
      });

    } catch (err) {
      console.error(err);
      alert(err.message || "Application submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-hero">
        <div className="breadcrumb"><a onClick={() => setPage('home')}>Home</a><span>/</span><span style={{ color: 'rgba(255,255,255,.6)' }}>Apply</span></div>
        <h1>Apply for a Position</h1>
        <p>Take the next step in your career. Submit your application and our team will be in touch within 2 business days.</p>
      </div>

      <section className="section" style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="apply-form-wrap">
            <div style={{ background: 'white', borderRadius: 24, padding: 48, border: '1px solid var(--border)' }}>
              <h3 style={{ fontFamily: 'Clash Display, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'var(--charcoal)', marginBottom: 8 }}>Your Application</h3>
              <p style={{ color: 'var(--slate)', fontSize: '.875rem', marginBottom: 32 }}>All fields marked * are required.</p>

              {submitted ? (
                <div className="form-success">
                  <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
                  <div style={{ fontSize: '1.1rem', marginBottom: 8 }}>Application Submitted Successfully!</div>
                  <p style={{ fontWeight: 400, color: '#166534', fontSize: '.875rem' }}>
                    Thank you {candidateName}. Our team will review your application and contact you soon.
                  </p>
                  <button className="btn-primary" style={{ marginTop: 20 }} onClick={() => setPage('jobs')}>Browse More Jobs</button>
                </div>
              ) : (
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input className="form-input" name="name" placeholder="Rahul Sharma" value={form.name} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input className="form-input" type="email" name="email" placeholder="rahul@example.com" value={form.email} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input className="form-input" name="phone" placeholder="+91 98765 43210" value={form.phone} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Current City</label>
                    <input className="form-input" name="city" placeholder="Mumbai" value={form.city} onChange={handle} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Years of Experience</label>
                    <select className="form-input" name="experience" value={form.experience} onChange={handle}>
                      <option value="">Select experience</option>
                      <option>Fresher (0–1 years)</option>
                      <option>1–3 years</option>
                      <option>3–5 years</option>
                      <option>5–8 years</option>
                      <option>8–12 years</option>
                      <option>12+ years</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Position Applying For *</label>
                    <input className="form-input" name="position" placeholder="e.g. Senior Software Engineer" value={form.position} onChange={handle} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Cover Message</label>
                    <textarea className="form-input" name="message" placeholder="Tell us why you're a great fit for this role. What are your key strengths and what are you looking for in your next opportunity?" value={form.message} onChange={handle} />
                  </div>
                  <div className="form-group full">
                    <label className="form-label">Resume / CV</label>
                    <div className="upload-area" onClick={() => document.getElementById('resumeInput').click()}>
                      <div style={{ fontSize: '2rem', marginBottom: 10 }}>📎</div>
                      <p>Drag & drop your resume here, or <span>click to browse</span></p>
                      <p style={{ fontSize: '.75rem', marginTop: 6, color: 'var(--muted)' }}>Accepted formats: PDF, DOC, DOCX — Max size 5MB</p>
                      {form.file && (
                        <p
                          style={{
                            marginTop: 10,
                            fontWeight: 600,
                            color: "var(--teal)"
                          }}
                        >
                          {form.file.name}
                        </p>
                      )}
                    </div>
                    <input
                      id="resumeInput"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      style={{ display: "none" }}
                      onChange={(e) =>
                        e.target.files[0] &&
                        setForm((p) => ({
                          ...p,
                          file: e.target.files[0],
                        }))
                      }
                    />
                  </div>
                  <div className="form-group full" style={{ marginTop: 8 }}>
                    <button
                      type="button"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                      onClick={submit}
                      disabled={loading}
                    >
                      {loading ? '⏳ Submitting...' : 'Submit Application →'}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}