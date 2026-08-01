import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageFrame } from "@/components/ImageFrame";
import { SpecTable } from "@/components/SpecTable";
import { StatusDot } from "@/components/StatusDot";
import { getProject, projects } from "@/content/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Pre-renders one static page per project at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: project.cover ? [project.cover] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[index + 1];

  return (
    <article className="py-14">
      <Link
        href="/projects"
        className="link-underline text-xs tracking-widest text-muted hover:text-fg-strong"
      >
        &#8592; all projects
      </Link>

      {/* ---------------- HEADER ---------------- */}
      <header className="mt-8 border-b border-line pb-8">
        <div className="flex flex-wrap items-center gap-4 text-xs tracking-widest text-muted">
          <span className="tabular-nums">{project.year}</span>
          <StatusDot status={project.status} showLabel />
        </div>

        <h1 className="mt-4 text-3xl font-medium tracking-tight text-fg-strong sm:text-5xl">
          {project.title}
        </h1>

        <p className="prose-body mt-5 max-w-2xl text-base text-muted">
          {project.summary}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2.5 py-1 text-[11px] tracking-wide text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {/* ---------------- COVER ---------------- */}
      <div className="mt-10">
        <ImageFrame
          image={
            project.cover
              ? { src: project.cover, alt: `${project.title} cover image` }
              : undefined
          }
          priority
        />
      </div>

      {/* ---------------- SPECS + LINKS ---------------- */}
      {(project.specs?.length || project.role || project.links?.length) && (
        <div className="mt-12 max-w-xl">
          <SpecTable
            rows={[
              ...(project.role ? [{ label: "Role", value: project.role }] : []),
              ...(project.specs ?? []),
            ]}
          />

          {project.links && project.links.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                >
                  {link.label}
                  <span aria-hidden className="ml-1.5 text-[10px]">
                    &#8599;
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ---------------- BODY ---------------- */}
      {project.sections?.map((section, i) => (
        <section key={section.heading} className="mt-16 max-w-2xl">
          <h2 className="flex items-baseline gap-3 border-b border-line pb-3 text-lg text-fg-strong">
            <span className="label tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            {section.heading}
          </h2>

          {section.body?.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="prose-body mt-5 text-[15px] text-fg"
            >
              {paragraph}
            </p>
          ))}

          {section.list && (
            <ul className="mt-5 space-y-2.5">
              {section.list.map((item) => (
                <li
                  key={item}
                  className="prose-body flex gap-3 text-[15px] text-fg"
                >
                  <span aria-hidden className="mt-0.5 shrink-0 text-accent">
                    &#8250;
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          )}

          {section.images && section.images.length > 0 && (
            <div className="mt-8 space-y-8">
              {section.images.map((image) => (
                <ImageFrame key={image.src} image={image} />
              ))}
            </div>
          )}
        </section>
      ))}

      {/* ---------------- NEXT PROJECT ---------------- */}
      {next && (
        <nav className="mt-24 border-t border-line pt-8">
          <p className="label mb-2">Next project</p>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-baseline justify-between gap-4"
          >
            <span className="text-xl text-fg-strong transition-colors group-hover:text-accent">
              {next.title}
            </span>
            <span
              aria-hidden
              className="text-muted transition-transform group-hover:translate-x-1"
            >
              &#8594;
            </span>
          </Link>
        </nav>
      )}
    </article>
  );
}
