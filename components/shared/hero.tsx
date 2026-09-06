'use client';

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const LINES = [
    { k: "cmd", v: "whoami" },
    { k: "str", v: "gustavo-lieb" },
    { k: "empty", v: "" },
    { k: "cmd", v: "cat ./profile.json" },
    { k: "brace", v: "{" },
    { k: "kv", key: " role", val: '"software-engineering-student",' },
    { k: "kv", key: " focus", val: '"full-stack-development",' },
    { k: "kv", key: " stack", val: '["Next.js","Node.js","TypeScript","PostgreSQL"],' },
    { k: "kv", key: " location", val: '"brazil",' },
    { k: "kv", key: " status", val: '"available_for_internship"' },
    { k: "brace", v: "}" },
    { k: "empty", v: "" },
    { k: "cmd", v: "git log --oneline -3" },
    { k: "hash", hash: "a3f2c1e", msg: "feat: JWT auth + role-based access" },
    { k: "hash", hash: "8b9d4f2", msg: "refactor: optimize DB query layer" },
    { k: "hash", hash: "1c7e8a0", msg: "init: project bootstrap" },
] as const;

const TOP_BADGES = [
  { label: "React", delay: "0s", mt: 0 },
  { label: "TypeScript", delay: "0.5s", mt: -8 },
  { label: "Next.js", delay: "1s", mt: 5 },
  { label: "Node.js", delay: "1.5s", mt: -4 },
  { label: "PostgreSQL", delay: "0.8s", mt: 7 },
  { label: "Docker", delay: "0.3s", mt: -2 },
];
 
