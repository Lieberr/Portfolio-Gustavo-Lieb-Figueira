interface ProjectChallengesProps {
  project: any;
  accent: string;
  sectionRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
}

export default function ProjectChallenges({
  project,
  accent,
  sectionRef,
  visible,
}: ProjectChallengesProps) {
  return (
    <section
      ref={sectionRef}
      className={`reveal ${visible ? "visible" : ""} py-14`}
    >
      <div className="mx-auto max-w-[1152px] px-8">
        <div className="divider mb-14" />

        <p
          style={{ "--project-accent": accent } as React.CSSProperties}
          className="
            mb-2.5
            font-[var(--font-mono)]
            text-[11px]
            tracking-[0.2em]
            text-[var(--project-accent)]
          "
        >
          06 / Engineering
        </p>

        <h2
          className="
            mb-10
            text-[clamp(1.8rem,3.5vw,2.6rem)]
            font-bold
            tracking-[-0.02em]
            text-[var(--text)]
          "
        >
          Challenges & Solutions
        </h2>

        <div className="flex flex-col gap-5">
          {project.challenges.map((challenge: any) => (
            <div
              key={challenge.num}
              style={{ "--project-accent": accent } as React.CSSProperties}
              className="
                grid grid-cols-2
                overflow-hidden
                rounded-[14px]
                border border-[var(--border)]
                bg-[var(--surface)]
                max-[700px]:grid-cols-1
              "
            >
              {/* Challenge */}
              <div className="border-r border-[var(--border)] p-7 max-[700px]:border-r-0 max-[700px]:border-b">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <span
                    className="
                      font-[var(--font-mono)]
                      text-[10px]
                      font-bold
                      tracking-[0.1em]
                      text-[var(--project-accent)]
                    "
                  >
                    {challenge.num}
                  </span>

                  <span
                    className="
                      font-[var(--font-mono)]
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[var(--text-4)]
                    "
                  >
                    Challenge
                  </span>
                </div>

                <p className="text-sm leading-[1.75] text-[var(--text-2)]">
                  {challenge.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-[color-mix(in_srgb,var(--project-accent)_2%,transparent)] p-7">
                <div className="mb-3.5 flex items-center gap-2.5">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={accent}
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>

                  <span
                    className="
                      font-[var(--font-mono)]
                      text-[9px]
                      uppercase
                      tracking-[0.14em]
                      text-[var(--project-accent)]
                    "
                  >
                    Solution
                  </span>
                </div>

                <p className="text-sm leading-[1.75] text-[var(--text-2)]">
                  {challenge.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Implementation */}
        <div className="mt-12">
          <p
            className="
              mb-5
              font-[var(--font-mono)]
              text-[10px]
              uppercase
              tracking-[0.14em]
              text-[var(--text-4)]
            "
          >
            {"//"} Implementation
          </p>

          <div className="grid grid-cols-3 gap-3 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">
            {project.implementation.map((detail: any) => (
              <div
                key={detail.label}
                className="
                  rounded-[10px]
                  border border-[var(--border)]
                  bg-[var(--surface)]
                  px-5 py-4
                "
              >
                <p
                  className="
                    mb-1.5
                    font-[var(--font-mono)]
                    text-[9px]
                    uppercase
                    tracking-[0.12em]
                    text-[var(--text-4)]
                  "
                >
                  {detail.label}
                </p>

                <p className="text-[13px] font-medium text-[var(--text)]">
                  {detail.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}