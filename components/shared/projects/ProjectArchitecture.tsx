import ArchDiagram from "./ArchDiagram";

interface ProjectArchitectureProps {
    project: any;
    accent: string;
    sectionRef: React.RefObject<HTMLElement | null>;
    visible: boolean;
}

export default function ProjectArchitecture({
    project,
    accent,
    sectionRef,
    visible,
}: ProjectArchitectureProps) {
    return (
        <section
        ref={sectionRef}
        className={`reveal ${visible ? "visible" : ""} py-14`}>
            <div className="mx-auto max-w-[1152px] px-8">
                <div className="divider mb-14" />

                <p
                style={{
                    "project-accent": accent,
                } as React.CSSProperties}
                className="mb-2.5 font-[var(--font-mono)] text-[11px] tracking-[0.2em] text-[var(--project-accent)]">
                    04 / Architecture
                </p>

                <h2 className="mb-10 text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold tracking-[-0.02em] text-[var(--text)]">
                    How it works
                </h2>

                <div className="grid grid-cols-2 items-center gap-12 max-[900px]:grid-cols-1">
                    <ArchDiagram steps={project.architecture} accent={accent} />

                    <div className="rounded-[14px] border border-[var(--border)] bg-[var(--surface)] p-8">
                        <p className="mb-4 font-[var(--font-mono)] text-[10px] tracking-[0.12em] text-[var(--text-4)]">
                            {"//"} Architecture overview
                        </p>
                        {project.architecture.map((step: any, i: number) => (
                            <div key={i} className={`flex gap-3 ${i < project.architecture.length - 1 ? "mb-4" : ""}`}>
                                <div style={{
                                    background: i === 0 ? accent : "var(--text-4"
                                }}
                                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />

                                <div>
                                    <p className="mb-0.5 text-[13px] font-semibold text-[var(--text)]">
                                        {step.label}
                                    </p>

                                    <p className="font-[var(--font-mono)] text-[11px] text-[var(--text-3)]">
                                        {step.sublabel}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}