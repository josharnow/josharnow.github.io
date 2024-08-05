"use client";
import React from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  selectedContent: EducationTimelineContent[] | CareerTimelineContent[];
  selectedYear: number;
  contentType: "education" | "career";
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TimelineContent = ({selectedContent, selectedYear, contentType}: Props) => {

  return (
    <>
      {/* TODO - Make component for each stepper panel */ }
      <div className="relative h-full w-full flex justify-center items-center">
        <div className={ cn(`grid grid-cols-${selectedContent.length} w-full h-full gap-2`) }>
          {
            selectedContent.map((item: EducationTimelineContent | CareerTimelineContent, index: number) => {
              return (
                contentType === "career" ?
                  <div key={ index } className="flex flex-col items-center justify-center px-2 pt-6 pb-2">
                    <h1>{ item.yearStart }</h1>
                    <h1>{ item.institution }</h1>
                  </div> :
                  <div key={ index } className="flex flex-col items-center justify-center px-2 pb-6 pt-2">
                    <h1>{ item.yearStart }</h1>
                    <h1>{ item.institution }</h1>
                  </div>
              );
            })
          }
          {/* TODO - Make cards for Career & Timeline */}
        </div>
        {
          contentType === "career" ? 
            <div className='absolute top-0 left-0 text-2xl opacity-25 font-medium'>Career</div> :
            <div className='absolute bottom-0 left-0 text-2xl opacity-25 font-medium'>Education</div>
        }
      </div>
    </>
  );
};
export default TimelineContent;