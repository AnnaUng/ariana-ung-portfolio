import type { MetadataRoute } from "next";
import { profile } from "@/content/profile";
import { projects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl.replace(/\/$/, "");
  const pages = ["", "/projects", "/about", "/resume"];

  return [
    ...pages.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${base}/projects/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
