/**
 * ============================================================
 *  RESUME — everything on /resume comes from this file.
 *  Delete any section you don't have yet; the page skips it.
 * ============================================================
 */

export type ResumeEntry = {
  /** School, company, or organization */
  org: string;
  /** Degree, job title, or role */
  title: string;
  /** e.g. "2026 — present" or "Summer 2025" */
  period: string;
  location?: string;
  /** Bullet points. Lead with the verb: "Designed…", "Machined…" */
  points?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export const education: ResumeEntry[] = [
  {
    org: "University of Colorado Boulder",
    title: "B.S. Mechanical Engineering",
    period: "2026 — 2030 (expected)",
    location: "Boulder, CO",
    points: ["Relevant coursework will go here as you take it."],
  },
  {
    org: "Shrewsbury International School Bangkok",
    title: "High School Diploma",
    period: "2011 — 2026",
    location: "Bangkok, Thailand",
    points: [
      "4.0 GPA — Academic Scholar",
      "Leadership roles: House Captain, Varsity Volleyball Captain, Community Engagement Prefect",
      "Clubs and Teams: Varsity Volleyball, Senior Orchestra, Senior Percussion Ensemble",
    ],
  },
];

export const experience: ResumeEntry[] = [
  {
    org: "Organization Name",
    title: "Your Role",
    period: "Summer 2025",
    location: "City, State",
    points: [
      "What you actually did, with a number in it if you can manage one.",
      "Add or remove bullets freely.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "CAD & Analysis",
    items: ["SolidWorks (learning)", "Fusion 360", "AutoCAD"],
  },
  {
    category: "Fabrication",
    items: ["3D printing", "Laser cutting", "Hand tools", "Soldering"],
  },
  {
    category: "Software",
    items: ["MATLAB (learning)", "Excel", "Git"],
  },
  {
    category: "Other",
    items: ["Technical drawing", "Arduino (learning)"],
  },
];

export const awards: ResumeEntry[] = [
  // {
  //   org: "Competition or Institution",
  //   title: "Award Name",
  //   period: "2025",
  // },
];
