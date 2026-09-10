interface BrowserMockupProps {
    accent: string;
    title: string;
    tag: string;
}

export default function BrowserMockup({
    accent,
    title,
    tag,
}: BrowserMockupProps) {
    return (
        <div style={{"--project-accent": accent} as React.CSSProperties}
        className="overflow-hidden rounded-[14px] border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
            <div className="flex items-center gap-2.5 border-b border-[var(--border)] bg-[var(--surface2)] px-4 py-2.5">
                <div className="flex gap-[5px]">
                    <div className="h-[11px] w-[11px] rounded-full bg-[#ff5f56]" />
                    <div className="h-[11px] w-[11px] rounded-full bg-[#ffbd2e]" />
                    <div className="h-[11px] w-[11px] rounded-full bg-[#27c93f]" />
                </div>

                <div className="flex h-[22px] flex-1 items-center gap-1.5 roudned-[6px] border border-[var(--border)] bg-[var(--bg)] pl-2.5">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#27c93f]" />

                    <span className="font-[var(--font-mono)] text-[10px] text-[var(--text-4)]">
                        {title.toLowerCase()}.vercel.app
                    </span>
                </div>
            </div>

            <div className="relative flex h-[280px] flex-col overflow-hidden bg-[linear-gradient(160deg,var(--bg)_0%,color-mix(in_srgb,var(--project-accent)_4%,transparent)_100%)]">
                <div className="flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface2)] px-5 py-3">
                    <div className="flex items-center gap-2">
                        <div className="h-[22px] w-[22px] rounded-[5px] bg-[var(--project-accent)] opacity-50" />

                        <div className="h-2 w-[60px] rounded bg-[var(--text-4)] opacity-50" />
                    </div>

                    <div className="flex gap-3">
                        {[40, 32, 40, 28].map((width, i) => (
                            <div key={i} style={{width}} className="h-[7px] rounded-[3px] bg-[var(--text-4)] opacity-30" />
                        ))}
                    </div>

                    <div className="h-6 w-[70px] rounded-[6px] bg-[var(--project-accent)] opacity-85" />
                </div>

                <div className="flex flex-1 gap-3.5 overflow-hidden p-5">
                    <div className="flex w-[30%] flex-col gap-2">
                        <div className="h-3 w-[70%] rounded bg-[var(--project-accent)] opacity-60" />

                        {[85, 65, 75, 60, 80].map((width, i) => (
                            <div key={i} style={{width: `${width}%`}} className="h-2 rounded bg-[var(--text-4)] opacity-20" />
                        ))}
                    </div>

                    <div className="grid flex-1 grid-cols-1 content-start gap-2.5">
                        {Array.from({length: 6}).map((_, i) => (
                            <div key={i} className={`flex aspect-[1/0.7] flex-col gap-1.5 rounded-lg border p-2.5 ${
                                i === 0
                                ? "border-[color-mix(in_srgb,var(--project-accent)_33%,transparent)]"
                                : "border-[var(--border)]"
                            } bg-[var(--surface)]`}>
                                <div className="h-[30px] rounded bg-[color-mix(in_srgb,var(--project-accent)_8%,transparent)]" />

                                 <div
                                    className="
                                        h-[7px] w-[80%]
                                        rounded-[3px]
                                        bg-[var(--text-4)]
                                        opacity-30
                                    "
                                    />

                                    <div
                                    className="
                                        h-1.5 w-[55%]
                                        rounded-[3px]
                                        bg-[var(--text-4)]
                                        opacity-[0.18]
                                    "
                                    />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div
                        className="
                        absolute left-0 right-0
                        h-12
                        animate-[scanDown_7s_linear_infinite]
                        bg-[linear-gradient(to_bottom,transparent,color-mix(in_srgb,var(--project-accent)_2%,transparent),transparent)]
                        "
                    />
                    </div>

                    {/* Watermark */}
                    <div
                    className="
                        absolute bottom-2 right-3
                        font-[var(--font-mono)]
                        text-[9px]
                        tracking-[0.1em]
                        text-[var(--project-accent)]
                        opacity-35
                    "
                    >
                    {tag}
                    </div>
            </div>
        </div>
    )
}