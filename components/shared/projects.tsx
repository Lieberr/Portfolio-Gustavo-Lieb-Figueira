'use client';

import { useState, useRef, useEffect } from "react";
import { getAllProjects } from "@/actions/projects";

interface Project {
    id: string;
    num: number;
    tag: string;
    title: string;
    subtitle: string;
    description: string;
    github: string | null;
    demo: string | null;
    accent: string;
    featured: boolean;
    features: {
        id: string;
        feature: string;
    }[];
    technologies: {
        technology: {
            id: string;
            name: string;
            slug: string;
        }
    }[];
};

interface ProectsProps {
    projects: Project[];
}

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        if(!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: 0.08,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return [ref, visible] as const;
}

// Github ICON
function GHIcon() {
    return (
        <svg
        width='13'
        height='13'
        viewBox="0 0 24 24"
        fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
    )
}

// External link ICON
function ExtIcon() {
    return (
        <svg
        width='11'
        height='11'
        viewBox="0 0 24 24"
        fill='none'
        stroke="currentColor"
        strokeWidth='2.5'>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
        </svg>
    )
}

//Code preview
function CodePreview() {
     const codeLines = [
    [
      ["kw", "import "],
      ["brace", "{ "],
      ["fn", "Suspense"],
      ["brace", " }"],
      ["str", " from "],
      ["s", '"react"'],
    ],
    [
      ["kw", "import "],
      ["fn", "ProductGrid"],
      ["str", " from "],
      ["s", '"@/components/grid"'],
    ],
    [
      ["kw", "import "],
      ["fn", "useSession"],
      ["str", " from "],
      ["s", '"next-auth/react"'],
    ],
    [["empty", ""]],
    [
      ["kw", "export default function "],
      ["fn", "StorePage"],
      ["brace", "() {"],
    ],
    [
      ["sp", "  "],
      ["kw", "const "],
      ["v", "{ data }"],
      ["op", " = "],
      ["fn", "useProducts"],
      ["brace", "()"],
    ],
    [
      ["sp", "  "],
      ["kw", "const "],
      ["v", "session"],
      ["op", " = "],
      ["fn", "useSession"],
      ["brace", "()"],
    ],
    [["empty", ""]],
    [["sp", "  "], ["kw", "return "], ["brace", "("]],
    [
      ["sp", "    "],
      ["tag", "<Suspense "],
      ["prop", "fallback"],
      ["op", "="],
      ["brace", "{"],
      ["tag", "<Loader"],
      ["brace", "/{}>"],
    ],
    [
      ["sp", "      "],
      ["tag", "<ProductGrid"],
    ],
    [
      ["sp", "        "],
      ["prop", "data"],
      ["op", "="],
      ["brace", "{"],
      ["v", "data"],
      ["brace", "}"],
    ],
    [
      ["sp", "        "],
      ["prop", "session"],
      ["op", "="],
      ["brace", "{"],
      ["v", "session"],
      ["brace", "}"],
    ],
    [["sp", "      "], ["tag", "/>"]],
    [["sp", "    "], ["tag", "</Suspense>"]],
    [["sp", "  "], ["brace", ")"]],
    [["brace", "}"]],
  ];

  const colors: Record<string, string> = {
    kw: "text-[#818cf8]",
    fn: "text-[#22d3a0]",
    brace: "text-[#a78bfa]",
    str: "text-white/25",
    s: "text-[#fb923c]",
    v: "text-[#7dd3fc]",
    op: "text-white/25",
    sp: "text-transparent",
    tag: "text-[#f87171]",
    prop: "text-[#86efac]",
  }

  return (
    <div className="relative min-h-[280px] h-full overflow-hidden rounded-xl border border-indigo-500/20 bg-[#06060f]">
      <div className="flex items-center gap-2 border-b border-white/5 bg-[#0c0c1e] px-3.5 py-2.5">
        <div className="flex gap-[5px]">
          <div className="h-[9px] w-[9px] rounded-full bg-[#ff5f56]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#ffbd2e]" />
          <div className="h-[9px] w-[9px] rounded-full bg-[#27c93f]" />
        </div>

        <span className="ml-1.5 font-mono text-[10px] text-white/20">
          app/store/page.tsx
        </span>

        <div className="ml-auto rounded border border-indigo-500/25 bg-indigo-500/15 px-2 py-0.5 font-mono text-[9px] text-indigo-400">
          TypeScript
        </div>
      </div>

      <div className="p-[18px_20px] font-mono text-xs leading-[1.8]">
        {codeLines.map((line, index) => {
          if (line.length === 1 && line[0][0] === 'enpty') {
            return <div key={index} className="h-1" />
          }

          return (
            <div key={index}>
              {line.map(([type, text], i) => (
                <span key={i} className={colors[type] ?? 'text-white/50'}>
                  {text}
                </span>
            ))}
            </div>
          )
        })}
      </div>

      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <div className="absolute left-0 right-0 h-12 animate-[scanDown_5s_linear_infinite] bg-gradient-to-b from-transparent via-indigo-500/[0.03] to-transparent" />
      </div>
    </div>
  )
}

