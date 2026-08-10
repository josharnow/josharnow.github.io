import { createPageMetadata } from "../metadata";

export const metadata = createPageMetadata({
  title: "Interactive 3D Demo",
  description: "Explore Josh Arnow's interactive Three.js and React Three Fiber island demo with keyboard and pointer controls.",
  path: "/3d-demo",
  keywords: ["Three.js", "React Three Fiber", "3D web development", "interactive web demo"],
});

export default function ThreeDDemoLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
