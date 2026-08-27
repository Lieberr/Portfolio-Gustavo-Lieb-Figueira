'use client';

import { useEffect, useState, useRef } from "react";

const SOCIALS = [
    {
        label: "gustavoliebfigueira@gmail.com",
        sub: "Email",
        href: "mailto:gustavoliebfigueira@gmail.com",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
    },
    {
        label: "github.com/Lieberr",
        sub: "GitHub",
        href: "https://github.com/Lieberr",
        icon: (
            <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
            >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
        ),
    },
    {
        label: "linkedin.com/in/gustavo-lieb-figueira",
        sub: "LinkedIn",
        href: "https://www.linkedin.com/in/gustavo-lieb-figueira/",
        icon: (
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
        </svg>  
        ),
    },
];

function useReveal() {
    const ref = useRef<HTMLElement>(null);
    const [visible, setVisible]= useState(false);

    useEffect(() => {
        const el = ref.current;

        if(!el) return;

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            {threshold: 0.1}
        );

        obs.observe(el);

        return () => obs.disconnect();
    }, [])

    return [ref, visible] as const;
}

export default function Contact() {
    const year = new Date().getFullYear();

    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<
    'idle' | 'sending' | 'sent'>("idle");

    const [secRef, visible] = useReveal();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus("sending");

        await new Promise((resolve) => setTimeout(resolve, 1200));

        setStatus("sent");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    };

    return (
        <section id="contact" ref={secRef} className="relative overflow-hidden py-[112px] pb-20">
            <div className="bg-cross pointer-events-none absolute inset-0 opacity-[0.4]" />

            <div className="pointer-events-none absolute bottom-[-5%] h-1/2 left-1/2 w-4/5 -translate-x-1/2
            bg-[radial-gradient(ellipse_at_bottom,var(--accent-pale),transparent_65%)] opacity-70" />

            <div className="relative z-10 mx-auto max-w-[1152px] px-8">

                <div className={`reveal ${visible ? "visible" : ""} mb-[72px] text-center`}>
                    <p className="section-num mb-[14px]">
                        04 / Contact
                    </p>

                    <h2 className="h2 grad-text mb-[18px] text-[clamp(2.2rem,5vw,3.4rem)]">
                        Let&apos;s build something.
                    </h2>

                    <p className="body-lg mx-auto max-w-[500px]">
                        Looking for an internship opportunity where I can
                        contribute, learn, and grow as a developer. I&apos;d love
                        to talk.
                    </p>
                </div>

                <div className="grid items-start grid-cols-1 gap-7 min-[769px]:grid-cols-[2fr_3fr]">
                    <div className={`reveal ${visible ? "visible" : ""} reveal-delay-1 flex flex-col gap-4`}>
                        <div className="terminal-win">
                            <div className="terminal-bar">
                                <div className="flex gap-[5px]">
                                    <div className="t-dot bg-[#ff5f56]" />
                                    <div className="t-dot bg-[#ffbd2e]" />
                                    <div className="t-dot bg-[#27c93f]" />
                                </div>

                                <span className="ml-1.5 font-mono text-[10px] text-white/20">
                                    contact.sh
                                </span>
                            </div>

                            <div className="terminal-body">
                                <div className="flex gap-2 text-white/40">
                                    <span className="text-[var(--accent-light)]">
                                        {">"}
                                    </span>

                                    Ready to start a new project ?
                                </div>

                                <div className="mt-2 flex gap-2 text-white/40">
                                    <span className="text-[var(--accent-light)]">
                                        {">"}
                                    </span>

                                    Let&apos;s connect and build something{" "}
                                    <span className="text-[var(--green)]">
                                        great
                                    </span>
                                    .
                                </div>

                                <div className="mt-[14px] flex items-center gap-2">
                                    <span className="text-[var(--green)]">
                                        $
                                    </span>

                                    <span className="cursor-blink inline-block h-[14px] w-[7px] rounded-[2px] bg-[var(--accent-light)]" />
                                </div>
                            </div>
                        </div>

                        <div className="card overflow-hidden">
                            <div className="border-b border-[var(--border)] bg-[var(--surface2)] px-[18px] py-3">
                                <p className="mono-xs uppercase tracking-[0.14em] text-[var(--text-4)]">
                                    Find me at
                                </p>
                            </div>

                            {SOCIALS.map((social, index) => (
                                <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`
                                    flex items-center gap-[14px] px-[18px] py-[14px] no-underline transition-colors duration-150 hover:bg-[var(--surface2)]
                                    ${
                                        index < SOCIALS.length - 1
                                        ? "border-b border-[var(--border)]"
                                        : ""
                                    }
                                    `}>
                                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px]
                                        border border-[var(--border-glow)] bg-[var(--accent-pale)] text-[var(--acent-light)]">
                                            {social.icon}
                                        </div>

                                        <div className="min-w-0 overflow-hidden">
                                            <p className="mb-0.5 text-[11px] font-semibold text-[var(--text-3)]">
                                                {social.sub}
                                            </p>

                                            <p className="mono-xs truncate text-[var(--text-2)]">
                                                {social.label}
                                            </p>
                                        </div>

                                        <svg
                                            width="12"
                                            height="12"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            className="
                                            ml-auto
                                            shrink-0
                                            text-[var(--text-4)]
                                            "
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                            ))}
                        </div>

                        <div className="card overflow-hidden">
                            <div className="flex items-center gap-3 border-b border-[var(--border)] px-[18px] py-[14px]">
                                <span className="shrink-0 text-xl">
                                    🇧🇷
                                </span>

                                <div>
                                    <p className="text-[13px] font-semibold text-[var(--text)]">
                                        Based in Brazil
                                    </p>

                                    <p className="text-xs text-[var(--text-3)]">
                                        Open to remote worldwide
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between bg-[var(--green-pale)] px-[18px] py-3">
                                <div className="flex items-center gap-2">
                                    <span className="status-dot" />

                                    <span className="font-mono text-[11px] font-semibold text-[var(--green)]">
                                        Available for internship
                                    </span>
                                </div>

                                <span className="font-mono text-[12px] text-[var(--green)] opacity-70">
                                    {year}
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className={`reveal ${visible ? "visible" : ""} reveal-delay-2`}>
                        <div className="card-glow overflow-hidden">
                            <div className="flex items-center gap-2.5 border-b border-[var(--border)] bg-[var(--surface2)] px-7 py-4">
                                <div className="h-2 w-2 rounded-full bg-[var(--accent-light)] shadow-[0_0_8px_var(--accent-glow)]" />

                                <span className="mono-xs tracking-[0.08em] text-[var(--text-3)]">
                                    send_message.ts
                                </span>
                            </div>

                            <div className="p-8">
                                {status == 'sent' ? (
                                    <div className="px-6 py-12 text-center">
                                        <div className="mx-auto mb-12 flex h-14 w-14 items-center justify-center rounded-2xl border
                                        border-[var(--green-glow)] bg-[var(--green-pale)]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="var(--green)"
                                                strokeWidth="2.5"
                                            >
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                        </div>

                                        <h3 className="h3 mb-2 text-[1.2rem]">
                                            Message sent!
                                        </h3>

                                        <p className="body-sm mb-5">
                                            Thank you for reaching out. I&apos;ll get back
                                            to you shortly.
                                        </p>

                                        <button onClick={() => setStatus('idle')}
                                        className="link-arrow border-0 bg-transparent p-0 cursor-pointer">
                                            Send another message

                                             <svg
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {/* Name + Email */}
                                        <div className="mb-4 grid grid-cols-1 gap-4 min-[769px]:grid-cols-2">
                                            <div>
                                                <label className="mono-xs mb-3 block tracking-[0.1em] text-[var(--text-3)]">
                                                    name
                                                </label>

                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Your name"
                                                    value={form.name}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            name: e.target.value,
                                                        })
                                                    }
                                                    className="input"
                                                />
                                            </div>

                                            <div>
                                                <label className="mono-xs mb-3 block tracking-[0.1em] text-[var(--text-3)]">
                                                    email
                                                </label>

                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="your@email.com"
                                                    value={form.email}
                                                    onChange={(e) =>
                                                        setForm({
                                                            ...form,
                                                            email: e.target.value,
                                                        })
                                                    }
                                                    className="input"
                                                />
                                            </div>
                                        </div>

                                        {/* Subject */}
                                        <div className="mb-4">
                                            <label className="mono-xs mb-3 block tracking-[0.1em] text-[var(--text-3)]">
                                                subject
                                            </label>

                                            <input
                                                type="text"
                                                required
                                                placeholder="What's this about?"
                                                value={form.subject}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        subject: e.target.value,
                                                    })
                                                }
                                                className="input"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="mb-6">
                                            <label className="mono-xs mb-3 block tracking-[0.1em] text-[var(--text-3)]">
                                                message
                                            </label>

                                            <textarea
                                                required
                                                rows={6}
                                                placeholder="Tell me about the opportunity or project you have in mind..."
                                                value={form.message}
                                                onChange={(e) =>
                                                    setForm({
                                                        ...form,
                                                        message: e.target.value,
                                                    })
                                                }
                                                className="input resize-none"
                                            />
                                        </div>

                                        {/* Footer */}
                                        <div className="flex flex-wrap items-center justify-between gap-3">
                                            <span className="mono-xs text-[var(--text-4)]">
                                                {'//'} Reply within 24h
                                            </span>

                                            <button
                                                type="submit"
                                                disabled={status === "sending"}
                                                className="btn btn-primary disabled:cursor-not-allowed disabled:opacity-70"
                                            >
                                                {status === "sending" ? (
                                                    <>
                                                        <svg
                                                            width="13"
                                                            height="13"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                            className="animate-[spin_0.9s_linear_infinite]"
                                                        >
                                                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                                        </svg>

                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message

                                                        <svg
                                                            width="13"
                                                            height="13"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2.5"
                                                        >
                                                            <path d="M22 2 11 13M22 2 15 22 11 13 2 9l20-7z" />
                                                        </svg>
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}