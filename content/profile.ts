/**
 * ============================================================
 *  YOUR INFO — edit this file to change your name, bio, links.
 *  Everything on the site reads from here.
 * ============================================================
 */

export type Profile = {
  name: string;
  handle: string;
  role: string;
  taglines: string[];
  location: string;
  status: string;
  bio: string[];
  email: string;
  links: {
    github: string | null;
    linkedin: string | null;
    resume: string | null;
  };
  siteUrl: string;
  siteDescription: string;
};

export const profile: Profile = {
  name: "Anna Ungrangsee",
  // Shown small above your name on the home page
  handle: "anna.ungrangsee",
  // One line under your name
  role: "Mechanical Engineering",
  // The rotating/typed line on the home page. Add or remove freely.
  taglines: [
    "designing things that move",
    "CAD, fabrication, and first principles",
    "incoming mechanical engineering student",
  ],
  location: "Colorado, USA",
  // Short "what I'm doing right now" — shows in the home page spec table
  status: "Incoming freshman — open to internships & project collaborations",

  // The paragraph(s) on the About page
  bio: [
    "I'm a mechanical engineering student who likes taking things apart to figure out why they work. Most of what I build starts as a sketch on graph paper, becomes a CAD model, and ends up as something I can hold.",
    "This site is where I keep my projects — design files, build photos, what went wrong, and what I'd do differently. It'll fill up as I go.",
  ],

  email: "you@example.com",
  // Set any of these to null (or delete the line) and the link disappears.
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // Drop a resume.pdf into /public, then change this to "/resume.pdf"
    resume: null,
  },

  // Site metadata — update once you have a real domain
  siteUrl: "https://anna-portfolio.vercel.app",
  siteDescription:
    "Portfolio of Anna Ungrangsee — mechanical engineering projects, CAD work, and builds.",
};
