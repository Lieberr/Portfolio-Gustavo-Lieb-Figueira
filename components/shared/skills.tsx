'use client';

import { useEffect, useState, useRef } from "react";


interface Tech {
    name: string;
    primary?: boolean;
}

interface Cat {
    id: string;
    label: string;
    glyph: string;
    summary: string;
    color: string;
    techs: Tech[];
}

const CATS: Cat[] = [
    {
        id: "frontend",
        label: "Frontend",
        glyph: "◈",
        summary: "Building UIs users love to interact with.",
        color: "var(--accent-light)",
        techs: [
            {name: "React", primary: true},
            {name: "Next.js", primary: true},
            {name: "Tailwind CSS", primary: true},
            {name: "TanStack Query", primary: true},
            {name: "Framer Motion", primary: true},
            {name: "HTML5"},
            {name: "CSS3"},
            {name: "JavaScript"},
            {name: "TanStack Router"},
            {name: "React Router V7"},
            
            
        ],
    },
    {
        id: "backend",
        label: "Backend",
        glyph: "⬡",
        summary: "Designing APIs and server logic that scale",
        color: "var(--violet)",
        techs: [
            {name: "Node.js", primary: true},
            { name: "Java", primary: true },
            { name: "Spring Boot", primary: true },
            {name: "TypeScript", primary: true},
            { name: "Python" },
            { name: "Flask" },
            { name: "REST APIs" },
            { name: "C" },
            {name: "Strapi"},
        ],
    },
    {
        id: "databse",
        label: "Database",
        glyph: "◫",
        summary: "Structuring data for reliability and speed.",
        color: "var(--orange)",
        techs: [
            { name: "PostgreSQL", primary: true },
            { name: "Prisma", primary: true },
            { name: "MySQL" },
            { name: "MongoDB" },
            { name: "SQL" },
        ],
    },
    {
        id: "tools",
        label: "DevOps & Cloud",
        glyph: "⊞",
        summary: "Modern tooling and cloud infrastructure that makes development flow.",
        color: "var(--green)",
        techs: [
            { name: "Git", primary: true },
            { name: "GitHub", primary: true },
            { name: "GitHub Actions", primary: true },
            { name: "CI/CD", primary: true },
            { name: "Docker", primary: true },
            { name: "Vercel", primary: true },
            { name: "Render", primary: true },
            { name: "AWS" },
            { name: "Cloudinary" },
            { name: "Windows" },
            { name: "Android" },
        ],
    },
    {
        id: "security",
        label: "Security & Validations",
        glyph: "⊛",
        summary: "Building systems users can trust.",
        color: "#f87171",
        techs: [
            { name: "JWT", primary: true },
            { name: "OAuth 2.0", primary: true },
            {name: "Zod", primary: true},
            { name: "Authentication", primary: true },
            { name: "Authorization" },
            { name: "HTTPS / TLS" },
            {name: "IP"},
            { name: "Data Protection" },
        ],
    },
    {
        id: "design",
        label: "Design & Tools",
        glyph: "✦",
        summary: "Design and productivity tools for building better products.",
        color: "#e879f9",
        techs: [
            { name: "Figma", primary: true },
            { name: "Canva", primary: true },
            { name: "Pacote Office" },
        ],
    },
];

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;

        if(!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {
                threshold: 0.1
            }
        );

        obs.observe(el);
        
        return () => obs.disconnect();

    }, [])

    return [ref, visible] as const;
}

