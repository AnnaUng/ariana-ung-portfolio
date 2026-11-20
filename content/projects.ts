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
    title: "PeakLink",
    year: "2026",
    status: "concept",
    role: "Engineering Projects Group",
    summary:
      "This is a placeholder so you can see the layout. Copy this block, change the slug and the words, and you have a new project page.",
    tags: ["ESP32", "3D printing", "Arduino", "Programming"],
    featured: true,
    specs: [
      { label: "Timeline", value: "8 weeks" },
      { label: "Tools", value: "Aduino IDE, SolidWorks, ChatGPT" },
      { label: "Materials", value: "PLA" },
    ],
    links: [{ label: "View files", href: "https://example.com" }],
    sections: [
      {
        heading: "The problem",
        body: [
          "As fans of outdoor sports, my team and I wanted to solve the problem faced by many snowboarders, skiers, and mountain bikers. There is often a skill gap between friends and family who participate in these activities together. This can lead to people being left behind on the mountains with no way of finding each other.",
          "Our target user group was people who love the outdoors but also prioritize safety. It could be used by friends as well as families who want to keep track of their children.",
        ],
      },
      {
        heading: "Design & process",
        body: [
          "The solution to this problem was PeakLink: paired watches that use GPS and compasses to calculate the relative distance and direction between users. By looking at their wrist, the user can see how far their friends are from them and they are shown which direction they should turn with an arrow. The arrow direction updates 5 times a second. This way, as they turn to face the correct direction, the watch confirms their rotation in real time. To reduce more risk, there is no need for cell service when using our project. The use of radio waves facilitates communication between watches. This also reduces the need for phones when outdoors.",
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
          "How to use GPS and Compass data in order to calculate different values.",
          "Real-World budget management",
          "Team management and work delegation.",
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
