"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import globalStyles from '@/src/styles/globals.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  InfiniteMovingCards,
  StickyScrollReveal,
  AnimatedTabs,
  ParallaxScroll,
  Slideshow,
  PortfolioTabContent
} from '@/src/components';

import surrogacyAdvisorScreenshot1 from '@/src/assets/images/surrogacy_advisor_screenshot_1.png';
import surrogacyAdvisorScreenshot2 from '@/src/assets/images/surrogacy_advisor_screenshot_2.png';
import surrogacyAdvisorScreenshot3 from '@/src/assets/images/surrogacy_advisor_screenshot_3.png';
import surrogacyAdvisorScreenshot4 from '@/src/assets/images/surrogacy_advisor_screenshot_4.png';
import segPlusScreenshot1 from '@/src/assets/images/seg_plus_screenshot_1.png';
import cyzlAppStoreScreenshot1 from '@/src/assets/images/cyzl_app_store_screenshot_1.png';
import cyzlPlayStoreScreenshot1 from '@/src/assets/images/cyzl_play_store_screenshot_1.png';

type Content = {
  title: string;
  description: string;
  content?: React.ReactNode | any;
}
type ContentArrContainer = {
  [key: string]: Content[];
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Logo = (src: any) => {
  return (
    <Image
      src={ src as string }
      alt="technology-logo"
      width={ 1000 }
      height={ 1000 }
    // className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};


// TODO - Get images for each project
const tabs = [
  {
    title: "Cyzl",
    value: "cyzl",
    indexOrder: 0,
    content: (
      <PortfolioTabContent
        // imgSrcArr={ [cyzlAppStoreScreenshot1, cyzlPlayStoreScreenshot1] }
        imgSrcArr={ [cyzlAppStoreScreenshot1, cyzlPlayStoreScreenshot1] }
        title="Cyzl"
        slideshowDelay={ 5000 }
        titleHref='https://apps.apple.com/us/app/cyzl/id6448448669'
        // slideshowHrefArr={ ["https://apps.apple.com/us/app/cyzl/id6448448669", "https://play.google.com/store/apps/details?id=app.cyzl.cyzlmobile"] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Worked as team lead to develop this full stack, native, & cross-platform mobile application from the ground up</span>
            <span>•</span><span>Created iPhone & Android apps designed to connect users with restaurants, bars, & clubs in their area</span>
            <div>
              <span>○</span><span>The apps serve as a conduit between venues and potential customers, providing users with a platform to share & interact with other user-generated content while allowing venues to use collected data to directly offer users targeted promotions & relevant notifications</span>
              <span>○</span><span>Written using Vue & Ionic/Capacitor</span>
            </div>
            <span>•</span><span>Built a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Written using Python/Flask</span>
            </div>
            <span>•</span><span>Managed multiple codebases that each serve different roles in the larger system</span>
            <span>•</span><span>Coordinated many AWS cloud services responsible for various backend features such as:</span>
            <div>
              <span>○</span><span>relational databases (RDS)</span>
              <span>○</span><span>data storage (S3)</span>
              <span>○</span><span>media compression & conversion (MediaConvert)</span>
              <span>○</span><span>scalable computing (EC2 / Elastic Beanstalk) for the API & admin portal webapp</span>
            </div>
            <span>•</span><span>Published apps to the Apple App Store & Google Play Store</span>
            <div>
              <span>○</span><span>Maintained separate staging & production environments while facilitating new releases</span>
            </div>
          </div>
        }
      />
    ),
  },
  {
    title: "Sales Empowerment Group",
    // title: "Sales Empowerment Group Plus",

    value: "seg",
    indexOrder: 1,
    content: (
      <PortfolioTabContent
        imgSrcArr={ [segPlusScreenshot1] }

        title="Sales Empowerment Group Plus (SEG+)"
        slideshowDelay={ 5000 }
        titleHref='https://salesempowermentgroup.com'

        // slideshowHrefArr={ ["https://apps.apple.com/us/app/cyzl/id6448448669", "https://play.google.com/store/apps/details?id=app.cyzl.cyzlmobile"] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Developed this enhanced full stack platform, designed to streamline & automate the client’s existing business processes, alongside our internal team</span>
            <div>
              <span>○</span><span>The software is primarily geared towards the client’s business development representatives (BDRs) & aims to realize greater business efficiencies, increase BDR retention, & improve employee engagement</span>
              <span>○</span><span>Written using Python/Flask</span>
            </div>
            <span>•</span><span>Created a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Built using Python/Flask</span>
            </div>
            <span>•</span><span> Enhanced the client’s portfolio with leverageable intellectual property & technology products in the form of the SEG+ software</span>
            <span>•</span><span>Created specialized tools such as a client forms generator & playbook builder to improve the workflow of the client’s sales teams, track their progress, manage their leads, & communicate with each other</span>
          </div>
        }
      />
    ),
  },
  {
    title: "Surrogacy Advisor",
    value: "sad",
    indexOrder: 2,
    content: (
      <PortfolioTabContent
        imgSrcArr={ [""] }
        title="Surrogacy Advisor"
        slideshowDelay={ 5000 }
        titleHref=''
        slideshowHrefArr={ [""] }
        slideshowClassName='h-1/2 rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            {/* <span>•</span><span>Worked as lead developer to build this full stack, native, & cross-platform mobile application from the ground up</span>
            <span>•</span><span>Created iPhone & Android apps designed to connect users with restaurants, bars, & clubs in their area</span>
            <div>
              <span>○</span><span>The apps serve as a conduit between venues and potential customers, providing users with a platform to share & interact with other user-generated content while allowing venues to use collected data to directly offer users targeted promotions & relevant notifications</span>
              <span>○</span><span>Built using Vue & Ionic/Capacitor</span>
            </div>
            <span>•</span><span>Created a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Built using Python/Flask</span>
            </div>
            <span>•</span><span>Managed multiple codebases that each served different roles in the larger system being built</span>
            <span>•</span><span>Coordinated many AWS cloud services responsible for various backend features such as:</span>
            <div>
              <span>○</span><span>relational databases (RDS)</span>
              <span>○</span><span>data storage (S3)</span>
              <span>○</span><span>media compression & conversion (MediaConvert)</span>
              <span>○</span><span>scalable computing (EC2 / Elastic Beanstalk) for the API & admin portal webapp</span>
            </div>
            <span>•</span><span>Published apps to the Apple App Store & Google Play Store</span>
            <div>
              <span>○</span><span>Maintained separate staging & production environments and facilitated new releases</span>
            </div> */}
          </div>
        }
      />
    ),
  },
  {
    title: "Open & Closed Source Contributions",
    value: "contributions",
    indexOrder: 3,
    content: (
      <PortfolioTabContent
        imgSrcArr={ [""] }
        title="Open & Closed Source Contributions"
        slideshowDelay={ 5000 }
        titleHref=''
        slideshowHrefArr={ [""] }
        slideshowClassName='h-1/2 rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            {/* <span>•</span><span>Worked as lead developer to build this full stack, native, & cross-platform mobile application from the ground up</span>
            <span>•</span><span>Created iPhone & Android apps designed to connect users with restaurants, bars, & clubs in their area</span>
            <div>
              <span>○</span><span>The apps serve as a conduit between venues and potential customers, providing users with a platform to share & interact with other user-generated content while allowing venues to use collected data to directly offer users targeted promotions & relevant notifications</span>
              <span>○</span><span>Built using Vue & Ionic/Capacitor</span>
            </div>
            <span>•</span><span>Created a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Built using Python/Flask</span>
            </div>
            <span>•</span><span>Managed multiple codebases that each served different roles in the larger system being built</span>
            <span>•</span><span>Coordinated many AWS cloud services responsible for various backend features such as:</span>
            <div>
              <span>○</span><span>relational databases (RDS)</span>
              <span>○</span><span>data storage (S3)</span>
              <span>○</span><span>media compression & conversion (MediaConvert)</span>
              <span>○</span><span>scalable computing (EC2 / Elastic Beanstalk) for the API & admin portal webapp</span>
            </div>
            <span>•</span><span>Published apps to the Apple App Store & Google Play Store</span>
            <div>
              <span>○</span><span>Maintained separate staging & production environments and facilitated new releases</span>
            </div> */}
          </div>
        }
      />
    ),
  },
  {
    title: "This Website 🚀",
    value: "personal_website",
    indexOrder: 4,
    content: (
      <PortfolioTabContent
        imgSrcArr={ [""] }
        title="This Website 🚀"
        slideshowDelay={ 5000 }
        titleHref=''
        slideshowHrefArr={ [""] }
        slideshowClassName='h-1/2 rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            {/* <span>•</span><span>Worked as lead developer to build this full stack, native, & cross-platform mobile application from the ground up</span>
            <span>•</span><span>Created iPhone & Android apps designed to connect users with restaurants, bars, & clubs in their area</span>
            <div>
              <span>○</span><span>The apps serve as a conduit between venues and potential customers, providing users with a platform to share & interact with other user-generated content while allowing venues to use collected data to directly offer users targeted promotions & relevant notifications</span>
              <span>○</span><span>Built using Vue & Ionic/Capacitor</span>
            </div>
            <span>•</span><span>Created a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Built using Python/Flask</span>
            </div>
            <span>•</span><span>Managed multiple codebases that each served different roles in the larger system being built</span>
            <span>•</span><span>Coordinated many AWS cloud services responsible for various backend features such as:</span>
            <div>
              <span>○</span><span>relational databases (RDS)</span>
              <span>○</span><span>data storage (S3)</span>
              <span>○</span><span>media compression & conversion (MediaConvert)</span>
              <span>○</span><span>scalable computing (EC2 / Elastic Beanstalk) for the API & admin portal webapp</span>
            </div>
            <span>•</span><span>Published apps to the Apple App Store & Google Play Store</span>
            <div>
              <span>○</span><span>Maintained separate staging & production environments and facilitated new releases</span>
            </div> */}
          </div>
        }
      />
    ),
  },
];

