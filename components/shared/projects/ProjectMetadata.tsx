interface ProjectMetadataProps {
    project: any;
}

export default function ProjectMetadata({
    project,
}: ProjectMetadataProps) {
    const metadata = [
        {label: "CATEGORY", value: project.tag},
        {label: "STATUS", value: project.status},
        { label: "TYPE", value: project.type },
        { label: "YEAR", value: project.year },
    ];

    return (
        <div className="mx-auto max-w-[1152px] px-8 py-14">
            <div className="grid grid-cols-4 overflow-hidden rounded-[14px] border border-[var(--border)] max-[700px]:grid-cols-2 max-[480px]:grid-cols-1">
                {metadata.map((item, i) => (
                    <div key={item.label} className={`bg-[var(--surface)] px-6 py-5 ${
                        i < 3
                        ? "border-r border-[var(--border)] max-[700px]:border-r-0"
                        : ""
                    }
                    ${
                        i % 2 === 0
                        ? "max-[700px]:border-r max-[700px]:border-[var(--border)]"
                        : ""
                    }
                    ${
                        i < 2
                        ? "max-[480px]:border-r-0 max-[480px]:border-b"
                        : ""
                    }`}>
                        <p className="mb-1.5 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.18em] text-[var(--text-4)]">
                            {item.label}
                        </p>

                        <p className="text-sm font-semibold text-[var(--text)]">
                            {item.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}