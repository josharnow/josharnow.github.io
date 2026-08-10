import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Career & Education Timeline",
  description: "Explore Josh Arnow's professional experience and education, from software engineering roles and shipped products to graduate study and research.",
  path: "/career-and-education-timeline",
  keywords: ["software engineering career", "professional experience", "computer science education"],
});

export default function CareerAndEducationTimelineLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
