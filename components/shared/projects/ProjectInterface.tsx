import ScreenPlaceholder from "./ScreenPlaceholder";

interface ProjectInterfaceProps {
  accent: string;
  sectionRef: React.RefObject<HTMLElement | null>;
  visible: boolean;
}

export default function ProjectInterface({
  accent,
  sectionRef,
  visible,
}: ProjectInterfaceProps) {
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
          05 / Interface
        </p>

        <h2
          className="
            mb-9
            text-[clamp(1.8rem,3.5vw,2.6rem)]
            font-bold
            tracking-[-0.02em]
            text-[var(--text)]
          "
        >
          Inside the project
        </h2>

        <div className="mb-3.5 grid grid-cols-[3fr_2fr] gap-3.5 max-[900px]:grid-cols-1">
          <ScreenPlaceholder
            accent={accent}
            label="Main Interface"
            large
          />

          <div className="flex flex-col gap-3.5">
            <ScreenPlaceholder
              accent={accent}
              label="Dashboard View"
            />

            <ScreenPlaceholder
              accent={accent}
              label="Detail View"
            />
          </div>
        </div>

        <ScreenPlaceholder
          accent={accent}
          label="Full Overview"
          large
        />
      </div>
    </section>
  );
}