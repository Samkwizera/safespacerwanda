import type { MetadataRoute } from "next";
import { resources } from "@/content/resources";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/programs", "/community", "/resources", "/get-involved", "/contact", "/privacy", "/terms"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...resources.map((r) => ({ url: `${site.url}/resources/${r.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
