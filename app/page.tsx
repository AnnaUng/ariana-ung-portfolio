import Link from "next/link";
import { Typed } from "@/components/Typed";
import { SpecTable } from "@/components/SpecTable";
import { ProjectRow } from "@/components/ProjectRow";
import { profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";

export default function HomePage() {
  const featured = featuredProjects();
  // If nothing is marked `featured`, fall back to the three most recent.
  const shown = featured.length > 0 ? featured : projects.slice(0, 3);

  return (
    <>
      {/* ---------------- HERO ---------------- */}
      <section className="border-b border-line py-20 sm:py-28">
        <p className="mb-6 text-xs tracking-widest text-muted">
          <span className="text-accent">$</span> whoami
        </p>

        <h1 className="text-4xl font-medium leading-[1.05] tracking-tight text-fg-strong sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg text-accent sm:text-xl">{profile.role}</p>

        <p className="mt-8 min-h-7 text-sm text-muted sm:text-base">
          <span aria-hidden className="mr-2 text-line-strong">
            &gt;
          </span>
          <Typed lines={profile.taglines} />
        </p>

        <div className="mt-12 max-w-xl">
          <SpecTable
            rows={[
              { label: "Location", value: profile.location },
              { label: "Status", value: profile.status },
              { label: "Contact", value: profile.email },
            ]}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="border border-accent px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            View projects &#8594;
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="border border-line px-5 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg-strong"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* ---------------- SELECTED WORK ---------------- */}
      <section className="py-16">
        <div className="mb-2 flex items-baseline justify-between">
          <h2 className="label">Selected work</h2>
          <Link
            href="/projects"
            className="link-underline text-xs text-muted hover:text-fg-strong"
          >
            all projects &#8594;
          </Link>
        </div>

        {shown.length > 0 ? (
          <ul className="border-t border-line">
            {shown.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </ul>
        ) : (
          <p className="border-y border-line py-8 text-sm text-muted">
            Nothing here yet — projects get added in{" "}
            <code className="text-fg-strong">content/projects.ts</code>.
          </p>
        )}
      </section>
    </>
  );
}
