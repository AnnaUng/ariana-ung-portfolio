import { profile } from "@/content/profile";

export function Footer() {
  const year = new Date().getFullYear();

  const external = [
    profile.links.github && { label: "github", href: profile.links.github },
    profile.links.linkedin && {
      label: "linkedin",
      href: profile.links.linkedin,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label mb-2">Get in touch</p>
            <a
              href={`mailto:${profile.email}`}
              className="link-underline text-sm text-fg-strong"
            >
              {profile.email}
            </a>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {external.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-sm text-muted hover:text-fg-strong"
                  >
                    {link.label}
                    <span aria-hidden className="ml-1 text-[10px]">
                      &#8599;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] leading-relaxed tracking-wider text-muted">
            &#169; {year} {profile.name}
            <br />
            <span className="text-line-strong">built with next.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
