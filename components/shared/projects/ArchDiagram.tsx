interface ArchitectureStep {
    label: string;
    sublabel: string;
}

interface ArchDisgramProps {
    steps: ArchitectureStep[];
    accent: string;
}

export default function ArchDiagram({
    steps,
    accent,
}: ArchDisgramProps) {
    return (
        <div
        style={{
            "--project-accent": accent
        } as React.CSSProperties}
        className="mx-auto flex w-full max-w-[400px] flex-col items-center">
            {steps.map((step, i) => (
                <div key={i} className="flex w-full flex-col items-center">
                    <div className={`w-full rounded-[10px] border px-6 py-3.5 text-center ${
                        i === 0
                        ? "border-[color-mix(in_srgb,var(--project-accent)_25%,transparent)] bg-[color-mix(in_srgb,var(--project-accent)_7%,transparent)]"
                        : "border-[var(--border)] bg-[var(--surface)]"
                    }`}>
                        <p className={`mb-[3px] text-sm font-semibold ${
                            i === 0
                            ? "text-[var(--project-accent)]"
                            : "text-[var(--text)]"
                        }`}>
                            {step.label}
                        </p>

                        <p className="font-[var(--font-mono)] text-[11px] text-[var(--text-3)]">
                            {step.sublabel}
                        </p>
                    </div>

                    {i < steps.length - 1 && (
                        <div className="flex flex-col items-center py-1.5">
                            <div className="h-3.5 w-px bg-[var(--border)]" />
                            
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--text-4)"
                                strokeWidth="2"
                            >
                                <path d="M12 5v14M5 12l7 7 7-7" />
                            </svg>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}