import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Technologies",
  description: "Browse the languages, frameworks, databases, cloud services, APIs, and developer tools Josh Arnow uses to build full-stack software.",
  path: "/technologies",
  keywords: ["programming languages", "frameworks", "databases", "cloud services", "developer tools"],
});

export default function TechnologiesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
