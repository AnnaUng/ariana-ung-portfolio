"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 2200;

/**
 * Types out each line, pauses, deletes it, moves to the next.
 * The first line renders as plain text on the server so there's no
 * layout jump, and it stays frozen there if the visitor prefers
 * reduced motion or there's only one line.
 */
export function Typed({ lines }: { lines: readonly string[] }) {
  const [text, setText] = useState(lines[0] ?? "");

  useEffect(() => {
    if (lines.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let lineIndex = 0;
    let charIndex = lines[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        charIndex -= 1;
        if (charIndex <= 0) {
          deleting = false;
          lineIndex = (lineIndex + 1) % lines.length;
        }
      } else {
        charIndex += 1;
        if (charIndex >= lines[lineIndex].length) {
          deleting = true;
          setText(lines[lineIndex]);
          timer = setTimeout(tick, HOLD_MS);
          return;
        }
      }

      setText(lines[lineIndex].slice(0, Math.max(charIndex, 0)));
      timer = setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
    };

    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, [lines]);

  return (
    <span className="cursor" aria-live="off">
      {text}
    </span>
  );
}
