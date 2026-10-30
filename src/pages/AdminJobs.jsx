import { useCallback, useEffect, useState } from "react";
import { API_URL } from "../api";

const emptyJob = {
  title: "",
  department: "",
  location: "",
  jobType: "Full-time",
  experience: "",
  description: "",
  requirements: "",
};

export default function AdminJobs() {
  const [key, setKey] = useState(sessionStorage.getItem("adminKey") || "");
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(!!sessionStorage.getItem("adminKey"));
  const [loginError, setLoginError] = useState("");
  const [tab, setTab] = useState("jobs");
  const [jobs, setJobs] = useState([]);
  const [apps, setApps] = useState([]);
  const [form, setForm] = useState(emptyJob);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState({ type: "", text: "" });
  const [search, setSearch] = useState("");
  const [openApp, setOpenApp] = useState(null);

  const authHeaders = useCallback(() => ({ "X-Admin-Key": key }), [key]);

  const loadData = useCallback(async () => {
    try {
      const [j, a] = await Promise.all([
        fetch(`${API_URL}/api/admin/jobs`, { headers: authHeaders() }),
        fetch(`${API_URL}/api/admin/applications`, { headers: authHeaders() }),
      ]);
      if (j.ok) setJobs(await j.json());
      if (a.ok) setApps(await a.json());
    } catch {
      setNotice({ type: "error", text: "Could not reach the server." });
    }
  }, [authHeaders]);

  // Auto-login if a key is already saved in this browser session
  useEffect(() => {
    const saved = sessionStorage.getItem("adminKey");
    if (!saved) return;
    fetch(`${API_URL}/api/admin/check`, { headers: { "X-Admin-Key": saved } })
      .then((r) => {
        if (r.ok) setAuthed(true);
        else sessionStorage.removeItem("adminKey");
      })
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  useEffect(() => {
    if (authed) loadData();
  }, [authed, loadData]);

  const showNotice = (type, text) => {
    setNotice({ type, text });
    setTimeout(() => setNotice({ type: "", text: "" }), 4000);
  };

  const login = async (e) => {
    e.preventDefault();
    setLoginError("");
    try {
      const res = await fetch(`${API_URL}/api/admin/check`, { headers: authHeaders() });
      if (res.ok) {
        sessionStorage.setItem("adminKey", key);
        setAuthed(true);
      } else {
        setLoginError("Invalid admin key. Please try again.");
      }
    } catch {
      setLoginError("Could not reach the server. Is the backend running?");
    }
  };

  const logout = () => {
    sessionStorage.removeItem("adminKey");
    setAuthed(false);
    setKey("");
    setJobs([]);
    setApps([]);
  };

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const createJob = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch(`${API_URL}/api/admin/jobs`, {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setForm(emptyJob);
      showNotice("success", "Job published successfully.");
      loadData();
    } catch {
      showNotice("error", "Failed to create the job. Please check the details.");
    } finally {
      setSaving(false);
    }
  };

  const toggleJob = async (id) => {
    await fetch(`${API_URL}/api/admin/jobs/${id}/toggle`, { method: "PATCH", headers: authHeaders() });
    loadData();
  };

  const deleteJob = async (id) => {
    if (!window.confirm("Delete this job permanently?")) return;
    await fetch(`${API_URL}/api/admin/jobs/${id}`, { method: "DELETE", headers: authHeaders() });
    showNotice("success", "Job deleted.");
    loadData();
  };

  const downloadResume = async (app) => {
    const res = await fetch(`${API_URL}/api/admin/applications/${app.id}/resume`, {
      headers: authHeaders(),
    });
    if (!res.ok) return showNotice("error", "Resume file not found.");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = app.resumeOriginalName || "resume";
    a.click();
    URL.revokeObjectURL(url);
  };

  const filteredApps = apps.filter((a) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return [a.fullName, a.email, a.phone, a.jobTitle].some((v) => (v || "").toLowerCase().includes(q));
  });

  const fmtDate = (d) =>
    d ? new Date(d).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" }) : "";

  const activeCount = jobs.filter((j) => j.active).length;

  return (
    <div className="ad-page">
      <style>{css}</style>

      {/* Loading saved session */}
      {checking && !authed && (
        <div className="ad-center"><p>Loading...</p></div>
      )}

      {/* Login */}
      {!checking && !authed && (
        <div className="ad-center">
          <form className="ad-login" onSubmit={login}>
            <div className="ad-lock">🔒</div>
            <h2>Admin Login</h2>
            <p>Enter your admin key to manage job openings and applications.</p>
            <input
              type="password"
              placeholder="Admin key"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              autoFocus
              required
            />
            {loginError && <div className="ad-alert ad-error">{loginError}</div>}
            <button className="ad-btn ad-dark ad-full">Sign in</button>
          </form>
        </div>
      )}

      {/* Dashboard */}
      {authed && (
        <div className="ad-wrap">
          <div className="ad-top">
            <div>
              <h1>Careers Dashboard</h1>
              <p>Manage job openings and review candidate applications.</p>
            </div>
            <button className="ad-btn ad-ghost" onClick={logout}>Logout</button>
          </div>

          <div className="ad-stats">
            <div className="ad-stat"><strong>{jobs.length}</strong><span>Total jobs</span></div>
            <div className="ad-stat"><strong>{activeCount}</strong><span>Open positions</span></div>
            <div className="ad-stat"><strong>{apps.length}</strong><span>Applications</span></div>
          </div>

          <div className="ad-tabs">
            <button className={tab === "jobs" ? "active" : ""} onClick={() => setTab("jobs")}>
              Jobs
            </button>
            <button className={tab === "apps" ? "active" : ""} onClick={() => setTab("apps")}>
              Applications ({apps.length})
            </button>
          </div>

          {notice.text && (
            <div className={`ad-alert ${notice.type === "error" ? "ad-error" : "ad-success"}`}>
              {notice.text}
            </div>
          )}

          {/* JOBS TAB */}
          {tab === "jobs" && (
            <>
              <div className="ad-card">
                <h3>Post a new job</h3>
                <form onSubmit={createJob} className="ad-form">
                  <div className="ad-row">
                    <label>Job title *
                      <input name="title" value={form.title} onChange={onChange} placeholder="e.g. Senior React Developer" required />
                    </label>
                    <label>Department
                      <input name="department" value={form.department} onChange={onChange} placeholder="e.g. Engineering" />
                    </label>
                  </div>
                  <div className="ad-row ad-row3">
                    <label>Location
                      <input name="location" value={form.location} onChange={onChange} placeholder="e.g. Meerut / Remote" />
                    </label>
                    <label>Job type
                      <select name="jobType" value={form.jobType} onChange={onChange}>
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Internship</option>
                        <option>Contract</option>
                      </select>
                    </label>
                    <label>Experience
                      <input name="experience" value={form.experience} onChange={onChange} placeholder="e.g. 1-3 years" />
                    </label>
                  </div>
                  <label>Job description
                    <textarea rows="5" name="description" value={form.description} onChange={onChange} placeholder="Describe the role and responsibilities" />
                  </label>
                  <label>Requirements
                    <textarea rows="5" name="requirements" value={form.requirements} onChange={onChange} placeholder="Skills, qualifications, and experience required" />
                  </label>
                  <div>
                    <button className="ad-btn ad-orange" disabled={saving}>
                      {saving ? "Publishing..." : "Publish job"}
                    </button>
                  </div>
                </form>
              </div>

              <div className="ad-card">
                <h3>All jobs</h3>
                {jobs.length === 0 ? (
                  <p className="ad-muted">No jobs posted yet. Create your first job above.</p>
                ) : (
                  <div className="ad-table-wrap">
                    <table className="ad-table">
                      <thead>
                        <tr>
                          <th>Title</th>
                          <th>Location</th>
                          <th>Type</th>
                          <th>Posted</th>
                          <th>Status</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {jobs.map((j) => (
                          <tr key={j.id}>
                            <td>
                              <strong>{j.title}</strong>
                              {j.department && <div className="ad-sub">{j.department}</div>}
                            </td>
                            <td>{j.location || "—"}</td>
                            <td>{j.jobType || "—"}</td>
                            <td>{fmtDate(j.createdAt)}</td>
                            <td>
                              <span className={`ad-pill ${j.active ? "on" : "off"}`}>
                                {j.active ? "Open" : "Closed"}
                              </span>
                            </td>
                            <td>
                              <div className="ad-btns">
                                <button className="ad-btn ad-small ad-ghost" onClick={() => toggleJob(j.id)}>
                                  {j.active ? "Close" : "Reopen"}
                                </button>
                                <button className="ad-btn ad-small ad-danger" onClick={() => deleteJob(j.id)}>
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </>
          )}

          {/* APPLICATIONS TAB */}
          {tab === "apps" && (
            <div className="ad-card">
              <div className="ad-card-head">
                <h3>Candidate applications</h3>
                <input
                  className="ad-search"
                  placeholder="Search by name, email, phone or job"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              {filteredApps.length === 0 ? (
                <p className="ad-muted">
                  {apps.length === 0 ? "No applications received yet." : "No applications match your search."}
                </p>
              ) : (
                <div className="ad-table-wrap">
                  <table className="ad-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Candidate</th>
                        <th>Applied for</th>
                        <th>Contact</th>
                        <th>Resume</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredApps.map((a) => (
                        <>
                          <tr key={a.id}>
                            <td>{fmtDate(a.createdAt)}</td>
                            <td>
                              <strong>{a.fullName}</strong>
                              {a.experience && <div className="ad-sub">Experience: {a.experience}</div>}
                            </td>
                            <td>{a.jobTitle}</td>
                            <td>
                              <a href={`mailto:${a.email}`}>{a.email}</a>
                              <div className="ad-sub">{a.phone}</div>
                            </td>
                            <td>
                              <div className="ad-btns">
                                <button className="ad-btn ad-small ad-dark" onClick={() => downloadResume(a)}>
                                  Download
                                </button>
                                {a.coverLetter && (
                                  <button
                                    className="ad-btn ad-small ad-ghost"
                                    onClick={() => setOpenApp(openApp === a.id ? null : a.id)}
                                  >
                                    {openApp === a.id ? "Hide note" : "Cover letter"}
                                  </button>
                                )}
                              </div>
                            </td>
                          </tr>
                          {openApp === a.id && (
                            <tr key={`${a.id}-note`} className="ad-note-row">
                              <td colSpan="5">
                                <div className="ad-note">{a.coverLetter}</div>
                              </td>
                            </tr>
                          )}
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

const css = `
.ad-page {
  --o: #e8741a; --o-dark: #c2570c; --o-soft: #fff3e8;
  --dark: #0f172a; --text: #334155; --muted: #64748b; --border: #e5e9f0;
  background: #f8fafc; min-height: 100vh; padding: 130px 0 60px; color: var(--text);
}
.ad-page * { box-sizing: border-box; }
.ad-wrap { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
.ad-center { display: flex; justify-content: center; padding: 0 16px; }

.ad-login {
  background: #fff; border: 1px solid var(--border); border-radius: 16px;
  padding: 36px 32px; width: 100%; max-width: 400px; text-align: center;
  box-shadow: 0 10px 30px rgba(15,23,42,.08);
}
.ad-login h2 { margin: 8px 0 6px; color: var(--dark); }
.ad-login p { margin: 0 0 20px; color: var(--muted); font-size: .92rem; line-height: 1.5; }
.ad-lock { width: 56px; height: 56px; margin: 0 auto; border-radius: 14px; background: var(--o-soft); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; }
.ad-login input { margin-bottom: 14px; }

.ad-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 24px; flex-wrap: wrap; }
.ad-top h1 { margin: 0 0 4px; color: var(--dark); font-size: 1.8rem; }
.ad-top p { margin: 0; color: var(--muted); }

.ad-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 14px; margin-bottom: 24px; }
.ad-stat { background: #fff; border: 1px solid var(--border); border-left: 4px solid var(--o); border-radius: 12px; padding: 16px 18px; }
.ad-stat strong { display: block; font-size: 1.6rem; color: var(--dark); }
.ad-stat span { color: var(--muted); font-size: .85rem; }

.ad-tabs { display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--border); }
.ad-tabs button { background: none; border: 0; padding: 12px 18px; font-size: .95rem; font-weight: 600; color: var(--muted); cursor: pointer; border-bottom: 3px solid transparent; margin-bottom: -1px; font-family: inherit; }
.ad-tabs button.active { color: var(--o-dark); border-bottom-color: var(--o); }

.ad-card { background: #fff; border: 1px solid var(--border); border-radius: 14px; padding: 24px; margin-bottom: 22px; }
.ad-card h3 { margin: 0 0 16px; color: var(--dark); font-size: 1.1rem; }
.ad-card-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
.ad-card-head h3 { margin: 0; }
.ad-muted { color: var(--muted); margin: 0; }

.ad-form { display: flex; flex-direction: column; gap: 14px; }
.ad-form label, .ad-row label { display: flex; flex-direction: column; gap: 6px; font-size: .85rem; font-weight: 600; color: var(--dark); }
.ad-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.ad-row3 { grid-template-columns: 1fr 1fr 1fr; }

.ad-page input, .ad-page select, .ad-page textarea {
  width: 100%; padding: 11px 12px; border: 1px solid var(--border); border-radius: 8px;
  font-size: .95rem; font-family: inherit; font-weight: 400; background: #fff; color: var(--text);
}
.ad-page input:focus, .ad-page select:focus, .ad-page textarea:focus {
  outline: none; border-color: var(--o); box-shadow: 0 0 0 3px rgba(232,116,26,.15);
}
.ad-search { max-width: 320px; }

.ad-btn { border: 0; cursor: pointer; padding: 11px 22px; border-radius: 10px; font-weight: 600; font-size: .92rem; font-family: inherit; transition: transform .15s, box-shadow .15s; }
.ad-btn:hover { transform: translateY(-1px); }
.ad-btn:disabled { opacity: .6; cursor: not-allowed; transform: none; }
.ad-small { padding: 7px 12px; font-size: .8rem; border-radius: 8px; }
.ad-full { width: 100%; }
.ad-dark { background: var(--dark); color: #fff; }
.ad-orange { background: var(--o); color: #fff; }
.ad-orange:hover { background: var(--o-dark); }
.ad-ghost { background: #fff; color: var(--dark); border: 1px solid var(--border); }
.ad-danger { background: #fdecea; color: #b3261e; }

.ad-alert { padding: 12px 16px; border-radius: 10px; font-size: .9rem; margin: 0 0 18px; text-align: left; }
.ad-error { background: #fdecea; color: #b3261e; }
.ad-success { background: #e6f7ed; color: #1a7f45; }
.ad-login .ad-alert { margin-bottom: 14px; }

.ad-table-wrap { overflow-x: auto; }
.ad-table { width: 100%; border-collapse: collapse; min-width: 640px; }
.ad-table th { text-align: left; font-size: .75rem; text-transform: uppercase; letter-spacing: .05em; color: var(--muted); padding: 10px 12px; border-bottom: 2px solid var(--border); }
.ad-table td { padding: 14px 12px; border-bottom: 1px solid var(--border); vertical-align: top; font-size: .92rem; }
.ad-table a { color: var(--o-dark); text-decoration: none; }
.ad-sub { font-size: .8rem; color: var(--muted); margin-top: 2px; }
.ad-btns { display: flex; gap: 8px; flex-wrap: wrap; }
.ad-pill { padding: 4px 10px; border-radius: 999px; font-size: .75rem; font-weight: 600; }
.ad-pill.on { background: #e6f7ed; color: #1a7f45; }
.ad-pill.off { background: #eef1f5; color: var(--muted); }
.ad-note-row td { background: #fafbfc; }
.ad-note { white-space: pre-wrap; line-height: 1.6; padding: 4px 0; }

@media (max-width: 700px) {
  .ad-row, .ad-row3 { grid-template-columns: 1fr; }
  .ad-page { padding-top: 110px; }
}
`;