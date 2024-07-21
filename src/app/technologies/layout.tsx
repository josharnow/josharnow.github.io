import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Josh's Software Technologies", // NOTE - This should change depending on what page is being viewed. Same goes for other titles in this metadata object.
  description: "Josh Arnow's software technologies",
  keywords: ["Josh Arnow", "software engineer", "full stack", "full-stack", "New York", "Florida", "software", "technologies", "tools"], // TODO - Add more relevant keywords. Although it appears that Google doesn't actually look for them (https://developers.google.com/search/docs/crawling-indexing/special-tags)
  // TODO - Take screenshots of page & use below
  openGraph: { // NOTE - https://ahrefs.com/blog/open-graph-meta-tags/
    type: "website",
    url: "https://josharnow.com/technologies",
    siteName: "Josh Arnow's Website",
    title: "Josh's Software Technologies",
    description: "Josh Arnow's software technologies",
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
    site: "https://josharnow.com/technologies",
    creator: "Josh Arnow",
    images: "/open-graph-image.png", // TODO - Make this an image of whatever page is being shared
    description: "Josh Arnow's software technologies",
  },
};

export default async function TechnologiesLayout({
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
