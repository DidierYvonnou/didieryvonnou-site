import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://didieryvonnou.fr";

  const articles = [
    "pourquoi-ralentir",
    "revenir-a-soi",
    "paix-interieur",
    "ancrage",
    "relations",
    "emotions",
  ];

  const articleUrls = articles.map((slug) => ({
    url: `${baseUrl}/reflexions/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${baseUrl}/reflexions`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },

    ...articleUrls,

    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/reseaux`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },

    {
      url: `${baseUrl}/newsletter`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}