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
    org: "Your University",
    title: "B.S. Mechanical Engineering",
    period: "2026 — 2030 (expected)",
    location: "City, State",
    points: ["Relevant coursework will go here as you take it."],
  },
  {
    org: "Your High School",
    title: "High School Diploma",
    period: "2022 — 2026",
    location: "City, State",
    points: [
      "GPA, honors, or AP coursework — delete this line if you'd rather not list it.",
      "Clubs and teams: robotics, FIRST, science olympiad, etc.",
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
    items: ["SolidWorks", "Fusion 360", "AutoCAD", "FEA (basic)"],
  },
  {
    category: "Fabrication",
    items: ["3D printing (FDM)", "Laser cutting", "Hand tools", "Soldering"],
  },
  {
    category: "Software",
    items: ["Python", "MATLAB", "Excel", "Git"],
  },
  {
    category: "Other",
    items: ["Technical drawing", "GD&T (learning)", "Arduino"],
  },
];

export const awards: ResumeEntry[] = [
  // {
  //   org: "Competition or Institution",
  //   title: "Award Name",
  //   period: "2025",
  // },
];
