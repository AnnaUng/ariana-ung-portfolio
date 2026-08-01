import Image from "next/image";
import type { ProjectImage } from "@/content/projects";

/**
 * Renders a project image inside a framed box. If no image has been added
 * yet, it draws a hatched placeholder instead of a broken image — so a
 * half-finished project page still looks intentional.
 */
export function ImageFrame({
  image,
  priority = false,
}: {
  image?: ProjectImage;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="relative aspect-[16/10] w-full overflow-hidden border border-line bg-surface">
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        ) : (
          <div className="hatch absolute inset-0 flex items-center justify-center">
            <span className="border border-line bg-bg px-3 py-1.5 text-[11px] tracking-widest text-muted">
              NO IMAGE YET
            </span>
          </div>
        )}
      </div>
      {image?.caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted">
          <span aria-hidden className="text-line-strong">
            {"// "}
          </span>
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}
