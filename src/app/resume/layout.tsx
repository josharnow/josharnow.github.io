import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Résumé",
  description: "View or download the résumé of Josh Arnow, a full-stack software engineer with experience across mobile, web, cloud, and backend systems.",
  path: "/resume",
  keywords: ["résumé", "software engineer experience", "full-stack developer résumé"],
});

export default function ResumeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
