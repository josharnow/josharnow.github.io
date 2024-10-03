"use client";
import React from "react";
import {
  Slideshow,
} from '@/src/components';
import Link from "next/link";
import { type StaticImageData } from "next/image";
import { Url } from "next/dist/shared/lib/router/router";
// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

type TabContent = {
  title: string;
  htmlContent: React.JSX.Element;
  titleHref?: Url | string;
  imgSrcArr?: string[] | StaticImageData[];
  slideshowHrefArr?: string[];
  slideshowDelay?: number;
  slideshowImageClassName?: string;
  slideshowClassName?: string;
}

/**
 * Component representing the content of a portfolio tab.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the portfolio tab.
 * @param {string[]} props.imgSrcArr - An array of image source URLs for the slideshow.
 * @param {string} props.htmlContent - The HTML content to be displayed.
 *
 * @returns {JSX.Element} The rendered PortfolioTabContent component.
 *
 * @component
 * @example
 * const title = "My Portfolio";
 * const imgSrcArr = ["image1.jpg", "image2.jpg"];
 * const htmlContent = "<p>This is a portfolio item.</p>";
 * 
 * return (
 *   <PortfolioTabContent 
 *     title={title} 
 *     imgSrcArr={imgSrcArr} 
 *     htmlContent={htmlContent} 
 *   />
 * );
 */
const PortfolioTabContent = ({
  title,
  htmlContent,
  titleHref,
  imgSrcArr,
  slideshowHrefArr = [""],
  slideshowDelay = 5000,
  slideshowImageClassName = '',
  slideshowClassName = ''
}: TabContent) => {

  return (
    <>
      <div className="w-full relative h-full grid grid-cols-1 justify-items-center gap-10 p-2 sm:p-5 font-medium" style={ { "gridTemplateRows": "fit-content(50%)" } }>
          {/* TODO - Infinitely scroll through technologies used */}
            <div className='h-fit w-1/2' style={ { "gridTemplateRows": "fit-content(50%)" } }>
              <Slideshow
                srcArray={ imgSrcArr }
                hrefArray={ slideshowHrefArr }
                delay={ slideshowDelay }
                imageClassName={ slideshowImageClassName }
                slideshowClassName={ slideshowClassName }
              />
            </div>
            <div className='grow w-full grid grid-cols-1 justify-items-center gap-3 overflow-y-hidden' style={{"gridTemplateRows": "fit-content(50%)"}}>
              <div className="h-fit">

                <Link
                  href={ titleHref as Url }
                  target='_blank'
                  className='font-medium text-3xl sm:text-5xl h-fit'
                >
                  { title }
                </Link>
              </div>
              <div className='overflow-y-auto grid grid-cols-1 justify-items-center w-full'>
                { htmlContent }
              </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioTabContent;