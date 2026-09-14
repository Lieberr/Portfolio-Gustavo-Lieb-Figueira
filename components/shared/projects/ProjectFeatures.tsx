interface ProjectFeaturesProps {
    project: any;
    accent: string;
    sectionRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
}

export default function ProjectFeatures({
    project,
    accent,
    sectionRef,
    visible,
}: ProjectFeaturesProps) {
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
                    02 / Key Features
                </p>

                <h2 className="mb-9 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-[var(--text)]">
                    What was built
                </h2>

                <div className="grid grid-cols-3 gap-4 max-[700px]:grid-cols-1">
                    {project.features.map((feature: any) => (
                        <div key={feature.num} style={{
                            "--project-accent": accent,
                            fontFamily: "var(--font-mono)"
                        } as React.CSSProperties}
                        className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)]
                        p-6 transition duration-200 hover:-translate-y-[3px]
                        hover:border-[color-mix(in_srgb,var(--project-accent)_27%,transparent)]
                        hover:shadow-[0_8px_28px_color-mix(in_srgb,var(--project-accent)_7%,transparent)]">
                            <div className="mb-3.5 flex items-center gap-2.5">
                                <span className="text-[10px] font-bold tracking-[0.08em] text-[var(--project-accent)]">
                                    {feature.num}
                                </span>

                                <div className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] border
                                border-[color-mix(in_srgb,var(--project-accent)_16%,transparent)] bg-[color-mix(in_srgb,var(--project-accent)_7%,transparent)]
                                text-sm text-[var(--project-accent)]">
                                    {feature.icon}
                                </div>
                            </div>

                            <h3 className="mb-2 text-[15px] font-bold text-[var(--text)]">
                                {feature.title}
                            </h3>

                            <p className="text-[13px] leading-[1.7] text-[var(--text-2)]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}