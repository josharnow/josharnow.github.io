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
} from '@/src/components';

type Content = {
  title: string;
  description: string;
  content ?: React.ReactNode | any;
}
type ContentArrContainer = {
  [key: string]: Content[];
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DummyContent = () => {
  return (
    <Image
      src="https://elearningchips.com/wp-content/uploads/2017/02/ph_024_043_pw1.jpg"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

// TODO - Feed StickyScrollReveal to content


const contentArrContainer: ContentArrContainer = {
  programming_languages: [
    {
      title: "JavaScript / TypeScript",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Python",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Java",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Solidity",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "HTML5",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "SCSS/CSS3",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  libraries: [
    {
      title: "React.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "ChartJS",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Mapbox GL JS",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Firebase",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "jQuery",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Pandas",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Swiper.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Video.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Mongoose",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Axios",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Framer Motion",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Pinia",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Vue Router",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Web3.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Ethers.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  frameworks: [
    {
      title: "React Native",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Vue.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Ionic / Capacitor",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Next.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Express.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Flask",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Tailwind CSS",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  databases_orms: [
    {
      title: "MySQL",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "MongoDB",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "MariaDB",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "SQLAlchemy",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  software: [
    {
      title: "Visual Studio Code",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Git",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Xcode",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Android Studio",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Docker",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Java Spring",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Remix IDE",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Node.js",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Jira",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Postman",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Apple App Store Connect",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Google Play Console",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  cloud_computing_ci_cd: [
    {
      title: "AWS - Elastic Beanstalk",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - EC2",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - S3",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - RDS",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - CloudFront",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - Lambda",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "AWS - MediaConvert",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Cloudflare",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "GitHub Actions",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Xcode Cloud",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
  // design: [
  //   {
  //     title: "Figma",
  //     description:
  //       "TODO",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //         TODO - INSERT LOGO
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Adobe XD",
  //     description:
  //       "TODO",
  //     content: (
  //       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //         TODO - INSERT LOGO
  //       </div>
  //     ),
  //   },
  // ],
  apis: [
    {
      title: "Mapbox GL JS",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Google Places",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Twilio",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Sendgrid",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Sign In With Apple",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
    {
      title: "Google Sign-In",
      description:
        "TODO",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          TODO - INSERT LOGO
        </div>
      ),
    },
  ],
}


const tabs = [
  {
    title: "Programming Languages",
    value: "programming_languages",
    indexOrder: 0,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Programming Languages</p>
        {/* <DummyContent /> */}
        {/* <div className='border grow flex justify-center items-center'> */}
          <StickyScrollReveal
            content={ contentArrContainer.programming_languages }
          />
        {/* </div> */}
      </div>
    ),
  },
  {
    title: "Libraries",
    value: "libraries",
    indexOrder: 1,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Libraries</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.libraries }
          />
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "frameworks",
    indexOrder: 2,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Frameworks</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.frameworks }
          />
      </div>
    ),
  },
  {
    title: "Databases/ORMs",
    value: "databases_orms",
    indexOrder: 3,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Databases/ORMs</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.databases_orms }
          />
      </div>
    ),
  },
  {
    title: "Software",
    value: "software",
    indexOrder: 4,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Software</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.software }
          />
      </div>
    ),
  },
  {
    title: "Cloud Computing & CI/CD",
    value: "cloud_computing_ci_cd",
    indexOrder: 5,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>Cloud Computing & CI/CD</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.cloud_computing_ci_cd }
          />
      </div>
    ),
  },
  {
    title: "APIs",
    value: "apis",
    indexOrder: 6,
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full flex flex-col gap-5 sm:p-10 font-medium">
        <p className='text-xl md:text-4xl'>APIs</p>
        {/* <DummyContent /> */}
          <StickyScrollReveal
            content={ contentArrContainer.apis }
          />
      </div>
    ),
  },
];

export default function TechnologiesPage() {

  return (
    <>
      {/* <div className='technologies-page-wrapper h-[calc(100%-9rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'> */}
      <div className='technologies-page-wrapper h-[calc(100%-5rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'>
        <div className="h-full [perspective:1000px] relative b flex flex-col  mx-auto w-full items-start justify-start">
          {/* TODO - Within AnimatedTabs, on mobile if you click on a tab in the background it should trigger a tab change as if you clicked on the option in the tab bar */}
          {/* TODO - Implement StickyScrollReveal */}
          {/* TODO - Implement InfinteScroll (?) */}



          {/* NOTE - Accounting for switch to mt-36 by changing the subtrahend used in the calculation for .technologies-page-wrapper (4rem difference between mt-36 & mt-20) */}
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
