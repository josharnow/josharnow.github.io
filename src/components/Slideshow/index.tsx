// SOURCE - https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "@/src/app/_utils";
import styles from './styles.module.scss';
import Image from "next/image";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

function Slideshow(
  { 
    srcArray = ["#0088FE", "#00C49F", "#FFBB28"],
    delay = 2500,
    hasDots = false,
    children,
  }: 
  {
    srcArray?: string[];
    delay?: number;
    hasDots?: boolean;
    children?: React.ReactNode;
  }
) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === srcArray.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className={ cn(styles.slideshow)}>
      <div
        className={ cn(styles.slideshowSlider) }
        style={ { transform: `translate3d(${-index * 100}%, 0, 0)` } }
      >
        { srcArray.map((src, index) => (
          <Image 
            src={ src }
            key={ index }
            alt="portfolio-sample-image"
            width={ 0 }
            height={ 0 }
            className={ cn(styles.slide) }
          />
        )) }
        {/* { srcArray.map((backgroundColor, index) => (
          <div
            className={ cn(styles.slide) }
            key={ index }
            style={ { backgroundColor } }
          ></div>
        )) } */}
      </div>
      {
        hasDots && (
          <div className={ cn(styles.slideshowDots)}>
            { srcArray.map((_, idx) => (
              <div
                key={ idx }
                className={ index === idx ? cn(styles.slideshowDot, styles.active) : cn(styles.slideshowDot) }
                onClick={ () => {
                  setIndex(idx);
                } }
              ></div>
            )) }
          </div>
        )
      }
    </div>
  );
}
export default Slideshow;