import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusDot } from "./StatusDot";

/**
 * One line item in the numbered project list.
 * Used on both the home page and /projects.
 */
export function ProjectRow({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <li className="group border-b border-line">
      <Link
        href={`/projects/${project.slug}`}
        className="flex flex-col gap-3 py-6 transition-colors sm:flex-row sm:gap-8"
      >
        <span className="label shrink-0 pt-1 tabular-nums sm:w-12">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-3">
            <h3 className="text-lg text-fg-strong transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            <StatusDot status={project.status} />
          </div>

          <p className="prose-body mt-2 max-w-xl text-sm text-muted">
            {project.summary}
          </p>

          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="border border-line px-2 py-0.5 text-[11px] tracking-wide text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex shrink-0 items-start gap-4 sm:flex-col sm:items-end sm:gap-2">
          <span className="text-sm tabular-nums text-muted">{project.year}</span>
          <span
            aria-hidden
            className="text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
          >
            &#8594;
          </span>
        </div>
      </Link>
    </li>
  );
}
