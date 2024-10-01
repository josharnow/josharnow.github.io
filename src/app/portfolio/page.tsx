"use client";
import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  InfiniteMovingCards,
  StickyScrollReveal,
  AnimatedTabs,
  ParallaxScroll,
} from '@/src/components';

// TODO - Add technologies used in each project as an automatic infinite scrolling list of logos
import appleLogo from "@/src/assets/icons/apple.svg";
import appstoreLogo from "@/src/assets/icons/appstore.svg";
import awsLogo from "@/src/assets/icons/aws.svg";
import axiosLogo from "@/src/assets/icons/axios.svg";
import chartJsLogo from "@/src/assets/icons/chartjs.svg";
import cloudflareLogo from "@/src/assets/icons/cloudflare.svg";
import cssLogo from "@/src/assets/icons/css.svg";
import dockerLogo from "@/src/assets/icons/docker.svg";
import ethersJsLogo from "@/src/assets/icons/ethersjs.svg";
import expressJsLogo from "@/src/assets/icons/expressjs.svg";
import firebaseLogo from "@/src/assets/icons/firebase.svg";
import flaskLogo from "@/src/assets/icons/flask.svg";
import framerLogo from "@/src/assets/icons/framer.svg";
import gitLogo from "@/src/assets/icons/git.svg";
import githubActionsLogo from "@/src/assets/icons/githubactions.svg";
import googleGLogo from "@/src/assets/icons/googleg.svg";
import googleMapsLogo from "@/src/assets/icons/googlemaps.svg";
import googlePlayConsoleLogo from "@/src/assets/icons/googleplay.svg";
import htmlLogo from "@/src/assets/icons/html.svg";
import ionicLogo from "@/src/assets/icons/ionic.svg";
import javaLogo from "@/src/assets/icons/java.svg";
import javaSpringLogo from "@/src/assets/icons/spring.svg";
import jiraLogo from "@/src/assets/icons/jira.svg";
import jQueryLogo from "@/src/assets/icons/jquery.svg";
import mapboxLogo from "@/src/assets/icons/mapbox.svg";
import mariaDbLogo from "@/src/assets/icons/mariadb.svg";
import mongoDbLogo from "@/src/assets/icons/mongodb.svg";
import mongooseLogo from "@/src/assets/icons/mongoose.svg";
import mySqlLogo from "@/src/assets/icons/mysql.svg";
import nextJsLogo from "@/src/assets/icons/nextjs.svg";
import nodeJsLogo from "@/src/assets/icons/nodejs.svg";
import pandasLogo from "@/src/assets/icons/pandas.svg";
import piniaLogo from "@/src/assets/icons/pinia.svg";
import postmanLogo from "@/src/assets/icons/postman.svg";
import pythonLogo from "@/src/assets/icons/python.svg";
import reactLogo from "@/src/assets/icons/react.svg";
import reactNativeLogo from "@/src/assets/icons/reactnative.svg";
import remixLogo from "@/src/assets/icons/remix.svg";
import sendgridLogo from "@/src/assets/icons/sendgrid.svg";
import solidityLogo from "@/src/assets/icons/solidity.svg";
import sqlAlchemyLogo from "@/src/assets/icons/sqlalchemy.svg";
import swiperJsLogo from "@/src/assets/icons/swiperjs.svg";
import tailwindCssLogo from "@/src/assets/icons/tailwindcss.svg";
import twilioLogo from "@/src/assets/icons/twilio.svg";
import typescriptLogo from "@/src/assets/icons/typescript.svg";
import videoJsLogo from "@/src/assets/icons/videojs.svg";
import vsCodeLogo from "@/src/assets/icons/vscode.svg";
import vueJsLogo from "@/src/assets/icons/vue.svg";
import web3JsLogo from "@/src/assets/icons/web3js.svg";
import xcodeLogo from "@/src/assets/icons/xcode.svg";


// import { type StaticImport } from 'next/dist/shared/lib/get-img-props';
// import joshArnowLogoNoShadows from "@/src/assets/images/josh_arnow_logo_no_shadows.svg";

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



const tabs = [
  {
    title: "Cyzl",
    value: "cyzl",
    indexOrder: 0,
    content: (
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        {/* <ParallaxScroll
          images={ contentArrContainer.libraries.map((content) => content.content) }
        /> */}
        test
      </div>
    ),
  },
  {
    title: "SEG",
    value: "seg",
    indexOrder: 1,
    content: (
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        {/* <ParallaxScroll
          images={ contentArrContainer.libraries.map((content) => content.content) }
        /> */}
        test
      </div>
    ),
  },
  {
    title: "SAD",
    value: "sad",
    indexOrder: 2,
    content: (
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        {/* <ParallaxScroll
          images={ contentArrContainer.libraries.map((content) => content.content) }
        /> */}
        test
      </div>
    ),
  },
  {
    title: "Open & Closed Source Contributions",
    value: "contributions",
    indexOrder: 3,
    content: (
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        {/* <ParallaxScroll
          images={ contentArrContainer.libraries.map((content) => content.content) }
        /> */}
        test
      </div>
    ),
  },
  {
    title: "This Website 🚀",
    value: "personal_website",
    indexOrder: 4,
    content: (
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        {/* <ParallaxScroll
          images={ contentArrContainer.libraries.map((content) => content.content) }
        /> */}
        test
      </div>
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
