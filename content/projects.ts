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
  // PROJECT 1
  // ----------------------------------------------------------------
  {
    slug: "GEEN1400-project",
    title: "PeakLink",
    year: "2026",
    status: "complete",
    role: "Engineering Projects Group",
    summary:
      "A watch that keeps you safe in the mountains.",
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
          "As lead programmer, my biggest responsibility was to write the code. At the beginning of the project, I researched the possible components that would work for the device and made sure they were all compatible. From there, I worked on budget management so we could have good quality components while staying within the budget given. I was also responsible for prototyping the circuit using breadboards and testing the compatibility of components once purchased. Once the prototype boards were soldered, I wrote an I2C test to make sure the hardware connections were stable. I consistently worked on the code as the project progressed, improving the aesthetics, functionality, and efficiency. Coding required lots of outdoor testing while making small changes in order to calibrate the distances and the relative direction between the devices. Once everything was manufactured and the code was running, I contributed to testing and analysis by creating a spreadsheet and collecting the data.",
          "At the beginning of the project, I had close to no experience with circuits or programming. Using online resources and artificial intelligence, I was able to teach myself how to program the GPS, compass, LoRa module, and the OLED to work together. I have grown much more comfortable with electronics and using them to build complex systems.",
        ],
        images: [
          {
            src: "/projects/FinalWatch.JPG",
            alt: "Watch at DesignExpo",
            caption: "V1 of the watch at CU Design Expo 2026",
          },
          {
            src: "/projects/Breadboard.JPG",
            alt: "Circuit breadboard prototype",
            caption: "Circuit breadboard prototype used for testing the components and their compatibility.",
          }
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
  // PROJECT 2
  // ----------------------------------------------------------------
  {
    slug: "Design-Technology-Project",
    title: "Controller Display",
    year: "2025",
    status: "complete",
    role: "Solo Project",
    summary:
      "A device to organize and charge electronic components for the Nintendo Switch.",
    tags: ["1-on-1 client work", "CAD", "3D printing"],
    featured: true,
    specs: [
      { label: "Timeline", value: "10 weeks" },
      { label: "Tools", value: "Fusion360, Techsoft" },
      { label: "Materials", value: "PLA, Parawood, Veneer, Stainless Steel" },
    ],
    links: [{ label: "Full Design Process", href: "https://drive.google.com/file/d/1cR9dRF7PsjKK1R_BgCnYQidQPwE8AN5e/view?usp=sharing" }],
    sections: [
      {
        heading: "The problem",
        body: [
          "When gaming, the accumulation of different controllers and their respective charging cables can be a hassle. This project aimed to create a device that organizes and charges all of the controllers for the Nintendo Switch in one place.",
          "My client struggled with disorganization and clutter in his gaming setup, which led to frustration when playing video games."
        ],
      },
      {
        heading: "Design & process",
        body: [
          "The design process began with a client interview to understand the specific needs and preferences of the user. After gathering requirements, I created initial sketches and 3D models using Fusion360. The design was iteratively refined based on feedback from the client.",
          "The final design included a charging dock for the controllers, cable management features, and a sleek aesthetic that matched the client's gaming setup. The device was fabricated using 3D printing and other materials to ensure durability and functionality.",
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
          "3D modeling and design for manufacturing",
          "Client communication and presentation skills.",
          "Time management and project planning.",
        ],
      },
    ],
  },
];

/** Helpers used by the pages — you shouldn't need to touch these. */
export const featuredProjects = () => projects.filter((p) => p.featured);
export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
