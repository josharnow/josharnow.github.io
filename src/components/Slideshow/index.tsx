// SOURCE - https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from './styles.module.scss';
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;
import { type ClassValue, clsx } from "clsx";
import { ClassNameValue, twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


function Slideshow(
  { 
    srcArray = ["#0088FE", "#00C49F", "#FFBB28"],
    delay = 2500,
    hasDots = false,
    children,
    imageClassName,
    slideshowClassName,
    hrefArray,
  }: 
  {
    srcArray?: string[] | StaticImageData[];
    delay?: number;
    hasDots?: boolean;
    children?: React.ReactNode;
    imageClassName?: string;
    slideshowClassName?: string;
    hrefArray?: string[];
    // imageClassName?: React.HTMLAttributes<HTMLDivElement>.className;
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
  }, [index, delay, srcArray.length]);

  return (
    <div className={ cn(styles.slideshow, slideshowClassName)}>
      <div
        className={ cn(styles.slideshowSlider) }
        style={ { transform: `translate3d(${-index * 100}%, 0, 0)` } }
      >
        { srcArray.map((src, index) => {
          if (hrefArray && hrefArray.length && hrefArray[index]) {
            return (
                <Image 
                  src={ src }
                  key={ index }
                  alt="portfolio-sample-image"
                  width={ 0 }
                  height={ 0 }
                  className={ cn(styles.slide, imageClassName) }
                  quality={ 100 }
                />
            )
          }


          return <Image 
            src={ src }
            key={ index }
            alt="portfolio-sample-image"
            width={ 0 }
            height={ 0 }
            className={ cn(styles.slide, imageClassName) }
            quality={ 100 }
          />
}) }
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