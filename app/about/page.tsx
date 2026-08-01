import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ImageFrame } from "@/components/ImageFrame";
import { SpecTable } from "@/components/SpecTable";
import { profile } from "@/content/profile";
import { skills } from "@/content/resume";

export const metadata: Metadata = {
  title: "About",
  description: profile.siteDescription,
};

export default function AboutPage() {
  return (
    <div className="py-14">
      <PageHeader path="~/about" title="About" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* ---------------- BIO ---------------- */}
        <div>
          {profile.bio.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="prose-body mb-5 text-[15px] text-fg"
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-10">
            <h2 className="label mb-4">Toolbox</h2>
            <dl className="space-y-5">
              {skills.map((group) => (
                <div key={group.category}>
                  <dt className="mb-2 text-sm text-fg-strong">
                    <span aria-hidden className="mr-2 text-accent">
                      &#9656;
                    </span>
                    {group.category}
                  </dt>
                  <dd>
                    <ul className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="border border-line px-2.5 py-1 text-[11px] tracking-wide text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* ---------------- SIDEBAR ---------------- */}
        <aside>
          {/* Add a photo: drop it in /public and pass it here.
              e.g. image={{ src: "/me.jpg", alt: "Anna in the shop" }} */}
          <ImageFrame />

          <div className="mt-8">
            <SpecTable
              rows={[
                { label: "Based in", value: profile.location },
                { label: "Focus", value: profile.role },
                { label: "Status", value: profile.status },
              ]}
            />
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-block border border-accent px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Email me &#8594;
          </a>
        </aside>
      </div>
    </div>
  );
}
