// SOURCE - https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react
"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from './styles.module.scss';
import Image, { StaticImageData } from "next/image";
import { useReducedMotion } from "framer-motion";

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    if (isPaused || isInteracting || shouldReduceMotion || srcArray.length < 2) {
      return resetTimeout;
    }

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
  }, [index, delay, isInteracting, isPaused, shouldReduceMotion, srcArray.length]);

  const showPreviousSlide = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? srcArray.length - 1 : currentIndex - 1
    );
  };

  const showNextSlide = () => {
    setIndex((currentIndex) =>
      currentIndex === srcArray.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div
      className={ cn(styles.slideshow, slideshowClassName)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Project screenshots"
      tabIndex={ 0 }
      onMouseEnter={ () => setIsInteracting(true) }
      onMouseLeave={ () => setIsInteracting(false) }
      onFocusCapture={ () => setIsInteracting(true) }
      onBlurCapture={ (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsInteracting(false);
        }
      } }
      onKeyDown={ (event) => {
        if (event.target !== event.currentTarget) {
          return;
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPreviousSlide();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          showNextSlide();
        }
      } }
    >
      <span
        className="sr-only"
        aria-live={ isPaused || isInteracting || shouldReduceMotion ? "polite" : "off" }
        aria-atomic="true"
      >
        Slide { index + 1 } of { srcArray.length }
      </span>
      <div
        className={ cn(styles.slideshowSlider) }
        style={ { transform: `translate3d(${-index * 100}%, 0, 0)` } }
      >
        { srcArray.map((src, slideIndex) => {
          // if (hrefArray && hrefArray.length && hrefArray[index]) {
          //   return (
          //       <Image 
          //         src={ src }
          //         key={ index }
          //         alt="portfolio-sample-image"
          //         width={ 0 }
          //         height={ 0 }
          //         className={ cn(styles.slide, imageClassName) }
          //         quality={ 100 }
          //       />
          //   )
          // }
          return <Image 
            src={ src }
            key={ slideIndex }
            alt={ `Project screenshot ${slideIndex + 1} of ${srcArray.length}` }
            aria-hidden={ slideIndex !== index }
            width={ 0 }
            height={ 0 }
            className={ cn(styles.slide, imageClassName) }
            quality={ 100 }
          />
      }) }
      </div>
      { srcArray.length > 1 && (
        <div className={ styles.slideshowControls }>
          <button type="button" onClick={ showPreviousSlide } aria-label="Previous slide">
            <i aria-hidden="true" className="pi pi-chevron-left" />
          </button>
          { !shouldReduceMotion && (
            <button
              type="button"
              onClick={ () => setIsPaused((paused) => !paused) }
              aria-label={ isPaused ? "Play slideshow" : "Pause slideshow" }
            >
              <i aria-hidden="true" className={ isPaused ? "pi pi-play" : "pi pi-pause" } />
            </button>
          ) }
          <button type="button" onClick={ showNextSlide } aria-label="Next slide">
            <i aria-hidden="true" className="pi pi-chevron-right" />
          </button>
        </div>
      ) }
      {
        hasDots && (
          <div className={ cn(styles.slideshowDots)}>
            { srcArray.map((_, idx) => (
              <button
                type="button"
                key={ idx }
                className={ index === idx ? cn(styles.slideshowDot, styles.active) : cn(styles.slideshowDot) }
                aria-label={ `Show slide ${idx + 1}` }
                aria-current={ index === idx ? "true" : undefined }
                onClick={ () => {
                  setIndex(idx);
                } }
              ></button>
            )) }
          </div>
        )
      }
    </div>
  );
}
export default Slideshow;
