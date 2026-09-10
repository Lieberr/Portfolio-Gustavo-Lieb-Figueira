interface ScreenPlaceholderProps {
    accent: string;
    label: string;
    large?: boolean;
}

export default function ScreenPlaceholder({
    accent,
    label,
    large,
}: ScreenPlaceholderProps) {
    return (
        <div 
        style={{
            "--project-accent": accent
        } as React.CSSProperties}
        className={`gorup relative flex items-center justify-center overflow-hidden rounded-xl border border-[var(--border)]
        bg-[linear-gradient(135deg,var(--surface2)_0%,color-mix(in_srgb,var(--project-accent)_4%,transparent)_100%)]
        transition-[transform,box-shadow] duration-200 hover:scale-[1.015] hover:shadow-[0_8px_32px_color-mix(in_srgb,var(--project-accent)_13%,transparent)]
        ${large ? "aspect-video" : "aspect-[4/3]"}`}>
            <div className="bg-dots absolute inset-0 opacity-25" />

            <div className="relative text-center">
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={accent}
                    strokeWidth="1.5"
                    className="mx-auto mb-2 opacity-40"
                    >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                </svg>

                <p className="font-[var(--font-mono)] text-[10px] tracking-[0.1em] text-[var(--project-accent)] opacity-50">
                    {label}
                </p>
            </div>
        </div>
    )
}