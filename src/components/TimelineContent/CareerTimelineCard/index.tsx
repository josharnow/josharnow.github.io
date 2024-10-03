"use client";
import React from "react";
// import { CardSpotlight } from "@/src/components";
// import Link from "next/link";
import styles from '../styles.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerTimelineCard = ({ content, className }: { 
  content: CareerTimelineContent;
  className?: string;
}) => {

  return (
    <>
      <div className={ cn(className ? className : "", "flex flex-col items-center justify-center pt-7 mt-0 sm:mt-2") }>
        {/* <CardSpotlight className={ cn(styles.card, "border border-red-500 rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-transparent") }
          style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
          > */}
        {/* <CardSpotlight className={ cn(styles.card, "flex flex-col gap-y-2 rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-black bg-opacity-80") }> */}
        <div className={ cn(styles.card, "flex flex-col gap-y-2 rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-slate-700 bg-opacity-35") }>
          <div>
            <div className="grid grid-cols-2">
              <div className="text-xs sm:text-sm md:text-base xl:text-lg flex h-fit text-white">
                <h1>{ content.yearStart }</h1>&nbsp;–&nbsp;<h1>{ content.yearEnd ? content.yearEnd : "Present" }</h1>
              </div>
              <h6 className="text-xs sm:text-sm md:text-base xl:text-lg h-fit text-white" style={ { textAlign: "right" } }><i>{ content.location }</i></h6>
            </div>
            <div className="flex flex-col">
              <h1 className="font-medium text-sm sm:text-base md:text-lg xl:text-xl text-blue-500">{ content.institution }</h1>
              <h3 className="font-medium text-xs sm:text-base md:text-lg xl:text-xl text-white"><i>{ content.position }</i></h3>
            </div>
          </div>
          {/* <div className="grow text-sm sm:text-base md:text-lg xl:text-xl !overflow-y-scroll flex flex-col text-white" style={ { "flexBasis": 0, "justifyContent": "safe center", "WebkitJustifyContent": "safe center" } }> */}
          {/* NOTE - https://stackoverflow.com/a/47636238 */ }
          <div className="grow text-sm sm:text-base md:text-lg xl:text-xl !overflow-y-scroll flex flex-col text-white" style={ { "flexBasis": 0 } }>
            { content.bodyElement }
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerTimelineCard;