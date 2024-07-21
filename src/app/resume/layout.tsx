import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Josh Arnow's Résumé", // NOTE - This should change depending on what page is being viewed. Same goes for other titles in this metadata object.
  description: "Software engineer Josh Arnow's résumé",
  keywords: ["Josh Arnow", "software engineer", "full stack", "full-stack", "New York", "Florida", "software", "résumé"], // TODO - Add more relevant keywords. Although it appears that Google doesn't actually look for them (https://developers.google.com/search/docs/crawling-indexing/special-tags)
  // TODO - Take screenshots of page & use below
  openGraph: { // NOTE - https://ahrefs.com/blog/open-graph-meta-tags/
    type: "website",
    url: "https://josharnow.com/resume",
    siteName: "Josh Arnow's Website",
    title: "Josh Arnow's Résumé",
    description: "Software engineer Josh Arnow's résumé",
    images: [
      {
        url: "/open-graph-image.png",
        width: 1200,
        height: 1216,
        alt: "Josh Arnow's Website",
      },
    ],
    emails: ["contact@josharnow.com"],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://josharnow.com/resume",
    creator: "Josh Arnow",
    images: "/open-graph-image.png", // TODO - Make this an image of whatever page is being shared
    description: "Software engineer Josh Arnow's résumé",
  },
};

export default async function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      { children }
    </>
  );
}
