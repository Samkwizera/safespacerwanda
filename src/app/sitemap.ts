import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.5,
  }));
}
