import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-center py-32">
      <p className="text-xs tracking-widest text-muted">
        <span className="text-signal">$</span> cat page
      </p>
      <h1 className="mt-4 text-4xl font-medium tracking-tight text-fg-strong">
        404
      </h1>
      <p className="mt-3 text-sm text-muted">
        No such file or directory.
      </p>
      <Link
        href="/"
        className="mt-8 border border-accent px-5 py-2.5 text-sm text-accent transition-colors hover:bg-accent hover:text-bg"
      >
        &#8592; Back home
      </Link>
    </div>
  );
}