export default function Skills() {
    const [ref, visible] = useReveal();
    const [active, setActive] = useState("frontend");

    const cat = CATS.find((c) => c.id === active)!;

    return (
        <section id="skills" ref={ref} className="relative overflow-hidden py-28">
            <div className="bg-cross pointer-events-none absolute inset-0 opacity-25" />

            <div className="pointer-events-none absolute bottom-0 left-0
            h-1/2 w-1/2 opacity-50 bg-[radial-gradient(ellipse_at_bottom_left,var(--accent-pale),transparent_65%)]" />

            <div className="relative z-[1] mx-auto max-w-[1152px] px-8">
                <div className={`reveal mb-14 ${
                    visible ? "visible" : ''
                }`}>
                    <p className="section-num">
                        02 / Skills
                    </p>

                    <h2 className="h2 mt-2.5">
                        Technical Skills
                    </h2>

                    <p className="body mt-2.5 max-w-[460px]">
                        A toolkit built through real projects, coursework, and continuous learning.
                    </p>

                    <div className="divider-glow mt-3.5 w-[72px]" />
                </div>

                <div className="grid items-start gap-7 md:grid-cols-[280px_minmax(0,1fr)]">
                    <div className={`reveal flex flex-col gap-1.5 ${
                        visible ? "visible" : ""
                    } reveal-delay-1`}>
                        {CATS.map((c) => {
                            const isActive = c.id === active;

                            return (
                                <button
                                key={c.id}
                                type="button"
                                onClick={() => setActive(c.id)}
                                className={`group flex w-full items-center gap-3.5 rounded-xl px-[18px]
                                    py-3.5 text-left transition-all duration-200 ${
                                        isActive
                                        ? "border border-[var(--border-glow)] bg-[var(--accent-pale)]"
                                        : "border border-[var(--border)] bg-transparent hover:border-[var(--border2)]"
                                    }`}>
                                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center
                                            rounded-[9px] border text-lg transition-all duration-200 ${
                                                isActive
                                                ? "border-white/[0.06] bg-black/20"
                                                : "border-[var(--border)] bg-[var(--surface2)]"
                                            }`} style={{
                                                color: isActive ? c.color : 'var(--text-3)'
                                            }}>
                                                {c.glyph}
                                            </div>

                                            <div className="min-w-0">
                                                <p className={`mb-0.5 text-sm font-semibold ${
                                                    isActive ? "text-[var(--accent-light)]" : "text-[var(--text)]"

                                                }`}>
                                                    {c.label}
                                                </p>

                                                <p className="mono-xs text-[var(--text-3)]">
                                                    {c.techs.length} technologies
                                                </p>
                                            </div>

                                            {isActive && (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-light)" strokeWidth="2" className="ml-auto shrink-0" > <path d="M9 18l6-6-6-6" /> </svg>
                                            )}
                                    </button>
                            )
                        })}
                    </div>

                    <div key={active} className={`reveal reveal-delay-2 ${
                        visible ? "visible" : ""
                    } animate-[slideUp_0.32s_ease_both]`}>
                        <div className="card overflow-hidden">
                            <div className="flex items-center gap-4 border-b border-[var(--border)]
                            bg-[var(--surface2)] px-7 py-5">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center
                                rounded-xl border border-[var(--border-glow)] bg-[var(--accent-pale)] text-[22px]" style={{
                                    color: cat.color
                                }}>
                                    {cat.glyph}
                                </div>

                                <div className="min-w-0">
                                    <h3 className="h3 mb-[3px] text-[1.1rem]">
                                        {cat.label}
                                    </h3>

                                    <p className="body-sm text-[var(--text-3)]">
                                        {cat.summary}
                                    </p>
                                </div>

                                <div className="badge ml-auto shrink-0">
                                    {cat.techs.length} total
                                </div>
                            </div>

                            <div className="p-7">
                                <p className="mono-xs mb-4 uppercase tracking-[0.15em]" style={{
                                    color: cat.color,
                                    opacity: 0.8
                                }}>
                                    {"//"} core expertise
                                </p>

                                <div className="mb-7 flex flex-wrap gap-2.5">
                                    {cat.techs
                                    .filter((tech) => tech.primary)
                                    .map((tech) => (
                                        <TechChip
                                        key={tech.name}
                                        name={tech.name}
                                        color={cat.color}
                                        primary
                                        />
                                    ))}
                                </div>

                                {cat.techs.some((tech) => !tech.primary) && (
                                    <>
                                        <p className="mono-xs mb-3.5 uppercase tracking-[0.15em] text-[var(--text-4)]">
                                            {"//"} also familiar with
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {cat.techs
                                            .filter((tech) => !tech.primary)
                                            .map((tech) => (
                                                <TechChip
                                                key={tech.name}
                                                name={tech.name}
                                                color={cat.color}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`reveal reveal-delay-3 mt-7 flex flex-wrap gap-2 ${
                    visible ? "visible" : ""
                }`}>
                    {CATS.flatMap((c) => c.techs).map((tech, index) => (
                        <span key={`${tech.name}-${index}`} className="rounded-full border border-[var(--border)]
                        px-2.5 py-[3px] font-[var(--font-mono)] text-[11px] text-[var(--text-4)]">
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
            
        </section>
    )
}

function TechChip({
    name,
    color,
    primary = false
}: {
    name: string;
    color: string;
    primary?: boolean;
}) {
    return (
        <div className={`inline-flex cursor-default items-center gap-2 rounded-[10px] transition-all duration-[180ms] hover:-translate-y-0.5 ${
            primary ? "px-[18px] py-2.8" : "px-3.5 py-2"
        }`} style={{
            border: primary ? `1px solid ${color}33` : "1px solid var(--border)", background: primary ? `${color}0f` : "var(--surface2)"
        }} onMouseEnter={(event) => event.currentTarget.style.borderColor = `${color}55`} onMouseLeave={(event) => {
            event.currentTarget.style.borderColor = primary ? `${color}33` : "var(--border)";
        }}>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{
                background: primary ? color : "var(--text-4)"
            }} />

            <span className="font-[var(--font-mono)]" style={{
                fontSize: primary ? 14 : 13,
                fontWeight: primary ? 600 : 400,
                color: primary ? color : "var(--text-2)"
            }}>
                {name}
            </span>
                

        </div>
    )
}