export default function Hero() {
    const [linesShown, setLinesShown] = useState(0);
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        let i = 0;

        timerRef.current = setInterval(() => {
            i++;
            setLinesShown(i)

            if (i >= LINES.length && timerRef.current) {
                clearInterval(timerRef.current)
            }
        }, 100);

        return () => {
            if(timerRef.current) {
                clearInterval(timerRef.current)
            }
        }
    }, [])

    return (
        <section id="home"
        className="relative flex min-h-screen items-center overflow-hidden pt-20">
            <div className="bg-dots absolute inset-0 opacity-[0.35]" />

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,var(--accent-pale)_0%,transparent_65%)]" />

            <div className="absolute bottom-[-10%] left-1/2 h-[40%] w-[60%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--accent-glow2)_0%,transparent_70%)] blur-[40px]" />

            <div className="relative z-10 mx-auto w-full max-w-[1152px] px-8 py-20">
                <div className="grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:gap-10">

                    {/*LEFT*/}
                    <div className="anim-slide-up">

                        {/*AVATAR + STATUS*/}
                        <div className="mb-7 flex items-center gap-4">
                            <div className="relative shrink-0">
                                <div className="absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,var(--accent),var(--violet),var(--accent-light),var(--accent))] opacity-75 animate-[spinSlow_6s_linear_infinite]" />

                                <div className="relative z-[1] flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full border-2 border-[var(--surface)] bg-[var(--accent-pale)]">
                                        <Image width={60} height={60} src='/images/profile.jpg' alt="Gustavo Lieb" className="h-full w-full object-cover" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <div className="status-pill w-fit">
                                    <span className="status-dot" />

                                    <span className="text-[10px] font-semibold tracking-[0.05em] text-[var(--green)]" style={{
                                        fontFamily: "var(--font-mono)"
                                    }}>
                                        Available for internship
                                    </span>
                                </div>

                                <span className="font-[var(--font-mono)] text-[11px] tracking-[0.1em] text-[var(--text-3)]">
                                    Brazil · Remote
                                </span>
                            </div>
                        </div>

                        {/*NAME*/}
                        <div className="mb-4"> 
                            <span className="font-[var(--font-mono)] text-[13px] tracking-[0.06em] text-[var(--text-3)]"> 
                                Hi,{" "} 
                            </span>

                            <span className="text-[13px] font-bold tracking-[0.06em] text-[var(--accent-light)]" style={{
                                fontFamily: "var(--font-mono)"
                            }}> 
                                I&apos;m Gustavo Lieb 
                            </span> 
                        </div>

                        {/*HEADING*/}

                        <h1 className="h1 mb-2">
                            Buiding digital
                        </h1>

                        <h1 className="h1 grad-text mb-6">
                            experiences with code.
                        </h1>

                        {/*DESCRIPTIN*/}
                        <p className="body-lg mb-9 max-w-[480px]">
                            Software Engineering student focused on Full-Stack Development, 
                            modern web applications, and secure backend systems. I turn ideas 
                            into reliable software.
                        </p>

                        {/*CTA*/}
                        <div className="mb-8 flex flex-wrap gap-3">
                            <a href="#projects" className="btn btn-primary">
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" > <rect x="3" y="3" width="7" height="7" rx="1" /> <rect x="14" y="3" width="7" height="7" rx="1" /> <rect x="3" y="14" width="7" height="7" rx="1" /> <rect x="14" y="14" width="7" height="7" rx="1" /> </svg>

                                View Projects
                            </a>

                            <a href="#contact" className="btn btn-outline">
                                Contact Me

                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" > <path d="M5 12h14M12 5l7 7-7 7" /> </svg>

                            </a>
                        </div>

                        {/*SOCIAL ROW*/}
                        <div className="flex items-center gap-2.5">
                            <span className="mr-0.5 font-[var(--font-mono)] text-[11px] text-[var(--text-4)]">
                                find me on →
                            </span>

                            <a href="https://github.com/Lieberr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost !px-4 !py-2">
                                <GHIcon />
                                GItHub
                            </a>

                            <a href="https://www.linkedin.com/in/gustavo-lieb-figueira/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost !px-4 !py-2">
                                <LIIcon />
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/*RIGHT*/}
                    <div className="anim-slide-up relative">
                        <div className="mb-3.5 hidden items-center justify-center gap-2.5 md:flex">
                            {TOP_BADGES.map((b, i) => (
                                <span
                                    key={b.label}
                                    className="
                                        badge badge-accent
                                        w-fit justify-self-center
                                        animate-[float_5s_ease-in-out_infinite]
                                        text-[10px]
                                        opacity-70
                                        shadow-[0_4px_18px_var(--accent-glow)]
                                        sm:text-[11px]
                                    "
                                    style={{
                                        animationDelay: b.delay,
                                        animationDuration: `${5 + i * 0.5}s`,
                                        marginTop: `${b.mt}px`,
                                    }}
                                >
                                    {b.label}
                                </span>
                            ))}
                        </div>

                        {/*TERMINAL*/}
                        <div className="terminal-win relative z-[1]">
                            <div className="terminal-bar">
                                <div className="flex gap-1.5">
                                    <div className="t-dot bg-[#ff5f56]" /> 
                                    <div className="t-dot bg-[#ffbd2e]" /> 
                                    <div className="t-dot bg-[#27c93f]" />
                                </div>

                                <span className="flex-1 text-center font-[var(--font-mono)] text-[11px] text-[rgba(255,255,255,0.25)]">
                                    terminal — zsh — ~/portfolio
                                </span>

                                <div className="h-[7px] w-[7px] rounded-full bg-[var(--green)] shadow-[0_0_8px_var(--green-glow)]" />
                            </div>

                            <div className="terminal-body min-h-[300px]">
                                {LINES.map((line, i) => {
                                    if (i >= linesShown) return null;

                                    return (
                                        <div key={i} className="animate-[termLine_0.18s_ease_forwards]">
                                            {line.k === 'empty' && (
                                                <div className="h-1.5" />
                                            )}

                                            {line.k === 'cmd' && (
                                                <div className="glex gap-2">
                                                    <span className="select-none text-[var(--green)]">
                                                        ${' '}
                                                    </span>

                                                    <span className="text-[#e0e0ff]">
                                                        {line.v}
                                                    </span>
                                                </div>
                                            )}

                                            {line.k === 'str' && (
                                                <div className="pl-[18px] text-[var(--accent-light)]">
                                                    {line.v}
                                                </div>
                                            )}

                                            {line.k === 'brace' && (
                                                <div className="pl-[18px] text-[var(--violet)]">
                                                    {line.v}
                                                </div>
                                            )}

                                            {line.k === 'kv' && 'key' in line && (
                                                <div className="pl-[18px]">
                                                    <span className="text-[#7dd3fc]">
                                                        {line.key}
                                                    </span>

                                                    <span className="text-[rgba(255,255,255,0.3)]">
                                                        :{' '}
                                                    </span>

                                                    <span className="text-[var(--orange)]">
                                                        {line.val}
                                                    </span>
                                                </div>
                                            )}

                                            {line.k === 'hash' && 'hash' in line && (
                                                <div className="flex gap-2 pl-[18px]">
                                                    <span className="text-[var(--accent-light)]">
                                                        {line.hash}
                                                    </span>

                                                    <span className="text-[rgba(255,255,255,0.4)]">
                                                        {line.msg}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}

                                <div className="mt-1 flex items-center gap-2">
                                    <span className="text-[var(--green)]">$</span>
                                    
                                    <span className="inline-block h-4 w-2 rounded-[2px] bg-[var(--accent-light)] cursor-blink" />
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
                                <div className="absolute left-0 right-0 h-10 animate-[scanDown_6s_linear_infinite] bg-[linear-gradient(to_bottom,transparent,rgba(99,102,241,0.04),transparent)]" />
                            </div>
                        </div>

                        <div className="mt-1 flex justify-between px-0.5">
                            <span className="mono-xs !text-[var(--text-4)]">
                                ~/projects/portfolio
                            </span>

                            <div className="flex items-center gap-1.5">
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--green)]" />

                                <span className="mono-xs !text-[10px] !text-[var(--green)]">
                                    available_for_internship
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 opacity-[0.35] animate-[fadeIn_1.5s_2s_ease_both]">
                    <span className="mono-xs !tracking-[0.12em] !text-[var(--text-3)]">
                        scroll
                    </span>

                    <div className="h-9 w-px bg-[linear-gradient(to_bottom,var(--accent),transparent)]" />
                </div>
            </div>
            
            <style>{`
                @keyframes spinSlow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }

                    50% {
                        transform: translateY(-8px);
                    }
                }
            `}</style>
        </section>
    )
}

function GHIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" > <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /> </svg>
    )
}

function LIIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" > <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /> <circle cx="4" cy="4" r="2" /> </svg>
    )
}