export default function PortfolioPage() {

  return (
    <>
      {/* <div className='technologies-page-wrapper h-[calc(100%-9rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'> */ }
      <div className='technologies-page-wrapper h-[calc(100%-5rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'>
        <div className="h-full [perspective:1000px] relative b flex flex-col  mx-auto w-full items-start justify-start">
          {/* TODO - Within AnimatedTabs, on mobile if you click on a tab in the background it should trigger a tab change as if you clicked on the option in the tab bar */ }
          {/* TODO - Implement StickyScrollReveal */ }
          {/* TODO - Implement InfinteScroll (?) */ }



          {/* NOTE - Accounting for switch to mt-36 by changing the subtrahend used in the calculation for .technologies-page-wrapper (4rem difference between mt-36 & mt-20) */ }
          <AnimatedTabs
            tabs={ tabs }
            contentClassName={ cn(
              styles.content,
              'mt-20 sm:mt-20 bg-slate-700 rounded-lg shadow-3xl shadow-blue-500 text-white',
            ) }
            // containerClassName=
            containerClassName={ cn(
              'sm:justify-center gap-2 rounded-full bg-slate-700 self-center p-1 shadow-3xl shadow-blue-500 items-center h-fit'
            ) }
            activeTabClassName={ cn(
              styles.activeTab,
              'bg-blue-500 shadow-3xl',
            ) }
            tabClassName={ cn(
              styles.tabButton,
              "sm:text-lg font-medium h-fit"
            ) }
          />
        </div>
      </div>
    </>
  );
}
