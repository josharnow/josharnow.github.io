"use client";
import React from 'react';
import styles from './styles.module.scss';
import globalStyles from '@/src/styles/globals.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  AnimatedTabs,
  PortfolioTabContent
} from '@/src/components';

import surrogacyAdvisorScreenshot1 from '@/src/assets/images/surrogacy_advisor_screenshot_1.png';
import surrogacyAdvisorScreenshot2 from '@/src/assets/images/surrogacy_advisor_screenshot_2.png';
import surrogacyAdvisorScreenshot3 from '@/src/assets/images/surrogacy_advisor_screenshot_3.png';
import surrogacyAdvisorScreenshot4 from '@/src/assets/images/surrogacy_advisor_screenshot_4.png';
import surrogacyAdvisorScreenshot5 from '@/src/assets/images/surrogacy_advisor_screenshot_5.png';
import segPlusScreenshot1 from '@/src/assets/images/seg_plus_screenshot_1.png';
import cyzlAppStoreScreenshot1 from '@/src/assets/images/cyzl_app_store_screenshot_1.png';
import cyzlPlayStoreScreenshot1 from '@/src/assets/images/cyzl_play_store_screenshot_1.png';
import cyzlScreenshot1 from '@/src/assets/images/cyzl_screenshot_1.png';
import cyzlScreenshot2 from '@/src/assets/images/cyzl_screenshot_2.png';
import cyzlScreenshot3 from '@/src/assets/images/cyzl_screenshot_3.png';
import cyzlScreenshot4 from '@/src/assets/images/cyzl_screenshot_4.png';
import contributionsScreenshot1 from '@/src/assets/images/contributions_screenshot_1.png';
import contributionsScreenshot2 from '@/src/assets/images/contributions_screenshot_2.png';
import personalSiteScreenshot1 from '@/src/assets/images/personal_site_screenshot_1.png';
import personalSiteScreenshot2 from '@/src/assets/images/personal_site_screenshot_2.png';
import personalSiteScreenshot3 from '@/src/assets/images/personal_site_screenshot_3.png';
import personalSiteScreenshot4 from '@/src/assets/images/personal_site_screenshot_4.png';
import personalSiteScreenshot5 from '@/src/assets/images/personal_site_screenshot_5.png';
import personalSiteScreenshot6 from '@/src/assets/images/personal_site_screenshot_6.png';
import personalSiteScreenshot7 from '@/src/assets/images/personal_site_screenshot_7.png';


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


