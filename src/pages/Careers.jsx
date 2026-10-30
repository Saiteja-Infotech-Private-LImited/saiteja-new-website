import { useEffect, useMemo, useState } from "react";
import { API_URL } from "../api";
import "./Careers.css";

const emptyForm = { fullName: "", email: "", phone: "", experience: "", coverLetter: "" };

const perks = [
  { icon: "🚀", title: "Career Growth", text: "Work on real projects with clear paths to learn and move up." },
  { icon: "🤝", title: "Supportive Team", text: "A collaborative culture where your ideas are heard and valued." },
  { icon: "💡", title: "Modern Tech", text: "Build with current tools and technologies across web and software." },
  { icon: "⚖️", title: "Work-Life Balance", text: "A healthy environment that respects your time and wellbeing." },
];

function timeAgo(dateStr) {
  if (!dateStr) return "";
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
  if (days <= 0) return "Posted today";
  if (days === 1) return "Posted yesterday";
  if (days < 30) return `Posted ${days} days ago`;
  return `Posted on ${new Date(dateStr).toLocaleDateString()}`;
}

export default function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("All");
  const [selected, setSelected] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [resume, setResume] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/api/jobs`)
      .then((r) => {
        if (!r.ok) throw new Error();
        return r.json();
      })
      .then(setJobs)
      .catch(() => setError("We couldn't load the job openings right now. Please try again later."))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  const departments = useMemo(
    () => ["All", ...new Set(jobs.map((j) => j.department).filter(Boolean))],
    [jobs]
  );

  const filtered = jobs.filter((j) => {
    const matchesDept = dept === "All" || j.department === dept;
    const q = search.trim().toLowerCase();
    const matchesSearch =
      !q || [j.title, j.department, j.location].some((v) => (v || "").toLowerCase().includes(q));
    return matchesDept && matchesSearch;
  });

  const openJob = (job) => {
    setSelected(job);
    setShowForm(false);
    setSubmitted(false);
    setFormError("");
    setForm(emptyForm);
    setResume(null);
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setFormError("");
    if (!resume) return setFormError("Please upload your resume.");
    if (resume.size > 5 * 1024 * 1024) return setFormError("Resume must be smaller than 5 MB.");

    const data = new FormData();
    Object.entries(form).forEach(([k, v]) => data.append(k, v));
    data.append("resume", resume);

    setSubmitting(true);
    try {
      const res = await fetch(`${API_URL}/api/jobs/${selected.id}/apply`, { method: "POST", body: data });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Something went wrong. Please try again.");
      }
      setSubmitted(true);
      setShowForm(false);
    } catch (err) {
      setFormError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const Meta = ({ job }) => (
    <div className="cr-meta">
      {job.location && <span>📍 {job.location}</span>}
      {job.jobType && <span>💼 {job.jobType}</span>}
      {job.experience && <span>⏱ {job.experience}</span>}
    </div>
  );

  return (
    <div className="cr-page">
      {/* Hero */}
      <section className="cr-hero">
        <div className="cr-wrap">
          <span className="cr-eyebrow">Careers</span>
          <h1>Build your future with <span>Saiteja Infotech</span></h1>
          <p>
            Join a growing team of passionate professionals delivering innovative
            technology solutions. Explore our open positions and find your next role.
          </p>
          <a href="#openings" className="cr-btn cr-btn-light">View Open Positions</a>
        </div>
      </section>

      {/* Why join */}
      <section className="cr-section">
        <div className="cr-wrap">
          <h2 className="cr-title">Why work with us</h2>
          <div className="cr-perks">
            {perks.map((p) => (
              <div className="cr-perk" key={p.title}>
                <div className="cr-perk-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="cr-section cr-alt" id="openings">
        <div className="cr-wrap">
          <h2 className="cr-title">Current openings</h2>

          <div className="cr-filters">
            <input
              type="text"
              placeholder="Search by title, department or location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={dept} onChange={(e) => setDept(e.target.value)}>
              {departments.map((d) => (
                <option key={d} value={d}>{d === "All" ? "All departments" : d}</option>
              ))}
            </select>
          </div>

          {loading && (
            <div className="cr-list">
              {[1, 2, 3].map((i) => <div key={i} className="cr-skeleton" />)}
            </div>
          )}

          {error && <div className="cr-alert cr-alert-error">{error}</div>}

          {!loading && !error && filtered.length === 0 && (
            <div className="cr-empty">
              <h3>No openings found</h3>
              <p>
                {jobs.length === 0
                  ? "We don't have any open positions at the moment. Please check back soon."
                  : "No positions match your search. Try different keywords or filters."}
              </p>
            </div>
          )}

          <div className="cr-list">
            {filtered.map((job) => (
              <article className="cr-job" key={job.id}>
                <div className="cr-job-main">
                  {job.department && <span className="cr-badge">{job.department}</span>}
                  <h3>{job.title}</h3>
                  <Meta job={job} />
                  <small>{timeAgo(job.createdAt)}</small>
                </div>
                <button className="cr-btn cr-btn-dark" onClick={() => openJob(job)}>
                  View &amp; Apply →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="cr-overlay" onClick={() => setSelected(null)}>
          <div className="cr-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cr-close" onClick={() => setSelected(null)} aria-label="Close">×</button>

            {submitted ? (
              <div className="cr-success">
                <div className="cr-success-icon">✓</div>
                <h2>Application submitted</h2>
                <p>
                  Thank you for applying for <strong>{selected.title}</strong>. Our team will
                  review your application and get in touch if your profile matches.
                </p>
                <button className="cr-btn cr-btn-dark" onClick={() => setSelected(null)}>Close</button>
              </div>
            ) : (
              <>
                {selected.department && <span className="cr-badge">{selected.department}</span>}
                <h2>{selected.title}</h2>
                <Meta job={selected} />

                {!showForm && (
                  <>
                    {selected.description && (
                      <div className="cr-block">
                        <h4>About the role</h4>
                        <p className="cr-pre">{selected.description}</p>
                      </div>
                    )}
                    {selected.requirements && (
                      <div className="cr-block">
                        <h4>Requirements</h4>
                        <p className="cr-pre">{selected.requirements}</p>
                      </div>
                    )}
                    <button className="cr-btn cr-btn-dark" onClick={() => setShowForm(true)}>
                      Apply for this position
                    </button>
                  </>
                )}

                {showForm && (
                  <form onSubmit={submit} className="cr-form">
                    <h4>Your details</h4>
                    <div className="cr-row">
                      <label>Full name *
                        <input name="fullName" value={form.fullName} onChange={onChange} required />
                      </label>
                      <label>Email *
                        <input name="email" type="email" value={form.email} onChange={onChange} required />
                      </label>
                    </div>
                    <div className="cr-row">
                      <label>Phone *
                        <input name="phone" value={form.phone} onChange={onChange} required />
                      </label>
                      <label>Total experience
                        <input name="experience" placeholder="e.g. 2 years" value={form.experience} onChange={onChange} />
                      </label>
                    </div>
                    <label>Cover letter
                      <textarea name="coverLetter" rows="4" placeholder="Tell us a little about yourself" value={form.coverLetter} onChange={onChange} />
                    </label>
                    <label>Resume * <small>(PDF, DOC or DOCX, max 5 MB)</small>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setResume(e.target.files[0])} required />
                    </label>

                    {formError && <div className="cr-alert cr-alert-error">{formError}</div>}

                    <div className="cr-actions">
                      <button type="button" className="cr-btn cr-btn-ghost" onClick={() => setShowForm(false)}>Back</button>
                      <button className="cr-btn cr-btn-dark" disabled={submitting}>
                        {submitting ? "Submitting..." : "Submit application"}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}