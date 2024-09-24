"use client";
import React from 'react';
import Image from 'next/image';
// import styles from './styles.module.scss';
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
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
const tabs = [
  {
    title: "Product",
    value: "product",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
        <p>Content tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      // TODO - Check to see tabs are expanded; change bg-opacity & bg-color conditional on that ("hovering" parameter in FadeInDiv) (make sure to transition them to appearance) (if not hovering & not active, bg-opacity-0)
      // TODO - Hide the tabs behind the main one when they're supposed to be "hidden" (i.e. not the active tab & tabs not expanded) (make sure to transition them to disappearance)
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
        <p>Random tab</p>
        <DummyContent />
      </div>
    ),
  },
];

export default function TechnologiesPage() {

  return (
    <>
      <div className='technologies-page-wrapper h-[calc(100%-9rem)] sm:h-[calc(100%-5rem)] px-4 sm:px-6 py-6 sm:py-10'>
        <div className="h-full [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
          {/* TODO - Change AnimatedTabs background color */}
          {/* TODO - Need to conditionally set opacity on contentClassName based on hover status. can do this within AnimatedTabs */}



          {/* TODO - Within AnimatedTabs, on mobile make the tab bar overflow to next line or figure out different approach... it needs to fit */}
          {/* TODO - Within AnimatedTabs, on mobile if you click on a tab in the background it should trigger a tab change as if you clicked on the option in the tab bar */}
          {/* NOTE - Accounting for switch to mt-36 by changing the subtrahend used in the calculation for .technologies-page-wrapper (4rem difference between mt-36 & mt-20) */}
          <AnimatedTabs 
            tabs={ tabs } 
            contentClassName={ cn(
              'mt-36 sm:mt-20 bg-slate-700 rounded-2xl',
            ) }
            containerClassName='justify-center' 
          />
        </div>
      </div>
    </>
  );
}
