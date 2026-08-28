'use client';

import { useState, useEffect } from "react";

interface NavProps {
    theme: "dark" | "light";
    onToggleTheme: () => void;
};

const LINKS = ["Home", "About", "Skills", "Projects", "Contact"];


export default function NavBar({theme, onToggleTheme}: NavProps) {
    const [scrolled, setScrolled] = useState(false);
    const [progress, setProgress] = useState(0);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;

            setScrolled(scrollY > 24);

            setProgress(
                maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0
            );
        };

        window.addEventListener("scroll", onScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    useEffect(() => {
        const ids = LINKS.map((link) => link.toLocaleLowerCase());

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            {
                rootMargin: "-35% 0px -60% 0px"
            }
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);

            if(element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [])

    return (
        <>
            <div className="fixed left-0 top-0 z-[60] h-[2px] transition-[width] duration-200
            bg-[linear-gradient(90deg,var(--accent),var(--violet))] shadow-[0_0_10px_var(--accent-glow)]" style={{width: `${progress}%`}} />

            <nav className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300
            ${scrolled ? `border-[var(--border)] backdrop-blur-[22px] bg-[rgba(7,7,15,0.88)]` : `border-transparent bg-transparent backdrop-blur-none`}`}>
                <div className="mx-auto max-w-6xl px-5 sm:px-8">
                    <div className="flex h-[62px] items-center justify-between pt-[2px]">
                        <a href="#home" className="group flex items-center gap-2.5 no-underline">
                            <div className="flex h-8 w-8 items-center justify-center rounded-[9px] border border-[var(--border-glow)]
                            bg-[var(--accent-pale)] font-mono text-[11px] font-bold tracking-[0.04em] text-[var(--accent-light)]
                            transition-all duration-200 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_12px_var(--acent-glow)]">
                                GL
                            </div>

                            <span className="hidden font-mono text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[var(--text)] sm:block">
                                Gustavo Lieb
                            </span>
                        </a>

                        <div className="hidden items-center gap-0.5 md:flex">
                            {LINKS.map((link) => {
                                const id = link.toLowerCase();
                                const isActive = active === id;

                                return (
                                    <a key={link}
                                    href={`#${id}`}
                                    className={`rounded-[8px] px-[14px] py-1.5 text-[13px] no-underline transition-all duration-[180ms]
                                    ${isActive ? `bg-[var(--accent-pale)] font-semibold text-[var(--accent-light)]` : `font-medium text-[var(--text-2)] hover:text-[var(--text)]`}`}>
                                        {link}
                                    </a>
                                )
                            })}
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={onToggleTheme}
                            aria-label="Toggle Theme"
                            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[9px] border border-[var(--border)]
                            bg-[var(--surface2)] text-[var(--text-2)] transition-all duration-200 hover:border-[var(--border-glow)] hover:text-[var(--accent-light)]">
                                {theme === 'dark' ? (
                                     <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <circle cx="12" cy="12" r="5" />

                                        <line
                                        x1="12"
                                        y1="1"
                                        x2="12"
                                        y2="3"
                                        />

                                        <line
                                        x1="12"
                                        y1="21"
                                        x2="12"
                                        y2="23"
                                        />

                                        <line
                                        x1="4.22"
                                        y1="4.22"
                                        x2="5.64"
                                        y2="5.64"
                                        />

                                        <line
                                        x1="18.36"
                                        y1="18.36"
                                        x2="19.78"
                                        y2="19.78"
                                        />

                                        <line
                                        x1="1"
                                        y1="12"
                                        x2="3"
                                        y2="12"
                                        />

                                        <line
                                        x1="21"
                                        y1="12"
                                        x2="23"
                                        y2="12"
                                        />

                                        <line
                                        x1="4.22"
                                        y1="19.78"
                                        x2="5.64"
                                        y2="18.36"
                                        />

                                        <line
                                        x1="18.36"
                                        y1="5.64"
                                        x2="19.78"
                                        y2="4.22"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                                    </svg>
                                )}
                            </button>

                            <a href="#contact" className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[9px] bg-[var(--accent)]
                            px-[14px] py-[7px] text-[12px] font-semibold text-white no-underline shadow-[0_2px_12px_var(--accent-glow)] transition-opacity
                            duration-200 hover:opacity-85">
                                Get in touch
                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}