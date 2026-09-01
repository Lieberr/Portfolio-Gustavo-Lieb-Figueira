'use client';
import { useEffect, useRef, useState } from "react";

const STATS = [
  { num: "5+",  label: "Projects Built",      icon: "◈" },
  { num: "15+", label: "Technologies Learned", icon: "⚡" },
  { num: "2+",  label: "Years Learning",       icon: "📅" },
  { num: "100%",label: "Dedicated",            icon: "🎯" },
];

const PROFILE_ROWS = [
  { icon: "📍", key: "location",  value: "Brazil" },
  { icon: "🎓", key: "education", value: "Software Engineering" },
  { icon: "⚡", key: "focus",     value: "Full-Stack Development" },
  { icon: "💼", key: "experience",value: "Academic & Personal Projects" },
  { icon: "🌐", key: "open_to",   value: "Remote Opportunities", accent: true },
];

const INTERESTS = [
  "REST APIs", "Authentication", "System Design", "Databases",
  "Dev Experience", "Open Source", "Security", "CI/CD",
];

const MILESTONES = [
  {
    year: "2022",
    title: "Choosing Technology",
    desc: "I decided to pursue a career in technology and began exploring the different paths within the IT sector. That was when I realized I wanted to build my future around software and technology.",
    tags: ["IT", "Technology", "Career"],
    current: false,
  },
  {
    year: "2023",
    title: "Choosing Software Engineering",
    desc: "Initially, I planned to study Computer Science, but I switched to Software Engineering after learning more about the industry and drawing inspiration from my father's experience working with systems.",
    tags: ["Software Engineering", "Career", "Systems"],
    current: false,
  },
  {
    year: "2024",
    title: "Building the foundation",
    desc: "Started my journey in software development, learning the fundamentals of programming, web development, and software engineering. Began turning ideas into real projects and exploring different technologies.",
    tags: ["Python", "Flask", "JavaScript", "SQL", "Git"],
    current: false,
  },
  {
    year: "2025",
    title: "Exploring & expanding",
    desc: "I expanded my knowledge through university projects and hands-on learning. I worked with Python, Java, SQL, and NoSQL, began my journey with React, and developed sustainability-focused projects while also exploring concepts such as cryptography.",
    tags: ["Python", "Java", "NoSQL", "React", "Cryptography"],
    current: false,
  },
  {
    year: "2026",
    title: "Full-Stack Developer",
    desc: "Bringing everything together through full-stack development. Working with Next.js, TypeScript, databases, APIs, authentication, and modern development practices while building projects focused on quality, security, and real-world problems.",
    tags: ["Next.js", "React.js", "TypeScript", "Security", "Full Stack", "PostgreSQL", "Prisma"],
    current: true,
  },
];

const SOFT_SKILLS = [
  {
    label: "Curious",
    desc: "I dig until I understand the root cause.",
    glyph: "◉",
    color: "var(--accent-light)",
    pale: "var(--accent-pale)",
    glow: "var(--border-glow)",
  },
  {
    label: "Collaborative",
    desc: "I thrive in teams and share knowledge freely.",
    glyph: "⬡",
    color: "var(--violet)",
    pale: "rgba(139,92,246,0.08)",
    glow: "rgba(139,92,246,0.2)",
  },
  {
    label: "Proactive",
    desc: "I anticipate problems before they surface.",
    glyph: "⚡",
    color: "var(--orange)",
    pale: "rgba(251,146,60,0.08)",
    glow: "rgba(251,146,60,0.2)",
  },
  {
    label: "Adaptable",
    desc: "New stack, new domain — I ramp up fast.",
    glyph: "◈",
    color: "var(--green)",
    pale: "var(--green-pale)",
    glow: "var(--green-glow)",
  },
  {
    label: "Detail-oriented",
    desc: "Edge cases, clarity, and UX all matter.",
    glyph: "◫",
    color: "#e879f9",
    pale: "rgba(232,121,249,0.08)",
    glow: "rgba(232,121,249,0.2)",
  },
];

