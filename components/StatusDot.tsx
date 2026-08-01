import type { Project } from "@/content/projects";

const config: Record<Project["status"], { color: string; text: string }> = {
  complete: { color: "var(--accent)", text: "complete" },
  "in-progress": { color: "var(--signal)", text: "in progress" },
  concept: { color: "var(--muted)", text: "concept" },
};

export function StatusDot({
  status,
  showLabel = false,
}: {
  status: Project["status"];
  showLabel?: boolean;
}) {
  const { color, text } = config[status];

  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ background: color }}
      />
      <span className={showLabel ? "text-[11px] tracking-wider text-muted" : "sr-only"}>
        {text}
      </span>
    </span>
  );
}
