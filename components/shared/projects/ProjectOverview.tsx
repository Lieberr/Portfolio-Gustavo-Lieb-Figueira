interface ProjectOverviewProps {
    project: any;
    accent: string;
    sectionRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
}

export default function ProjectOverview({
    project,
    accent,
    sectionRef,
    visible,
}: ProjectOverviewProps) {
    return (
        <section ref={sectionRef}
        className={`reveal ${visible ? "visible" : ""} py-14`}>
            <div className="mx-auto max-w-[1152px] px-8">
                <div className="divider mb-14" />

                <p style={{
                    "--project-accent": accent
                } as React.CSSProperties}
                className="mb-2.5 font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--project-accent)]">
                    01 / Overview
                </p>

                <h2 className="mb-6 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-[var(--text)]">
                    About the project
                </h2>

                <div className="mb-8 h-0.5 w-14 rounded bg-[var(--project-accent)] opacity-70"
                style={{
                    "--project-accent": accent
                } as React.CSSProperties}
                />

                <p className="max-w-[720px] text-lg leading-[1.85] text-[var(--text-2)]">
                    {project.longDescription}
                </p>
            </div>
        </section>
    )
}