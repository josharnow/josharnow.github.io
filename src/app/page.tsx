"use client";
import React, { useState, useEffect, useRef } from 'react';
// This is the root view of the app, hence it is placed in the root of the app directory.
import { AuroraBackground, WavyBackground, AboutPageIntro, AboutPageEducationWork, AboutPagePortfolio, AboutPageTechnologies, AboutPageContact } from "@/src/components";

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

import { ClassValue, clsx } from "clsx";
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
    // TODO - Make arrow function so that when you click it it scrolls to the next section. At the bottom it should flip upside down, and when clicking on it it should take you to the top of the page immediately.
    console.log(e)
  }
  const arrowRef = useRef<HTMLElement>(null);
  const [isScrollAtBottom, setIsScrollAtBottom] = useState(false);
  // const bottomScrollPosition = 
  // const bottomScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
  let bottomScrollPosition = 0;

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
      <div className={ cn(styles.pageArrowContainer, "p-2 bg-gradient-to-b", {
        "from-white to-blue-500": !isScrollAtBottom,
        "from-blue-500 to-white": isScrollAtBottom,
      }) }>
        <i ref={ arrowRef } onClick={ handleArrowClick } className={ cn(styles.pageArrow, "pi text-[1rem] sm:text-[2rem]", {
          "pi-arrow-up": isScrollAtBottom,
          "pi-arrow-down": !isScrollAtBottom,
        })}></i>
      </div>
        <AboutPageIntro />
        {/* NOTE - The below div is my hacky way to make transition effects between views work correctly. Without it the text from the next page is considered to be within the viewport even at the maximum scroll height, so the transition will not activate when scrolling down. */}
        <div className="w-full" style={ { "height": "1px", "backgroundColor": "rgb(24 24 27)"}}></div>
        <AboutPageEducationWork />
        <AboutPagePortfolio />
        <AboutPageTechnologies /> 
        <AboutPageContact /> 
    </>
  );
}