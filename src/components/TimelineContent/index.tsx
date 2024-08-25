"use client";
import React, { useMemo } from "react";
import CareerTimelineCard from "./CareerTimelineCard";
import EducationTimelineCard from "./EducationTimelineCard"; 

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  selectedContent: EducationTimelineContent[] | CareerTimelineContent[];
  selectedYear: number;
  contentType: "education" | "career";
  handleInputYearChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TimelineContent = ({selectedContent, selectedYear, contentType, handleInputYearChange}: Props) => {

  const colsClass = useMemo(() => {
    return `grid-cols-${selectedContent.length}`;
  }, [selectedContent.length]);

  return (
    <>
      {/* TODO - Make component for each stepper panel */ }
      <div className="relative h-full w-full flex justify-center items-center">
        <div className={ cn(`grid w-full h-full gap-2`, colsClass) }>
        {/* <div className={ cn(`grid grid-cols-${selectedContent.length} w-full h-full gap-2`) }> */}
          {/* TODO - Make cards for Career & Timeline */ }
          {
            selectedContent.map((item: EducationTimelineContent | CareerTimelineContent, index: number) => {
              return (
                contentType === "career" ?
                  <CareerTimelineCard key={ index } content={item as CareerTimelineContent} className="" /> :
                  <EducationTimelineCard key={ index } content={item as EducationTimelineContent} className="" />
              );
            })
          }
        </div>
        {
          contentType === "career" ? 
            <div className='absolute top-0 left-0 text-xl sm:text-2xl opacity-25 font-medium'>Career</div> :
            <div className='absolute bottom-0 left-0 text-xl sm:text-2xl opacity-25 font-medium'>Education</div>
        }
        {/* TODO - Put year input selector here */}
        {/* TODO - Forward ref to pass data back to timeline? */}
        {
          contentType === "career" ?
            <input
              type="number"
              value={ selectedYear }
              className="w-14 sm:w-24 text-xs sm:text-base absolute top-0 right-0 text-blue-500 font-medium mt-1 p-1 bg-black shadow-3xl rounded-md bg-opacity-50"
              onChange={ handleInputYearChange }
            /> :
            <></>
        }
        {/* {
          contentType === "career" ?
            <span className="absolute top-0 right-0 text-xl opacity-25 font-medium">{ selectedYear }</span> :
            <></>
        } */}
      </div>
    </>
  );
};
export default TimelineContent;