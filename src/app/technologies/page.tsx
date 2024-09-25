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
const tabs = [
  {
    title: "Programming Languages",
    value: "programming_languages",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Programming Languages</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "Libraries",
    value: "libraries",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Libraries</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "Frameworks",
    value: "frameworks",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Frameworks</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "Databases/ORMs",
    value: "databases_orms",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Databases/ORMs</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "Software",
    value: "software",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Software</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "Cloud Computing & CI/CD",
    value: "cloud_computing_ci_cd",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>Cloud Computing & CI/CD</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
  {
    title: "APIs",
    value: "apis",
    content: (
      // <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
      <div className="w-full overflow-auto relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white flex flex-col gap-5">
        <p>APIs</p>
        {/* <DummyContent /> */}
        <div className='border grow flex justify-center items-center'>
          test
        </div>
      </div>
    ),
  },
];

export default function TechnologiesPage() {

  return (
    <>
      <div className='technologies-page-wrapper h-[calc(100%-9rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'>
        <div className="h-full [perspective:1000px] relative b flex flex-col  mx-auto w-full items-start justify-start">
          {/* TODO - Within AnimatedTabs, on mobile make the tab bar overflow to next line or figure out different approach... it needs to fit */}

          {/* TODO - Within AnimatedTabs, on mobile if you click on a tab in the background it should trigger a tab change as if you clicked on the option in the tab bar */}
          {/* TODO - Implement StickyScrollReveal */}
          {/* TODO - Implement InfinteScroll (?) */}



          {/* NOTE - Accounting for switch to mt-36 by changing the subtrahend used in the calculation for .technologies-page-wrapper (4rem difference between mt-36 & mt-20) */}
          <AnimatedTabs 
            tabs={ tabs } 
            contentClassName={ cn(
              styles.content,
              'mt-36 sm:mt-20 bg-slate-700 rounded-lg shadow-3xl shadow-blue-500',
            ) }
            containerClassName='justify-center gap-2 rounded-full bg-slate-700 self-center sm:p-1 shadow-3xl shadow-blue-500'
            activeTabClassName={ cn(
              styles.activeTab,
              'bg-blue-500 shadow-3xl',
            ) }
            tabClassName={ cn(
              styles.tabButton,
              "text-lg font-medium"
            ) }
          />
        </div>
      </div>
    </>
  );
}
