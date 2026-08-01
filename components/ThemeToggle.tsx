"use client";

import { useCallback, useSyncExternalStore } from "react";

type Theme = "dark" | "light";

/**
 * The theme actually lives on <html data-theme="...">, which the inline
 * script in layout.tsx sets before first paint. This component subscribes
 * to that value rather than keeping its own copy, so there's no flash
 * and no hydration mismatch.
 */
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => {
    listeners.delete(onChange);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

// What the server renders. Matches the default on <html> in layout.tsx.
function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback(() => {
    const next: Theme =
      document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private browsing / storage disabled — still works for this visit.
    }
    listeners.forEach((notify) => notify());
  }, []);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className="flex h-8 items-center gap-2 border border-line px-2.5 text-[11px] tracking-widest text-muted transition-colors hover:border-line-strong hover:text-fg-strong"
    >
      <span
        aria-hidden
        className="inline-block h-2 w-2 rounded-full"
        style={{
          background: "var(--accent)",
          boxShadow: "0 0 8px var(--accent)",
        }}
      />
      <span className="tabular-nums">{theme.toUpperCase()}</span>
    </button>
  );
}
