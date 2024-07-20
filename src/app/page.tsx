"use client";
import React, { useState, useEffect, useRef } from 'react';
// This is the root view of the app, hence it is placed in the root of the app directory.
import { AuroraBackground, WavyBackground, AboutPageIntro, AboutPageEducationWork, AboutPagePortfolio, AboutPageTechnologies, AboutPageContact } from "@/src/components";

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

import { type ClassValue, clsx } from "clsx";
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
    const position = window.pageYOffset;
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

export default function Home() {
  function handleArrowClick(e: React.MouseEvent<HTMLDivElement>) {
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
        behavior: "smooth",
        block: 'nearest',
        inline: 'center',
      });
    }

    // NOTE - If below the top of the page but above the bottom, scroll to the next section
    for (let i = 0; i < sectionOffsets.length; i++) {
      if (scrollPosition < sectionOffsets[i].scrollPosition) {
        return sectionOffsets[i].element?.scrollIntoView({
          behavior: "smooth",
          block: 'nearest',
          inline: 'center',
        });
      }
    }

    // NOTE - If in the bottom section but above the bottom of the page, scroll to the bottom
    return sectionOffsets[sectionOffsets.length - 1].element?.scrollIntoView({
      behavior: "smooth",
      block: 'nearest',
      inline: 'center',
    });
  }

  const arrowRef = useRef<HTMLElement>(null);
  const aboutPageIntroRef = useRef<HTMLDivElement>(null);
  const aboutPageEducationWorkRef = useRef<HTMLDivElement>(null);
  const aboutPagePortfolioRef = useRef<HTMLDivElement>(null);
  const aboutPageTechnologiesRef = useRef<HTMLDivElement>(null);
  const aboutPageContactRef = useRef<HTMLDivElement>(null);

  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);
  let bottomScrollPosition = 0;

  // NOTE - This is necessary to prevent the window object from being accessed on the server (which will cause an error; this is a client-side only object but there appears to be a bug in Next where it thinks it isn't and throws an error)
  if (typeof window !== "undefined") {
    bottomScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
  }

  const scrollPosition = useScrollHook(0);

  if (scrollPosition > 0) {
    // NOTE - This is a hacky way to determine if the user has scrolled to the bottom of the page
    if (scrollPosition >= bottomScrollPosition && isScrollAtBottom === false) {
      setIsScrollAtBottom(true);
    } else if (isScrollAtBottom === true && scrollPosition < bottomScrollPosition) {
      setIsScrollAtBottom(false);
    }
  }

  return (
    <>
      <AboutPageIntro ref={aboutPageIntroRef} />
      {/* NOTE - The below div is my hacky way to make transition effects between views work correctly. Without it the text from the next page is considered to be within the viewport even at the maximum scroll height, so the transition will not activate when scrolling down. */}
      <div className="w-full" style={ { "height": "1px", "backgroundColor": "rgb(24 24 27)"}}></div>
      <AboutPageEducationWork ref={aboutPageEducationWorkRef} />
      <AboutPagePortfolio ref={aboutPagePortfolioRef} />
      <AboutPageTechnologies ref={aboutPageTechnologiesRef} /> 
      <AboutPageContact ref={aboutPageContactRef} /> 
      <div className={ cn(styles.pageArrowContainer, "p-2 bg-gradient-to-b shadow-black", {
        "from-white to-blue-500": !isScrollAtBottom,
        "from-blue-500 to-white": isScrollAtBottom,
      }) }>
        <i ref={ arrowRef } onClick={ handleArrowClick } className={ cn(styles.pageArrow, "pi text-[1rem] sm:text-[2rem]", {
          "pi-arrow-up": isScrollAtBottom,
          "pi-arrow-down": !isScrollAtBottom,
        }) }></i>
      </div>
    </>
  );
}