import type { ReactNode } from "react";

type PageHeaderProps = {
  /** The small path shown above the title, e.g. "~/projects" */
  path: string;
  title: string;
  intro?: ReactNode;
};

export function PageHeader({ path, title, intro }: PageHeaderProps) {
  return (
    <header className="border-b border-line pb-8">
      <p className="mb-4 text-xs tracking-widest text-muted">
        <span className="text-accent">$</span> cd {path}
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-fg-strong sm:text-4xl">
        {title}
      </h1>
      {intro && (
        <div className="prose-body mt-4 max-w-2xl text-[15px] text-muted">
          {intro}
        </div>
      )}
    </header>
  );
}
