import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import JobCard from "../components/JobCard";

export default function JobsPage() {

  const navigate = useNavigate();


  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);


  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "jobs"));

        const jobsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

  }, []);

  const filtered = jobs.filter((job) => {
    const searchText = search.toLowerCase();

    return (
      job.role?.toLowerCase().includes(searchText) ||
      job.skills?.toLowerCase().includes(searchText) ||
      job.description?.toLowerCase().includes(searchText)
    );


  });

  return (
    <> <div className="page-hero"> <div className="breadcrumb">
      <Link to="/">Home</Link> <span>/</span>
      <span style={{ color: "rgba(255,255,255,.6)" }}>
        Job Listings </span> </div>


      <h1>Open Positions</h1>

      <p>
        Explore opportunities across industries.
        Every role is sourced from a vetted ChronoHire client partner.
      </p>
    </div>

      <section
        className="section"
        style={{ background: "var(--bg)" }}
      >
        <div className="container">
          <div className="jobs-filter">
            <div className="search-bar">
              <span
                style={{
                  color: "var(--muted)",
                  fontSize: "1.1rem",
                }}
              >
                🔍
              </span>

              <input
                placeholder="Search by role, skills, or keyword..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <p
              style={{
                fontSize: ".9rem",
                color: "var(--slate)",
              }}
            >
              <strong
                style={{
                  color: "var(--charcoal)",
                }}
              >
                {filtered.length} roles
              </strong>{" "}
              found
            </p>
          </div>

          {loading ? (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
              }}
            >
              <p>Loading jobs...</p>
            </div>
          ) : filtered.length > 0 ? (
            <div className="jobs-full-grid">
              {filtered.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                />
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "60px 0",
                color: "var(--muted)",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: 16,
                }}
              >
                🔍
              </div>

              <p
                style={{
                  fontWeight: 600,
                  color: "var(--charcoal)",
                }}
              >
                No roles found
              </p>

              <p
                style={{
                  fontSize: ".875rem",
                  marginTop: 8,
                }}
              >
                Try another search keyword
              </p>
            </div>
          )}
        </div>
      </section>
    </>

  );
}
