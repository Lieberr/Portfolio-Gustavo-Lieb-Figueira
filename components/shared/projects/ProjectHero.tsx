import React from "react";
import BrowserMockup from "./BrowserMockup";

interface ProjectHeroProps {
    project: any;
    accent: string;
}

export default function ProjectHero({
    project,
    accent,
}: ProjectHeroProps) {
    return (
        <section className="relative overflow-hidden py-10 pb-[72px]">
            <div
            style={{
                "--project-accent": accent
            } as React.CSSProperties}
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_0%,color-mix(in_srgb,var(--project-accent)_5%,transparent)_0%,transparent_65%)]" />

            <div className="bg-dots pointer-events-none absolute inset-0 opacity-25" />

            <div className="relative mx-auto w-full max-w-[1152px] px-8">
                <div className="grid grid-cols-2 items-center gap-14 max-[900px]:grid-cols-1">
                    <div className="animate-[slideUp_0.65s_ease_both]">
                        <p
                        style={{
                            "project-accent": accent,
                            fontFamily: "var(--font-mono)"
                        } as React.CSSProperties}
                        className="mb-3.5 text-[11px] font-semibold tracking-[0.2em] text-[var(--project-accent)]">
                            {project.num} / {project.tag}
                        </p>

                        <h1 className="mb-3 text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--text)]">
                            {project.title}
                        </h1>

                        <p className="mb-[18px] text-base font-semibold text-[var(--project-accent)]"
                        style={{
                            "--project-accent": accent
                        } as React.CSSProperties}>
                            {project.subtitle}
                        </p>

                        <p className="mb-8 max-w-[480px] text-[17px] leading-[1.8] text-[var(--text-2)]">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                "--project-accent": accent
                            } as React.CSSProperties}
                            className="inline-flex items-center gap-2 rounded-[10px] bg-[var(--project-accet)]
                            px-[22px] py-[11px] text-sm font-semibold text-white no-underline shadow-[0_4px_20px_color-mix(in_srgb,var(--project-accent)_27%,transparent)]
                            transition duration-200 hover:-translate-y-px hover:opacity-[0.87]">
                                View Live Demo

                                 <svg
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    >
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" />
                                </svg>
                            </a>

                            <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                "--project-accent": accent,
                            } as React.CSSProperties}
                            className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--border2)] bg-[var(--surface2)] px-[22px] py-[11px]
                            text-sm font-medium text-[var(--text)] no-underline transition duration-200 hover:border-[var(--project-accent)] hover:text-[var(--project-accent)]"
                            >
                                <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    >
                                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>

                                Source Code
                            </a>
                        </div>
                    </div>

                    <div className="animate-[slideUp_0.65s_0.12s_ease_both]">
                        <BrowserMockup accent={accent} title={project.title} tag={project.tag} />
                    </div>
                </div>
            </div>
        </section>
    )
}