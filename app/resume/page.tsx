import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { profile } from "@/content/profile";
import { awards, education, experience, skills } from "@/content/resume";
import type { ResumeEntry } from "@/content/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${profile.name} — ${profile.role}.`,
};

function EntryList({ entries }: { entries: ResumeEntry[] }) {
  return (
    <ol className="space-y-8">
      {entries.map((entry) => (
        <li key={`${entry.org}-${entry.title}`}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <h3 className="text-base text-fg-strong">{entry.title}</h3>
            <span className="shrink-0 text-xs tracking-wider text-muted">
              {entry.period}
            </span>
          </div>

          <p className="mt-1 text-sm text-accent">
            {entry.org}
            {entry.location && (
              <span className="text-muted"> &#183; {entry.location}</span>
            )}
          </p>

          {entry.points && entry.points.length > 0 && (
            <ul className="mt-3 space-y-2">
              {entry.points.map((point) => (
                <li
                  key={point}
                  className="prose-body flex gap-3 text-sm text-fg"
                >
                  <span aria-hidden className="mt-0.5 shrink-0 text-line-strong">
                    &#8212;
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line pt-8">
      <h2 className="label mb-6">{title}</h2>
      {children}
    </section>
  );
}

export default function ResumePage() {
  return (
    <div className="py-14">
      <PageHeader
        path="~/resume"
        title="Resume"
        intro={
          <p>
            The short version. Full PDF available on request — or grab it below
            once it&apos;s posted.
          </p>
        }
      />

      {profile.links.resume && (
        <a
          href={profile.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block border border-accent px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
        >
          Download PDF &#8595;
        </a>
      )}

      <div className="mt-12 max-w-3xl space-y-12">
        {education.length > 0 && (
          <Section title="Education">
            <EntryList entries={education} />
          </Section>
        )}

        {experience.length > 0 && (
          <Section title="Experience">
            <EntryList entries={experience} />
          </Section>
        )}

        {skills.length > 0 && (
          <Section title="Skills">
            <dl className="grid gap-6 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.category}>
                  <dt className="mb-2 text-sm text-fg-strong">
                    {group.category}
                  </dt>
                  <dd className="prose-body text-sm text-muted">
                    {group.items.join(", ")}
                  </dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        {awards.length > 0 && (
          <Section title="Awards">
            <EntryList entries={awards} />
          </Section>
        )}
      </div>
    </div>
  );
}
