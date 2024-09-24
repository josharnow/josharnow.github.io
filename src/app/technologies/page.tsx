"use client";
import React from 'react';
import Image from 'next/image';
// import styles from './styles.module.scss';
import { 
  InfiniteMovingCards,
  StickyScrollReveal,
  AnimatedTabs,
} from '@/src/components';

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
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Product Tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Services",
    value: "services",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Services tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Playground",
    value: "playground",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Playground tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Content",
    value: "content",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
        <p>Content tab</p>
        <DummyContent />
      </div>
    ),
  },
  {
    title: "Random",
    value: "random",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
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
        <div className="h-full [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start">
          {/* TODO - Change AnimatedTabs background color */}
          {/* TODO - Within AnimatedTabs, on mobile make the tab bar overflow to next line or figure out different approach... it needs to fit */}
          {/* TODO - Within AnimatedTabs, on mobile if you click on a tab in the background it should trigger a tab change as if you clicked on the option in the tab bar */}
          {/* NOTE - Accounting for switch to mt-36 by changing the subtrahend used in the calculation for .technologies-page-wrapper (4rem difference between mt-36 & mt-20) */}
          <AnimatedTabs 
            tabs={ tabs } 
            contentClassName='mt-36 sm:mt-20' 
            containerClassName='justify-center' 
          />
        </div>
      </div>
    </>
  );
}