function SmallVisual({ project }: { project: Project }) {
  return (
    <div
      className="relative flex h-[130px] items-center justify-center overflow-hidden rounded-xl border border-[var(--border)]"
      style={{
        background: `linear-gradient(
          135deg,
          var(--surface2) 0%,
          ${project.accent}12 100%
        )`,
      }}
    >
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative text-center">
        <div
          className="font-mono text-[32px] font-extrabold leading-none"
          style={{
            color: project.accent,
            opacity: 0.18,
          }}
        >
          {String(project.num).padStart(2, "0")}
        </div>

        <div
          className="mt-1 font-mono text-[9px] tracking-[0.18em]"
          style={{
            color: project.accent,
            opacity: 0.55,
          }}
        >
          {project.tag}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(
            90deg,
            transparent,
            ${project.accent}44,
            transparent
          )`,
        }}
      />
    </div>
  );
}


export default function Projects() {
  const [secRef, visible] = useReveal();

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await getAllProjects();

        setProjects(data);
      } catch (error) {
        console.error("Error loading projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  return (
    <section id="projects" ref={secRef} className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute right-0 top-0 h-[65%] w-[55%] bg-[radial-gradient(ellipse_at_top_right,var(--accent-pale),transparent_60%)] opacity-50" />

      <div className="relative z-[1] mx-auto max-w-[1152px] px-8">
        <div className={`reveal mb-14 flex flex-wrap items-end justify-between gap-4 ${
          visible ? 'visible' : ''
        }`}>
          <div>
            <p className="section-num">03 / Projects</p>

            <h2 className="h2 mt-2.5">
              Selected Projects
            </h2>

            <p className="body mt-2">
              Things I&apos;ve built and learned from.
            </p>

            <div className="divider-glow mt-3.5 w-[72px]" />
          </div>

          <a href="https://github.com/Lieberr"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost">
            <GHIcon />
            
            All projects on GitHub

             <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {loading && (
          <div className="flex min-h-[300px] items-center justify-center">
            <span className="font-mono text-xs text-[var(--text-4)]">
              Loading Projects...
            </span>
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div className="flex min-h-[300px] items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
            <p className="body-sm">
              No projects found.
            </p>
          </div>
        )}

        {!loading && featured && (
          <>
            <div className={`project-card reveal reveal-delay-1 mb-7 overflow-hidden rounded-[20px] border border-[var(--border)] bg-[var(--surface)] ${
              visible ? 'visible' : ''
            }`}>
              <div className="shine" />

              <div className="grid min-h-[380px] grid-cols-1 lg:grid-cols-2">
                <div className="flex flex-col gap-4 border-b border-[var(--border)] bg-gradient-to-br from-[var(--bg)] p-7 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap gap-2.5">
                    {[
                      {
                        label: "Authentication",
                        color: "var(--accent-light)"
                      },
                      {
                        label: "Full-Stack",
                        color: "var(--violet)"
                      },
                      {
                        label: "Production-ready",
                        color: "var(--green)"
                      }
                    ].map((item) => (
                      <span key={item.label}
                      className="rounded-[5px] border px-2 py-[3px] font-mono text-[9px] font-semibold tracking-[0.08em]"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}33`,
                        background: `${item.color}0f`
                      }}>
                        {item.label}
                      </span>
                    ))}
                  </div>

                  <CodePreview />
                </div>

                <div className="flex flex-col justify-between p-7 lg:p-9">
                  <div>
                     {/* Featured badge */}
                    <div className="mb-5 flex items-center gap-2.5">
                      <span className="badge-featured">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-light)]" />

                        Featured Project
                      </span>

                      <span className="mono-xs text-[var(--text-4)]">
                        {String(featured.num).padStart(2, "0")} /{" "}
                        {featured.tag}
                      </span>
                    </div>

                    <h2 className="h2 mb-1.5 text-[2rem]">
                      {featured.title}
                    </h2>

                    <p className="mb-4 text-sm font-semibold text-[var(--accent-light)]">
                      {featured.subtitle}
                    </p>

                    <p className="body-sm mb-[22px] leading-[1.8]">
                      {featured.description}
                    </p>

                    {featured.features.length > 0 && (
                      <div className="mb-[22px]">
                        <p className="mono-xs mb-3 uppercase tracking-[0.12em] text-[var(--text-4)]">
                          Key Features
                        </p>

                        <div className="flex flex-col gap-[7px]">
                          {featured.features.map((item) => (
                            <div key={item.id} className="flex items-start gap-[9px]">
                             <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--accent-light)"
                                strokeWidth="2.5"
                                className="mt-0.5 shrink-0"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg> 

                              <span className="body-sm">
                                {item.feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-[7px]">
                      {featured.technologies.map(({technology}) => (
                        <span key={technology.id} className="badge">
                          {technology.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {featured.github && (
                      <a href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ghost">
                        <GHIcon />

                        Source Code
                      </a>
                    )}

                    {featured.demo && (
                      <a href={featured.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((project, index) => (
                <div key={project.id}
                className={`project-card card reveal ${
                  visible ? "visible" : ""
                }`} style={{
                  animationDelay: `${index * 0.08}s`,
                  transitionDelay: `${(index * 2) * 0.07}s`
                }}>
                  <SmallVisual project={project} />

                  <div className="p-[20px_22px_24px]">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="mono-xs uppercase tracking-[0.12em]" style={{color: project.accent}}>
                        {String(project.num).padStart(2, "0")} /{" "}
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="h3 mb-1 text-[1.1rem]">
                      {project.title}
                    </h3>

                    <p className="mb-3 text-[13px] font-semibold" style={{color: project.accent}}>
                      {project.subtitle}
                    </p>

                    <p className="body-sm mb-4 text-[var(--text-2)]">
                      {project.description}
                    </p>

                    <div className="mb-[18px] flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 8).map(({technology}) => (
                        <span key={technology.id} className="rounded-[5px] border border-[var(--border)] bg-[var(--surface2)] px-[9px] py-[3px] font-mono text-[10px] text-[var(--text-3)]">
                          {technology.name}
                        </span>
                      ))}

                      {project.technologies.length > 8 && (
                        <span className="rounded-[5px] border border-[var(--border)] bg-[var(--surface2)] px-[9px] py-[3px] font-mono text-[10px] text-[var(--text-4)]">
                          +{project.technologies.length - 8}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3.5">
                      {project.github && (
                        <>
                          <a href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-arrow text-xs">
                            <GHIcon />

                            Code
                          </a>

                          {project.demo && (
                            <span className="select-none text-[var(--border2)]">
                              .
                            </span>
                          )}
                        </>
                      )}

                      {project.demo && (
                        <a href={project.demo}
                        target='_blank'
                        rel="noopener noreferrer"
                        className="link-arrow text-xs">
                          Demo
                          <ExtIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}