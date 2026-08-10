import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Software Portfolio",
  description: "Explore Josh Arnow's full-stack software portfolio, including mobile apps, web platforms, cloud systems, and open-source contributions.",
  path: "/portfolio",
  keywords: ["software projects", "mobile applications", "web applications", "cloud systems", "open source"],
});

export default function PortfolioLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
