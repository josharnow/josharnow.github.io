import type { MetadataRoute } from "next";
import { SITE_URL } from "./metadata";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/portfolio", changeFrequency: "monthly", priority: 0.9 },
  { path: "/career-and-education-timeline", changeFrequency: "yearly", priority: 0.8 },
  { path: "/technologies", changeFrequency: "monthly", priority: 0.8 },
  { path: "/resume", changeFrequency: "monthly", priority: 0.9 },
  { path: "/masters-thesis", changeFrequency: "yearly", priority: 0.6 },
  { path: "/3d-demo", changeFrequency: "monthly", priority: 0.6 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, SITE_URL).toString(),
    changeFrequency,
    priority,
  }));
}
