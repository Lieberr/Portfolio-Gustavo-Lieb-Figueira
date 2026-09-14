import Link from "next/link";

interface ProjectNavigationProps {
  prev: any;
  next: any;
}

export default function ProjectNavigation({
  prev,
  next,
}: ProjectNavigationProps) {
  return (
    <section className="pb-20">
      <div className="mx-auto max-w-[1152px] px-8">
        <div className="divider mb-10" />

        <div className="grid grid-cols-2 gap-4 max-[700px]:grid-cols-1">
          {/* Previous */}
          {prev ? (
            <Link
              href={`/projects/${prev.id}`}
              className="no-underline"
            >
              <div
                style={{
                  "--project-accent": prev.accent,
                } as React.CSSProperties}
                className="
                  rounded-[14px]
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-7 py-6
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[var(--project-accent)]
                "
              >
                <div className="mb-2.5 flex items-center gap-1.5">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-4)"
                    strokeWidth="2"
                  >
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>

                  <span
                    className="
                      font-[var(--font-mono)]
                      text-[10px]
                      tracking-[0.1em]
                      text-[var(--text-4)]
                    "
                  >
                    PREVIOUS
                  </span>
                </div>

                <p
                  className="
                    mb-1
                    font-[var(--font-mono)]
                    text-[10px]
                    text-[var(--project-accent)]
                  "
                >
                  {prev.num} / {prev.tag}
                </p>

                <p className="text-[17px] font-bold text-[var(--text)]">
                  {prev.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {next ? (
            <Link
              href={`/projects/${next.id}`}
              className="no-underline"
            >
              <div
                style={{
                  "--project-accent": next.accent,
                } as React.CSSProperties}
                className="
                  rounded-[14px]
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-7 py-6
                  text-right
                  transition
                  duration-200
                  hover:-translate-y-0.5
                  hover:border-[var(--project-accent)]
                "
              >
                <div className="mb-2.5 flex items-center justify-end gap-1.5">
                  <span
                    className="
                      font-[var(--font-mono)]
                      text-[10px]
                      tracking-[0.1em]
                      text-[var(--text-4)]
                    "
                  >
                    NEXT
                  </span>

                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--text-4)"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>

                <p
                  className="
                    mb-1
                    font-[var(--font-mono)]
                    text-[10px]
                    text-[var(--project-accent)]
                  "
                >
                  {next.num} / {next.tag}
                </p>

                <p className="text-[17px] font-bold text-[var(--text)]">
                  {next.title}
                </p>
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}