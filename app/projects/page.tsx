import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectRow } from "@/components/ProjectRow";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering projects, builds, and design work.",
};

export default function ProjectsPage() {
  return (
    <div className="py-14">
      <PageHeader
        path="~/projects"
        title="Projects"
        intro={
          <p>
            Design work, builds, and things that didn&apos;t work the first
            time. Each one has its own writeup.
          </p>
        }
      />

      {projects.length > 0 ? (
        <>
          <p className="label py-6">
            {projects.length} {projects.length === 1 ? "entry" : "entries"}
          </p>
          <ul className="border-t border-line">
            {projects.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </ul>
        </>
      ) : (
        <p className="py-12 text-sm text-muted">
          No projects yet. Add one in{" "}
          <code className="text-fg-strong">content/projects.ts</code>.
        </p>
      )}
    </div>
  );
}
