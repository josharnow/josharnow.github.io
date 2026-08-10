import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Master's Thesis: OmniFusion",
  description: "Read Josh Arnow's master's thesis, OmniFusion: A Hybrid Deep Learning Foundation Model for Skin Cancer Diagnostics.",
  path: "/masters-thesis",
  keywords: ["OmniFusion", "master's thesis", "deep learning", "skin cancer diagnostics", "machine learning research"],
});

export default function MastersThesisLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
