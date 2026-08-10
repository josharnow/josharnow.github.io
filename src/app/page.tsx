"use client";
import React, { useEffect, useRef, useState } from 'react';
// This is the root view of the app, hence it is placed in the root of the app directory.
import { AboutPageContact, AboutPageEducationWork, AboutPageIntro, AboutPagePortfolio, AboutPageTechnologies } from "@/src/components";

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Custom hook that tracks the scroll position of the window.
 */
function useScrollHook(initialPosition: number) {  
  const [scrollPosition, setScrollPosition] = useState(initialPosition);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // return [scrollPosition, setScrollPosition];
  return scrollPosition;
}

export default function AboutPage() {
  function handleArrowClick() {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const sectionOffsets = [
      {
        element: aboutPageIntroRef.current,
        scrollPosition: aboutPageIntroRef.current?.offsetTop as number,
      },
      {
        element: aboutPageEducationWorkRef.current,
        scrollPosition: aboutPageEducationWorkRef.current?.offsetTop as number,
      },
      {
        element: aboutPagePortfolioRef.current,
        scrollPosition: aboutPagePortfolioRef.current?.offsetTop as number,
      },
      {
        element: aboutPageTechnologiesRef.current,
        scrollPosition: aboutPageTechnologiesRef.current?.offsetTop as number,
      },
      {
        element: aboutPageContactRef.current,
        scrollPosition: aboutPageContactRef.current?.offsetTop as number,
      },
    ].sort((a, b) => a.scrollPosition - b.scrollPosition);

    // NOTE - https://react.dev/learn/manipulating-the-dom-with-refs#example-scrolling-to-an-element
    // NOTE - If at the bottom, scroll to the top
    if (isScrollAtBottom) {
      return aboutPageIntroRef?.current?.scrollIntoView({
        behavior,
        block: 'nearest',
        inline: 'center',
      });
    }

    // NOTE - If below the top of the page but above the bottom, scroll to the next section
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (scrollPosition < sectionOffsets[i].scrollPosition) {
        return sectionOffsets[i].element?.scrollIntoView({
          behavior,
          block: 'nearest',
          inline: 'center',
        });
      }
    }

    // NOTE - If in the bottom section but above the bottom of the page, scroll to the bottom
    return sectionOffsets[sectionOffsets.length - 1].element?.scrollIntoView({
      behavior,
      block: 'nearest',
      inline: 'center',
    });
  }

  const aboutPageIntroRef = useRef<HTMLDivElement>(null);
  const aboutPageEducationWorkRef = useRef<HTMLDivElement>(null);
  const aboutPagePortfolioRef = useRef<HTMLDivElement>(null);
  const aboutPageTechnologiesRef = useRef<HTMLDivElement>(null);
  const aboutPageContactRef = useRef<HTMLDivElement>(null);

  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);
  const scrollPosition = useScrollHook(0);

  useEffect(() => {
    const bottomScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
    setIsScrollAtBottom(scrollPosition > 0 && scrollPosition >= bottomScrollPosition - 1);
  }, [scrollPosition]);

  return (
    <>
      <AboutPageIntro ref={aboutPageIntroRef} />
      {/* NOTE - The below div is my hacky way to make transition effects between views work correctly. Without it the text from the next page is considered to be within the viewport even at the maximum scroll height, so the transition will not activate when scrolling down. */}
      <div className="w-full" style={ { "height": "1px", "backgroundColor": "rgb(24 24 27)"}}></div>
      <AboutPageEducationWork ref={aboutPageEducationWorkRef} />
      <AboutPagePortfolio ref={aboutPagePortfolioRef} />
      <AboutPageTechnologies ref={aboutPageTechnologiesRef} /> 
      <AboutPageContact ref={aboutPageContactRef} /> 
      <button
        type="button"
        aria-label={ isScrollAtBottom ? "Scroll to the top" : "Scroll to the next section" }
        onClick={ handleArrowClick }
        className={ cn(styles.pageArrowContainer, "p-2 bg-gradient-to-b shadow-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black", {
        "from-white to-blue-500": !isScrollAtBottom,
        "from-blue-500 to-white": isScrollAtBottom,
      }) }>
        <i aria-hidden="true" className={ cn(styles.pageArrow, "pi text-[1rem] sm:text-[2rem]", {
          "pi-arrow-up": isScrollAtBottom,
          "pi-arrow-down": !isScrollAtBottom,
        }) }></i>
      </button>
    </>
  );
}
