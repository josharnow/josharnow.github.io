"use client";
import React from "react";
import { CardSpotlight } from "@/src/components";
// import Link from "next/link";
import styles from '../styles.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EducationTimelineCard = ({ content, className }: { 
  content: EducationTimelineContent;
  className?: string;
}) => {

  return (
    <>
      <div className={ cn(className ? className : "", "flex flex-col items-center justify-center pb-7 mb-0 sm:mb-2") }>
        <CardSpotlight className={ cn(styles.card, "flex flex-col gap-y-2 rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-black bg-opacity-80") }
        >
          <div>
            <div className="grid grid-cols-2">
              <div className="text-xs sm:text-sm md:text-base xl:text-lg flex h-fit">
                <span>{ content.yearStart }</span>&nbsp;–&nbsp;<span>{ content.yearEnd ? content.yearEnd : "Present" }</span>
              </div>
              <span className="text-xs sm:text-sm md:text-base xl:text-lg h-fit" style={ { textAlign: "right" } }><i>{ content.location }</i></span>
            </div>
            <div className="grid grid-cols-2">
              <span className="font-medium text-sm sm:text-base md:text-lg xl:text-xl text-blue-500">{ content.institution }</span>
              <span className="font-medium text-sm sm:text-base md:text-lg xl:text-xl" style={ { textAlign: "right" } }>{ content.GPA ? `GPA: ${content.GPA}` : "" }</span>
            </div>
            { content.degrees.map((degreeElement, index) => (
              <div className="grid grid-cols-1 font-medium text-sm sm:text-base md:text-lg xl:text-xl" key={ index }>
                { degreeElement }
              </div>
            )) }
          </div>

          <div className="grow text-sm sm:text-base md:text-lg xl:text-xl !overflow-y-scroll flex flex-col" style={{"flexBasis": 0, "justifyContent": "safe center"}}>
            { content.bodyElement }
          </div>
        </CardSpotlight>
      </div>
    </>
  );
};

export default EducationTimelineCard;