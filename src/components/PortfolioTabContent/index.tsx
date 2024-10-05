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
      <div 
        className="w-full relative h-full grid grid-cols-1 justify-items-center  gap-5 p-2 sm:p-5 font-medium" 
        // style={ { "gridTemplateRows": "0.5fr" } }
        // style={ { "gridTemplateRows": "fit-content(50%)" } }
        style={ { "gridTemplateRows": "33.333%" } }
      >
          {/* TODO - Infinitely scroll through technologies used */}
            {/* <div className='h-fit w-1/2 my-auto' style={ { "gridTemplateRows": "fit-content(100%)" } }> */}
            {/* <div 
              className='h-full my-auto' 
            >
            </div> */}
            <div className="size-full relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center">
                {/* <div>
                  test
                </div> */}
                {/* <div className="h-full w-3/4"> */}

                  <Slideshow
                    srcArray={ imgSrcArr }
                    hrefArray={ slideshowHrefArr }
                    delay={ slideshowDelay }
                    imageClassName={ slideshowImageClassName }
                    slideshowClassName={ slideshowClassName }
                  />
                {/* </div> */}
              </div>
            </div>
            <div className='grow w-full grid grid-cols-1 justify-items-center gap-3 overflow-y-hidden' style={{"gridTemplateRows": "fit-content(50%)"}}>
              <div className="flex justify-center">
                <Link
                  href={ titleHref ? titleHref as Url : "" }
                  target={ titleHref ? "_blank" : "_self" }
                  className='font-medium text-3xl sm:text-5xl h-fit text-balance text-center mx-auto'
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