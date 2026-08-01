"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { profile } from "@/content/profile";
import { ThemeToggle } from "./ThemeToggle";

const routes = [
  { href: "/", label: "index" },
  { href: "/projects", label: "projects" },
  { href: "/about", label: "about" },
  { href: "/resume", label: "resume" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-5xl items-center gap-4 px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 text-sm text-fg-strong"
        >
          <span className="text-accent">$</span>
          <span className="link-underline">{profile.handle}</span>
        </Link>

        <div className="flex-1" />

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 sm:flex">
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                aria-current={isActive(route.href) ? "page" : undefined}
                className={`px-2.5 py-1 text-[13px] transition-colors ${
                  isActive(route.href)
                    ? "text-accent"
                    : "text-muted hover:text-fg-strong"
                }`}
              >
                <span aria-hidden className="text-line-strong">
                  /
                </span>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>

        <ThemeToggle />

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="flex h-8 w-8 items-center justify-center border border-line text-muted transition-colors hover:text-fg-strong sm:hidden"
        >
          <span aria-hidden className="text-sm leading-none">
            {open ? "×" : "≡"}
          </span>
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul
          id="mobile-nav"
          className="border-t border-line bg-surface px-5 py-2 sm:hidden"
        >
          {routes.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(route.href) ? "page" : undefined}
                className={`block border-b border-line/60 py-3 text-sm last:border-b-0 ${
                  isActive(route.href) ? "text-accent" : "text-fg"
                }`}
              >
                <span aria-hidden className="text-line-strong">
                  /
                </span>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
