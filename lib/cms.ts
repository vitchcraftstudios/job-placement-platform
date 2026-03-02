import { prisma } from "./prisma";

export type HomepageContent = {
  heroTitle: string;
  heroSubtitle: string;
};

export const defaultHomepageContent: HomepageContent = {
  heroTitle: "Find your next role with a modern placement experience",
  heroSubtitle:
    "A candidate-first platform to discover verified jobs, track applications, and move from profile to offer with transparent updates.",
};

export async function getHomepageContent(): Promise<HomepageContent> {
  try {
    const row = await prisma.siteContent.findUnique({
      where: { key: "homepage" },
    });

    if (!row) return defaultHomepageContent;

    return {
      heroTitle: row.heroTitle,
      heroSubtitle: row.heroSubtitle,
    };
  } catch {
    return defaultHomepageContent;
  }
}

export async function upsertHomepageContent(content: HomepageContent) {
  return prisma.siteContent.upsert({
    where: { key: "homepage" },
    update: content,
    create: {
      key: "homepage",
      ...content,
    },
  });
}
