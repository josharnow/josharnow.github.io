import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import 'primeicons/primeicons.css';

import { 
  Navigation, 
  // OldNavigation,
  // Sidebar,
} from "@/src/components";
// import { isMobileDevice, getBrowser, getDevice } from "@/src/utils/device";

import styles from "./styles.module.scss";
// import { classNames } from "@/src/app/_utils";


// TODO - Metadata for each page (https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
export const metadata: Metadata = {
  applicationName: "Josh Arnow's Website", // NOTE - This should be applied on all pages
  title: "About Josh Arnow", // NOTE - This should change depending on what page is being viewed. Same goes for other titles in this metadata object.
  // title: "Josh Arnow's Website", // NOTE - This should change depending on what page is being viewed. Same goes for other titles in this metadata object.
  description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida",
  // description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida.",
  authors: [{name: "Josh Arnow", url: "https://josharnow.com"}],
  creator: "Josh Arnow",
  metadataBase: new URL('https://josharnow.com'),
  generator: "Next.js",
  keywords: ["Josh Arnow", "software engineer", "full stack", "full-stack", "New York", "Florida", "software"], // TODO - Add more relevant keywords. Although it appears that Google doesn't actually look for them (https://developers.google.com/search/docs/crawling-indexing/special-tags)
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: { // NOTE - https://ahrefs.com/blog/open-graph-meta-tags/
    type: "website",
    url: "https://josharnow.com",
    siteName: "Josh Arnow's Website",
    title: "About Josh Arnow",
    // title: "Josh Arnow's Website",
    description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida",
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
    site: "https://josharnow.com",
    creator: "Josh Arnow",
    images: "/open-graph-image.png", // TODO - Make this an image of whatever page is being shared
    description: "Personal website of Josh Arnow, a full stack software engineer based in New York & Florida",
  },
};

// NOTE - I installed this locally despite being available as a Google font because Google doesn't have a variable font version of IBM Plex Sans
const ibmPlexSans = localFont({ 
  src: [
    {
      path: '../assets/fonts/ibm_plex_sans_var_roman.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm_plex_sans_var_italic.woff2',
      style: 'italic',
    }
  ],
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // NOTE - ***This can be passed to components as a prop to affect functionality based on whether the user is on a mobile device or not***
  // NOTE - Attempting to use these functions will result in the following build error: "Server Actions are not supported with static export."
  // const mobile = await isMobileDevice();
  // const browser = await getBrowser();
  // const device = await getDevice();

  // console.log("Mobile device: ", mobile);
  // console.log("Browser: ", browser);
  // console.log("Device: ", device);

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  
  return (
    <html lang="en">
      <body className={ classNames(ibmPlexSans.className, "h-screen") }>
        <div className="flex flex-col sm:flex-row mx-auto w-full h-full">
          <Navigation />
          {/* NOTE - This margin is necessary due to the fixed navbar at the top when the screen is small */}
          <main className={ classNames(styles.main, "sm:grow relative top-20 sm:top-0")}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
