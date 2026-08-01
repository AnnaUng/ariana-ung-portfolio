/**
 * ============================================================
 *  PROJECTS — add a project by copying one block and editing it.
 *  Order in this array = order on the site (top = newest).
 * ============================================================
 *
 *  Required: slug, title, year, summary, tags
 *  Everything else is optional — leave it out and the page adapts.
 *
 *  Images: drop files in /public/projects/ and reference them as
 *  "/projects/my-photo.jpg". Leave `cover` out and you get a
 *  placeholder block instead of a broken image.
 */

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectSection = {
  heading: string;
  body?: string[];
  list?: string[];
  images?: ProjectImage[];
};

export type Project = {
  /** URL of the project page: /projects/<slug> — lowercase, dashes only */
  slug: string;
  title: string;
  year: string;
  /** Drives the colored status dot */
  status: "complete" | "in-progress" | "concept";
  /** e.g. "Solo project", "Team of 4 — mechanical lead" */
  role?: string;
  /** One or two sentences. Shown on the projects index. */
  summary: string;
  /** Short keywords: tools, methods, materials */
  tags: string[];
  /** Show on the home page? Keep this to your best 3. */
  featured?: boolean;
  cover?: string;
  /** The spec table at the top of the project page */
  specs?: { label: string; value: string }[];
  /** Buttons: repo, CAD files, writeup, video */
  links?: ProjectLink[];
  /** The body of the project page, in order */
  sections?: ProjectSection[];
};

export const projects: Project[] = [
  // ----------------------------------------------------------------
  // EXAMPLE 1 — delete this once you have a real project to put here.
  // ----------------------------------------------------------------
  {
    slug: "example-project",
    title: "Example Project",
    year: "2026",
    status: "concept",
    role: "Solo project",
    summary:
      "This is a placeholder so you can see the layout. Copy this block, change the slug and the words, and you have a new project page.",
    tags: ["Fusion 360", "3D printing", "Placeholder"],
    featured: true,
    specs: [
      { label: "Timeline", value: "4 weeks" },
      { label: "Tools", value: "Fusion 360, Prusa MK4" },
      { label: "Materials", value: "PLA, 6061 aluminum" },
    ],
    links: [{ label: "View files", href: "https://example.com" }],
    sections: [
      {
        heading: "The problem",
        body: [
          "Start with what you were trying to solve and why it mattered. One or two short paragraphs is plenty — this is the part people actually read.",
          "Each string in this list becomes its own paragraph.",
        ],
      },
      {
        heading: "Design & process",
        body: [
          "Walk through how you approached it. Sketches, calculations, iterations, the version that failed.",
        ],
        images: [
          // {
          //   src: "/projects/sketch.jpg",
          //   alt: "Initial hand sketch of the mechanism",
          //   caption: "First pass, before the linkage got redesigned.",
          // },
        ],
      },
      {
        heading: "What I learned",
        list: [
          "Use a list when you have short takeaways rather than prose.",
          "Delete any section you don't need — the page just skips it.",
          "Be specific: numbers, tolerances, failure modes.",
        ],
      },
    ],
  },

  // ----------------------------------------------------------------
  // EXAMPLE 2 — a minimal project, showing how little is required.
  // ----------------------------------------------------------------
  {
    slug: "second-example",
    title: "Second Example",
    year: "2025",
    status: "complete",
    summary:
      "A project with only the required fields filled in. It still gets a working page — just a shorter one.",
    tags: ["CAD", "Machining"],
  },
];

/** Helpers used by the pages — you shouldn't need to touch these. */
export const featuredProjects = () => projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