function useReveal() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

export default function About() {
  const [ref, visible] = useReveal();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ position: "relative", padding: "112px 0", overflow: "hidden" }}
    >
      {/* Accent glow */}
      <div
        style={{
          position: "absolute", top: 0, right: 0,
          width: "45%", height: "60%", pointerEvents: "none",
          background: "radial-gradient(ellipse at top right, var(--accent-pale), transparent 65%)",
          opacity: 0.8,
        }}
      />

      <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 32px", position: "relative", zIndex: 1 }}>

        {/* Section header */}
        <div className={`reveal ${visible ? "visible" : ""}`} style={{ marginBottom: 56 }}>
          <p className="section-num">01 / About</p>
          <h2 className="h2" style={{ marginTop: 10 }}>About Me</h2>
          <div className="divider-glow" style={{ width: 72, marginTop: 14 }} />
        </div>

        {/* Stats row */}
        <div
          className={`reveal ${visible ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
            marginBottom: 56,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="card"
              style={{
                padding: "20px 24px",
                textAlign: "center",
                transitionDelay: `${i * 0.06}s`,
              }}
            >
              <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "var(--accent-light)",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: "var(--text-3)", fontWeight: 500 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 2fr",
            gap: 56,
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Left — bio */}
          <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 32 }}>
              <p className="body-lg">
                I&apos;m a Software Engineering student deeply passionate about building
                real-world applications that solve meaningful problems. My journey
                started with curiosity about how software works under the hood — and
                it led me to fall in love with Full-Stack Development.
              </p>
              <p className="body-lg">
                I focus on the complete development lifecycle — from designing clean,
                maintainable APIs to building responsive, accessible user interfaces.
                I care about code quality, security, and developer experience as much
                as I care about shipping features that users actually love.
              </p>
              <p className="body-lg">
                I&apos;m actively looking for an internship where I can contribute
                meaningfully, learn from experienced engineers, and grow as a
                professional developer.
              </p>
            </div>

            {/* Interests */}
            <div>
              <p
                className="mono-xs"
                style={{
                  color: "var(--text-3)", letterSpacing: "0.14em",
                  textTransform: "uppercase", marginBottom: 14,
                }}
              >
                {"//"} what I&apos;m into
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {INTERESTS.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, marginTop: 28 }}>
              <a href="#projects" className="link-arrow">
                See my projects
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="link-arrow" style={{ color: "var(--text-3)" }}>
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>

          {/* Right — profile card */}
          <div className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}>
            <div className="card" style={{ overflow: "hidden" }}>
              {/* Header */}
              <div
                style={{
                  background: "var(--surface2)",
                  borderBottom: "1px solid var(--border)",
                  padding: "16px 20px",
                  display: "flex", alignItems: "center", gap: 12,
                }}
              >
                <div
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "var(--accent-pale)",
                    border: "1px solid var(--border-glow)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 12,
                    color: "var(--accent-light)",
                  }}
                >
                  GL
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: 11,
                      fontWeight: 600, color: "var(--text)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    gustavo-lieb
                  </p>
                  <p className="mono-xs" style={{ color: "var(--text-3)" }}>
                    developer.json
                  </p>
                </div>
                <div
                  style={{
                    marginLeft: "auto", padding: "3px 10px",
                    borderRadius: 99, fontSize: 10,
                    display: "flex", alignItems: "center", gap: 5,
                    fontFamily: "var(--font-mono)", fontWeight: 600,
                    color: "var(--green)",
                    background: "var(--green-pale)",
                    border: "1px solid var(--green-glow)",
                  }}
                >
                  <span
                    style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: "var(--green)",
                    }}
                  />
                  Open
                </div>
              </div>

              {/* Rows */}
              {PROFILE_ROWS.map((row, i) => (
                <div
                  key={row.key}
                  style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                    padding: "13px 20px",
                    borderBottom: i < PROFILE_ROWS.length - 1 ? "1px solid var(--border)" : "none",
                    transition: "background 0.15s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = "var(--surface2)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = "transparent"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 15 }}>{row.icon}</span>
                    <span
                      className="mono-xs"
                      style={{ color: "var(--text-3)", letterSpacing: "0.07em" }}
                    >
                      {row.key}
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: 13, fontWeight: 500,
                      color: row.accent ? "var(--green)" : "var(--text)",
                      textAlign: "right", maxWidth: 160,
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}

              {/* Footer */}
              <div
                style={{
                  background: "var(--surface2)",
                  borderTop: "1px solid var(--border)",
                  padding: "12px 20px",
                  display: "flex", alignItems: "center", gap: 8,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                </svg>
                <span className="mono-xs" style={{ color: "var(--text-4)" }}>
                  Last updated · 2026
                </span>
                <span className="mono-xs" style={{ color: "var(--text-4)", marginLeft: "auto" }}>
                  v2.0
                </span>
              </div>
            </div>

            {/* Commit detail */}
            <div
              className="card-sm"
              style={{
                marginTop: 12, padding: "12px 16px",
                display: "flex", alignItems: "center", gap: 10,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/>
                <line x1="3" y1="12" x2="9" y2="12"/><line x1="15" y1="12" x2="21" y2="12"/>
              </svg>
              <span className="mono-xs" style={{ color: "var(--text-2)" }}>
                <span style={{ color: "var(--accent-light)" }}>commit a3f2c1e</span>
                {" "}— always learning
              </span>
            </div>
          </div>
        </div>

        {/* ── Journey & Soft Skills ── */}
        <div
          className={`reveal ${visible ? "visible" : ""} reveal-delay-3`}
          style={{ marginTop: 72 }}
        >

          {/* Section label */}
          <p
            className="mono-xs"
            style={{
              color: "var(--text-3)", letterSpacing: "0.14em",
              textTransform: "uppercase", marginBottom: 36,
            }}
          >
            {'//'} my journey
          </p>

          {/* ── Zigzag Timeline ── */}
          <div className="tz-wrap" style={{ position: "relative", marginBottom: 56 }}>

            {/* Horizontal gradient line — desktop only, sits at vertical center */}
            <div
              className="tz-hline"
              style={{
                position: "absolute", top: "50%", left: 0, right: 0,
                height: 1, transform: "translateY(-50%)", pointerEvents: "none",
                background: "linear-gradient(to right, transparent 0%, var(--accent-pale) 8%, var(--accent-light) 50%, var(--accent) 92%, transparent 100%)",
              }}
            />

            {MILESTONES.map((m, i) => {
              const above = i % 2 === 0;

              const badge = (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700,
                      letterSpacing: "0.1em",
                      color: m.current ? "var(--accent-light)" : "var(--text-3)",
                      background: m.current ? "var(--accent-pale)" : "var(--surface2)",
                      border: `1px solid ${m.current ? "var(--border-glow)" : "var(--border)"}`,
                      borderRadius: 6, padding: "3px 10px",
                    }}
                  >
                    {m.year}
                  </span>
                  {m.current && (
                    <span
                      style={{
                        fontFamily: "var(--font-mono)", fontSize: 9, fontWeight: 600,
                        color: "var(--green)", background: "var(--green-pale)",
                        border: "1px solid var(--green-glow)", borderRadius: 6, padding: "3px 8px",
                        display: "flex", alignItems: "center", gap: 4,
                      }}
                    >
                      <span
                        style={{
                          width: 5, height: 5, borderRadius: "50%",
                          background: "var(--green)",
                          animation: "glowPulse 2s ease-in-out infinite",
                        }}
                      />
                      NOW
                    </span>
                  )}
                </div>
              );

              const body = (
                <>
                  <h4 style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", margin: "8px 0 6px", lineHeight: 1.35 }}>
                    {m.title}
                  </h4>
                  <p style={{ fontSize: 11.5, color: "var(--text-3)", lineHeight: 1.7, marginBottom: m.tags.length ? 10 : 0 }}>
                    {m.desc}
                  </p>
                  {m.tags.length > 0 && (
                    <div className="tz-tags" style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                      {m.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontFamily: "var(--font-mono)", fontSize: 9.5, color: "var(--text-4)",
                            background: "var(--surface2)", border: "1px solid var(--border)",
                            borderRadius: 4, padding: "2px 6px",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </>
              );

              return (
                <div key={m.year} className="tz-col">
                  {/* Top half — content for even-index items (above the line) */}
                  <div className={`tz-top${above ? "" : " tz-empty"}`}>
                    {above && <>{badge}{body}</>}
                  </div>

                  {/* Dot on the line */}
                  <div
                    className="tz-dot"
                    style={{
                      width: m.current ? 14 : 10,
                      height: m.current ? 14 : 10,
                      borderRadius: "50%", flexShrink: 0,
                      background: m.current ? "var(--accent-light)" : "var(--surface2)",
                      border: m.current ? "2px solid var(--accent)" : "1.5px solid var(--border)",
                      boxShadow: m.current ? "0 0 14px var(--accent-pale), 0 0 4px var(--accent)" : "none",
                      zIndex: 1, position: "relative",
                    }}
                  />

                  {/* Bottom half — content for odd-index items (below the line) */}
                  <div className={`tz-bot${!above ? "" : " tz-empty"}`}>
                    {!above && <>{badge}{body}</>}
                  </div>

                  {/* Mobile: always show content inline next to dot */}
                  <div className="tz-mob">
                    <div style={{ marginBottom: 4 }}>{badge}</div>
                    {body}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soft Skills — horizontal row */}
          <div>
            <p
              className="mono-xs"
              style={{
                color: "var(--text-3)", letterSpacing: "0.14em",
                textTransform: "uppercase", marginBottom: 20,
              }}
            >
              {'//'} soft skills
            </p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {SOFT_SKILLS.map((s) => (
                <div
                  key={s.label}
                  style={{
                    flex: "1 0 150px",
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "13px 16px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    transition: "border-color 0.2s, transform 0.18s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = s.glow;
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 14, fontFamily: "var(--font-mono)",
                      background: s.pale, border: `1px solid ${s.glow}`,
                      color: s.color,
                    }}
                  >
                    {s.glyph}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
                      {s.label}
                    </p>
                    <p style={{ fontSize: 11, color: "var(--text-4)", lineHeight: 1.4 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        /* ── About grid ── */
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }

        /* ── Zigzag timeline — desktop ── */
        .tz-wrap { display: flex; align-items: stretch; }
        .tz-col { flex: 1; display: flex; flex-direction: column; align-items: center; }
        .tz-top {
          flex: 1; min-height: 230px; width: 100%;
          padding: 12px 8px 22px;
          display: flex; flex-direction: column;
          justify-content: flex-end; align-items: center; text-align: center;
        }
        .tz-bot {
          flex: 1; min-height: 230px; width: 100%;
          padding: 22px 8px 12px;
          display: flex; flex-direction: column;
          justify-content: flex-start; align-items: center; text-align: center;
        }
        .tz-empty { visibility: hidden; }
        .tz-dot { flex-shrink: 0; }
        .tz-mob { display: none; }
        .tz-tags { justify-content: center; }

        /* ── Zigzag timeline — mobile ── */
        @media (max-width: 860px) {
          .tz-wrap { flex-direction: column; gap: 0; }
          .tz-col {
            flex-direction: row; align-items: flex-start;
            gap: 14px; width: 100%; padding-bottom: 28px;
          }
          .tz-top, .tz-bot { display: none !important; }
          .tz-dot { margin-top: 3px; }
          .tz-mob { display: block; text-align: left; flex: 1; }
          .tz-hline { display: none !important; }
          .tz-tags { justify-content: flex-start !important; }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