// TODO - Get images for each project
const tabs = [
  {
    title: "Cyzl",
    value: "cyzl",
    indexOrder: 0,
    content: (
      <PortfolioTabContent
        // imgSrcArr={ [cyzlAppStoreScreenshot1, cyzlPlayStoreScreenshot1] }
        imgSrcArr={ [cyzlScreenshot1, cyzlScreenshot2, cyzlScreenshot3, cyzlScreenshot4,cyzlAppStoreScreenshot1, cyzlPlayStoreScreenshot1] }
        title="Cyzl"
        slideshowDelay={ 5000 }
        titleHref='https://apps.apple.com/us/app/cyzl/id6448448669'
        // slideshowHrefArr={ ["https://apps.apple.com/us/app/cyzl/id6448448669", "https://play.google.com/store/apps/details?id=app.cyzl.cyzlmobile"] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Worked as team lead to develop this full stack, native, and cross-platform mobile application from the ground up</span>
            <span>•</span><span>Created iPhone & Android apps designed to connect users with restaurants, bars, and clubs in their area</span>
            <div>
              <span>○</span><span>The apps serve as a conduit between venues & potential customers, providing users with a platform to share & interact with other user-generated content while allowing venues to use collected data to directly offer users targeted promotions & relevant notifications</span>
              <span>○</span><span>Written using Vue & Ionic/Capacitor (TypeScript)</span>
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
              <span>○</span><span>The software is primarily geared towards the client’s business development representatives (BDRs) & aims to realize greater business efficiencies, increase BDR retention, and improve employee engagement</span>
              <span>○</span><span>Written using Python/Flask</span>
            </div>
            <span>•</span><span>Created a venue portal webapp for admins to control various aspects of their business within the system</span>
            <div>
              <span>○</span><span>Built using Python/Flask</span>
            </div>
            <span>•</span><span> Enhanced the client’s portfolio with leverageable intellectual property & technology products in the form of the SEG+ software</span>
            <span>•</span><span>Created specialized tools such as a client forms generator & playbook builder to improve the workflow of the client’s sales teams, track their progress, manage their leads, and communicate with each other</span>
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
        imgSrcArr={ [surrogacyAdvisorScreenshot1, surrogacyAdvisorScreenshot2, surrogacyAdvisorScreenshot3, surrogacyAdvisorScreenshot4, surrogacyAdvisorScreenshot5] }
        title="Surrogacy Advisor"
        slideshowDelay={ 5000 }
        titleHref='https://www.surrogacyadvisor.org'
        // slideshowHrefArr={ [""] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Built an Assisted Reproductive Technology (ART) industry directory & embedded directory extension alongside our internal team intended to improve the existing pay-to-play model in the ART industry & provide an intuitive modern directory system for prospective parents to use</span>
            <div>
              <span>○</span><span>The full stack software platform features an administration portal, a provider portal, and a mobile responsive directory to connect prospective parents with disparate surrogacy resources in a single place</span>
              <span>○</span><span>Written using Python/Flask</span>
            </div>
            <span>•</span><span>Features are designed to appeal to various types of users including prospective parents, ART industry providers, and admins</span>
            <div>
              <span>○</span><span>Prospective parents, or the front-end users, benefit from being able to easily compare, save, and interact with provider data & provide public reviews in the directory</span>
              <span>○</span><span>ART industry providers including clinics, agencies, and law firms benefit from business exposure & the ability to manage their image on the directory</span>
              <span>○</span><span>Surrogacy Advisor admins benefit from being able to approve provider applications, approve modifications to provider profiles, manage memberships, configure reviews, and otherwise manage all aspects of the site from the admin portal</span>
            </div>
            <span>•</span><span>Provided the client with an extensible custom platform not reliant on services such as WordPress, giving them an edge over their competitors using prebuilt software</span>
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
        imgSrcArr={ [contributionsScreenshot1, contributionsScreenshot2] }
        title="Open & Closed Source Contributions"
        slideshowDelay={ 5000 }
        // titleHref=''
        // slideshowHrefArr={ [""] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Contribute to closed source repositories for the benefit of teammates in my company & open source repositories for the sake of developers worldwide as often as possible</span>
            <span>•</span><span>Closed source contributions include feature additions & bug fixes to internal company libraries</span>
            <div>
              <span>○</span><span>Contributions such as extending a datepicker component with a time selector help to realize greater internal company efficiencies by cutting down on the time it takes to implement similar features in future projects</span>
              <span>○</span><span>Most of these contributions are written in Python & JavaScript</span>
            </div>
            <span>•</span><span>Open source contributions include critical bug fixes for popular libraries used in the course of my work</span>
            <div>
              <span>○</span><span>Some issues addressed include an app crash with a popular Google Sign-In library & a broken native mobile camera library caused by missing permissions requests on Android</span>
              <span>○</span><span>So far these contributions have been written in Java, Swift, and Vue</span>
            </div>
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
        imgSrcArr={ [personalSiteScreenshot1, personalSiteScreenshot2, personalSiteScreenshot3, personalSiteScreenshot4, personalSiteScreenshot5, personalSiteScreenshot6, personalSiteScreenshot7] }
        title="This Website 🚀"
        slideshowDelay={ 5000 }
        titleHref='https://github.com/josharnow/josharnow.github.io'
        // slideshowHrefArr={ [""] }
        slideshowClassName='!w-1/2 h-fit rounded-lg mx-auto shadow-3xl shadow-black'
        htmlContent={
          <div
            className={ cn(globalStyles.bulletGrid) }
          >
            <span>•</span><span>Independently designed & created this personal website while applying agile methodology to keep ideas & workflow organized</span>
            <span>•</span><span>Made extensive use of Tailwind CSS & Framer Motion to design and modify highly complex components</span>
            <div>
              <span>○</span><span>When not creating custom components from the ground up I built upon existing component ideas & made them my own</span>
            </div>
            <span>•</span><span>Used my experience to carefully balance form & function</span>
            <div>
              <span>○</span><span>As with all of my projects, I strive to harmonize aesthetics & purpose for the ideal user experience</span>
            </div>
            <span>•</span><span>Leveraged GitHub Projects as a project management platform to organize ideas & progress on work via a kanban board</span>
            <span>•</span><span>Written using React/Next.js (TypeScript)</span>
            <span>•</span><span>Hosted on GitHub Pages</span>
            <div>
              <span>○</span><span>Made use of CI/CD automation via GitHub Actions</span>
              <span>○</span><span>Since I designed this as a static site, one of the many advantages includes being able to host at no cost with this service</span>
            </div>
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
