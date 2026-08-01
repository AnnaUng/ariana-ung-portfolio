# anna-portfolio

Personal portfolio built with Next.js, React, and Tailwind CSS. Deployed on Vercel.

---

## Running it locally

```bash
npm install     # only needed the first time, or after pulling changes
npm run dev     # then open http://localhost:3000
```

The page reloads automatically when you save a file. Stop the server with `Ctrl+C`.

> **Note:** the Live Server VS Code extension won't work on this project — there
> are no plain `.html` files to open. Next.js builds the pages itself, so
> `npm run dev` is the way to preview.

Other commands:

| Command         | What it does                                         |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Development server with hot reload                    |
| `npm run build` | Production build — run before pushing big edits       |
| `npm run start` | Serve the production build locally                    |
| `npm run lint`  | Check for code problems                               |

---

## Where to edit things

**You almost never need to touch the code.** Everything that shows up on the
site lives in three files:

| File                  | Controls                                          |
| --------------------- | ------------------------------------------------- |
| `content/profile.ts`  | Name, role, bio, email, social links, site title  |
| `content/projects.ts` | Every project + its detail page                   |
| `content/resume.ts`   | Education, experience, skills, awards             |

Colors, fonts, and spacing live at the top of `app/globals.css` — change the
values under `:root` (dark theme) and `[data-theme="light"]` (light theme) and
the whole site follows.

### Adding a project

Open `content/projects.ts`, copy an existing block, and change it:

```ts
{
  slug: "cnc-fixture-plate",           // becomes /projects/cnc-fixture-plate
  title: "CNC Fixture Plate",
  year: "2026",
  status: "complete",                  // complete | in-progress | concept
  summary: "One or two sentences shown in the project list.",
  tags: ["Fusion 360", "Aluminum", "CNC"],
  featured: true,                      // show it on the home page
  cover: "/projects/fixture-plate.jpg",
  sections: [
    { heading: "The problem", body: ["A paragraph.", "Another paragraph."] },
    { heading: "What I learned", list: ["A bullet.", "Another bullet."] },
  ],
}
```

Only `slug`, `title`, `year`, `status`, `summary`, and `tags` are required.
Leave anything else out and the page adapts — no broken sections.

### Adding images

Put image files in `public/projects/`, then reference them starting with a
slash: a file at `public/projects/gearbox.jpg` becomes `"/projects/gearbox.jpg"`.

If a project has no `cover` yet, the page draws a hatched placeholder box
instead of a broken image, so half-finished pages still look intentional.

### Adding your resume PDF

Drop `resume.pdf` into `public/`, then in `content/profile.ts` change
`resume: null` to `resume: "/resume.pdf"`. A download button appears on
`/resume` automatically.

---

## Deploying to Vercel

**First time:**

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import the repo. Vercel detects Next.js — accept every default and click
   **Deploy**.
4. You get a live URL like `anna-portfolio.vercel.app` in about a minute.

**After that:** every `git push` to `main` deploys automatically. Pushes to any
other branch get their own preview URL, so you can check changes before they go
live.

**Last step:** once you know your real URL, update `siteUrl` in
`content/profile.ts` — it's used for SEO metadata and the sitemap.

---

## Project structure

```
app/
  layout.tsx                nav, footer, fonts, theme script — wraps every page
  page.tsx                  home
  globals.css               design tokens + shared styles
  about/page.tsx
  projects/page.tsx         project index
  projects/[slug]/page.tsx  auto-generates one page per project
  resume/page.tsx
  not-found.tsx             404
  sitemap.ts / robots.ts    SEO, generated automatically
components/                 reusable pieces (Nav, Footer, ProjectRow, ...)
content/                    ← your data lives here
public/                     images, PDFs, anything served as-is
```
