'use client';

const NAV = ["Home", "About", "Skills", "Projects", "Contact"];

const PROJECTS_LIST = [
    {label: "LiebStore", href: "https://github.com/Lieberr/Lieb-Store"},
    {label: "GreenFlow", href: "https://github.com/Lieberr/Sistema-de-Sustentabilidade"},
    {label: "Secure Messenger", href: "https://github.com/Lieberr/Secure-Messenger"},
    {label: "IdeaDrop", href: "https://github.com/Lieberr/Idea-Drop-Api"},
    {label: "Outros", href: "https://github.com/Lieberr?tab=repositories"}
];

const SOCIALS = [
    {
        label: "GitHub",
        href: "https://github.com/Lieberr",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
        )
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gustavo-lieb-figueira/",
        icon: (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2"/>
            </svg>
        )
    },
    {
       label: "Email",
       href: "mailto:gustavoliebfigueira@gmail.com",
       icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
        </svg>
       ) 
    }
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative border-t border-[var(--border)]">
            <div className="absolute top-[-1px] left-0 right-0 h-px bg-[linear-gradient(90deg,transparent_0%,var(--border-glow)_50%,transparent_100%)]" />

            <div className="mx-auto max-w-[1152px] px-8 pt-14 pb-9">
                <div className="mb-12 grid gap-12 grid-cols-1
                min-[421px]:grid-cols-2
                min-[641px]:grid-cols-3
                min-[901px]:grid-cols-[2fr_1fr_1fr_1fr]
                min-[641px]:gap-8
                min-[901px]:gap-12">
                    <div>
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-9 w-9 items-center justify-center
                            rounded-[10px] border border-[var(--border-glow)]
                            bg-[var(--accent-pale)]
                            font-mono text-[11px] font-bold
                            text-[var(--accent-light)]">
                                GL
                            </div>

                            <span className="font-mono text-[11px] font-semibold
                            uppercase tracking-[0.18em] text-[var(--text)]">
                                Gustavo Lieb
                            </span>
                        </div>

                        <p className="body-sm mb-5 max-w-[260px]">
                            Software Engineering Student
                            <br />
                            Full-Stack Developer
                        </p>

                        <div className="status-pill">
                            <span className="status-dot" />
                            <span className="font-mono text-[10px] font-semibold
                            tracking-[0.04em] text-[var(--green)]">
                                available_for_internship
                            </span>
                        </div>
                    </div>

                    <div>
                        <p className="mono-xs mb-5 uppercase tracking-[0.16em]
                        text-[var(--text-4)]">
                            Navigate
                        </p>

                        <nav className="flex flex-col gap-3">
                            {NAV.map((item) => (
                                <a
                                key={item}
                                href={`#${item.toLocaleLowerCase()}`}
                                className="w-fit text-sm text-[var(--text-2)]
                                no-underline transition-colors duration-150 hover:text-[var(--accent-light)]">
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <p className="mono-xs mb-5 uppercase tracking-[0.16em] text-[var(--text-4)]">
                            Projects
                        </p>

                        <div className="flex flex-col gap-3">
                            {PROJECTS_LIST.map((project) => (
                                <a
                                key={project.label}
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit items-center gap-1.5 text-sm
                                text-[var(--text-2)] no-underline transition-colors duration-150 hover:text-[var(--accent-light)]">
                                    <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[var(--text-4)]
                                    transition-colors" />

                                    {project.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="mono-xs mb-5 uppercase tracking-[0.16em]
                        text-[var(--text-4)]">
                            Connect
                        </p>

                        <div className="flex flex-col gap-3.5">
                            {SOCIALS.map((social) => (
                                <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex w-fit items-center gap-2.5 text-sm
                                text-[var(--text-2)] no-underline transition-colors durantion-150
                                hover:text-[var(--accent-light)]">
                                    {social.icon}
                                    {social.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="divider-glow mb-7" />

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="mono-xs text-[var(--text-4)]">
                        © {year} Gustavo Lieb. All rights reserved.
                    </p>

                    <p className="mono-xs flex flex-wrap items-center gap-1.5 text-[var(--text-4)]">
                        Designed & Build with{" "}
                        {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((technology, index) => (
                            <span key={technology}>
                                <span className="font-medium text-[var(--accent-light)]">
                                    {technology}
                                </span>

                                {index < 3 && (
                                    <span className="opacity-80"> + </span>
                                )}
                            </span>
                        ))}
                    </p>

                    <button onClick={() => window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })}
                    aria-label="Back To Top"
                    className="flex cursor-pointer items-center gap-1.5 rounded-[8px]
                    border border-[var(--border)] bg-[var(--surface2)] px-3.5 py-2
                    font-mono text-[11px] font-medium tracking-[0.06em] text-[var(--text-2)]
                    transition-all duration-200 hover:border-[var(--border-glow)]
                    hover:bg-[var(--accent-pale)] hover:text-[var(--accent-light)]">
                        Back to top
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            >
                            <path d="M12 19V5M5 12l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </footer>
    )
}