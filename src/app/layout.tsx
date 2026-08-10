import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import 'primeicons/primeicons.css';
// NOTE - https://primereact.org/theming/#themes
// import "primereact/resources/themes/md-dark-deeppurple/theme.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
// import 'primeflex/primeflex.css'

import { 
  Navigation, 
  // OldNavigation,
  // Sidebar,
} from "@/src/components";
// import { isMobileDevice, getBrowser, getDevice } from "@/src/utils/device";

import styles from "./styles.module.scss";
import MotionPreferences from "@/src/components/MotionPreferences";
import { createPageMetadata, SITE_NAME, SITE_URL } from "./metadata";
// import { classNames } from "@/src/app/_utils";


const homeTitle = "Josh Arnow | Full-Stack Software Engineer";
const homeDescription = "Josh Arnow is a full-stack software engineer based in New York and Florida. Explore his experience, portfolio, technical skills, and interactive work.";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: homeTitle,
    description: homeDescription,
    path: "/",
    keywords: ["software portfolio", "cloud engineering", "backend development"],
  }),
  metadataBase: new URL(SITE_URL),
  applicationName: `${SITE_NAME}'s Portfolio`,
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      email: "mailto:contact@josharnow.com",
      jobTitle: "Full-Stack Software Engineer",
      sameAs: [
        "https://github.com/josharnow",
        "https://www.linkedin.com/in/joshuaarnow/",
      ],
      knowsAbout: [
        "Full-stack software development",
        "Web application development",
        "Mobile application development",
        "Cloud computing",
        "Machine learning",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME}'s Portfolio`,
      description: homeDescription,
      inLanguage: "en-US",
      author: {
        "@id": `${SITE_URL}/#person`,
      },
    },
  ],
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={ {
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          } }
        />
      </head>
      <body className={ classNames(ibmPlexSans.className, "h-screen w-screen") }>
        <a href="#main-content" className="fixed left-4 top-4 z-[3000] -translate-y-24 rounded-md bg-white px-4 py-2 font-medium text-black shadow-lg transition-transform focus:translate-y-0">
          Skip to main content
        </a>
        <MotionPreferences>
          <div className="flex flex-col sm:flex-row mx-auto w-full h-full">
            <Navigation />
            {/* NOTE - This margin is necessary due to the fixed navbar at the top when the screen is small */}
            <main
              id="main-content"
              tabIndex={ -1 }
              className={ classNames(styles.main, "relative top-20 sm:top-0 sm:grow bg-black ")}
              style={{ marginLeft: 'var(--sidebar-width, 0px)', maxWidth: 'calc(100vw - var(--sidebar-width, 0px))' }}
            >
              {children}
            </main>
          </div>
        </MotionPreferences>
      </body>
    </html>
  );
}
