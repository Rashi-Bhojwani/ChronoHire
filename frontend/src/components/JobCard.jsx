import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();

  const skillsArray = Array.isArray(job.skills)
    ? job.skills
    : typeof job.skills === "string"
    ? job.skills.split(",").map((skill) => skill.trim())
    : [];

  return (
    <div className="job-card">
      <div className="job-card-top">
        <div style={{ flex: 1 }}>
          <div className="job-title">{job.role}</div>
        </div>

        <span className="job-type-badge">Open</span>
      </div>

      <div className="job-metas">
        <span className="job-meta">🎓 {job.experience}</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: 6,
          flexWrap: "wrap",
          marginBottom: 14,
        }}
      >
        {skillsArray.map((skill) => (
          <span
            key={skill}
            className="pill"
            style={{ fontSize: ".72rem" }}
          >
            {skill}
          </span>
        ))}
      </div>

      <p
        style={{
          color: "var(--slate)",
          fontSize: ".85rem",
          lineHeight: 1.6,
          marginBottom: 16,
        }}
      >
        {job.description}
      </p>

      <div className="job-footer">
        <button
          className="btn-apply-sm"
          onClick={() => navigate("/apply")}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}