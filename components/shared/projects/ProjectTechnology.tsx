interface ProjectTecnologyProps {
    project: any;
    accent: string;
    sectionRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
}

export default function ProjectTechnology({
    project,
    accent,
    sectionRef,
    visible,
}: ProjectTecnologyProps) {
    return (
        <section
        ref={sectionRef}
        className={`reveal ${visible ? "visible" : ""} py-14`}>
            <div className="mx-auto max-w-[1152px] px-8">
                <div className="divider mb-14" />

                <p
                style={{
                    "--project-accent": accent
                } as React.CSSProperties}
                className="mb-2.5 font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--project-accent)]">
                    03 / Technology
                </p>

                <h2 className="mb-9 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-[var(--text)]">
                    Built with
                </h2>

                <div className="mb-12 flex flex-wrap gap-3">
                    {project.tecs.map((tech: any) => (
                        <div key={tech.name} style={{
                            "--project-accent": accent
                        } as React.CSSProperties}
                        className="inline-flex items-center gap-2 rounded-[10px] border border-[var(--border)]
                        bg-[var(--surface)] px-4 py-2.5 transition duration-200 hover:border-[color-mix(in_srgb,var(--project-accent)_27%,transparent)]
                        hover:bg-[color-mix(in_srgb,var(--project-accent)_5%,transparent)]">
                            <span className="min-w-3.5 text-center font-[var(--font-mono)] text-xs text-[var(--project-accent)]">
                                {tech.icon}
                            </span>

                            <div>
                                <p className="text-[13px] font-semibold text-[var(--text)]">
                                    {tech.name}
                                </p>

                                {tech.description && (
                                    <p className="font-[var(--font-mono)] text-[10px] text-[var(--text-4)]">
                                        {tech.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mb-4 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] text-[var(--text-4)]">
                    {'//'} Technical Highlights
                </p>

                <div className="grid grid-cols-2 gap-4 max-[900px]:grid-cols-1">
                    {project.highlights.map((highlight: any) => (
                        <div key={highlight.title}
                        style={{
                            "--project-accent": accent
                        } as React.CSSProperties}
                        className="rounded-[14px]
                        border border-[var(--border)] bg-[var(--surface)] px-7 py-6 transition duration-200 hover:border-[color-mix(in_srgb,var(--project-accent)_27%,transparent)]">
                            <div className="mb-3 flex items-center gap-2.5">
                                <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[color-mix(in_srgb,var(--project-accent)_16%,transparent)]
                                bg-[color-mix(in_srgb,var(--project-accent)_7%,transparent)] text-sm text-[var(--project-accent)]">
                                    {highlight.icon}
                                </div>

                                <h3 className="text-[15px] font-bold text-[var(--text)]">
                                    {highlight.title}
                                </h3>
                            </div>

                            <p className="mb-2 text-sm leading-[1.6] text-[var(--text-2)]">
                                {highlight.description}
                            </p>

                            <p className="font-[var(--font-mono)] text-[11px] leading-[1.7] text-[var(--text-4)]">
                                {highlight.detail}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}