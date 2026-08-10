import type { Metadata } from "next";

export const SITE_NAME = "Josh Arnow";
export const SITE_URL = "https://josharnow.com";
export const SOCIAL_IMAGE_PATH = "/og.png";

const sharedKeywords = [
  "Josh Arnow",
  "full-stack software engineer",
  "software engineer",
  "web developer",
  "mobile app developer",
  "New York",
  "Florida",
];

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const socialTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: [...sharedKeywords, ...keywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE_PATH,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Josh Arnow — Full-Stack Software Engineer",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE_PATH,
          alt: "Josh Arnow — Full-Stack Software Engineer",
        },
      ],
    },
  };
}
