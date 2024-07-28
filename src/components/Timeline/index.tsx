"use client";
import React, { useState } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type TimelineProps = {
  // className?: string;
  // fill?: string;
  contentArr: Content[];
};

type Content = {
  yearStart: number;
  yearEnd: number;
  content: string;
};


// TODO - Make content into type

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Timeline = ({ 
  contentArr
}: TimelineProps) => {
  // NOTE - Sorts the content array by yearStart
  const combinedYearsArr = [];
  const sortedContentArr = contentArr.sort((a, b) => a.yearStart - b.yearStart);

  for (let i = 0; i < sortedContentArr.length; i++) {
    combinedYearsArr.push(sortedContentArr[i].yearStart);
    combinedYearsArr.push(sortedContentArr[i].yearEnd);
  }
  const timelineYears = new Set(combinedYearsArr);

  const [selectedYear, setSelectedYear] = useState(combinedYearsArr[0]);


  function handleYearClick(e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>, year: number, yearIndex?: number) {
    return setSelectedYear(year);
  }

  return (
    <>
      {/* TODO - Make line absolute positioned; make it extend end-to-end in the container BEHIND THE DOTS */ }
      {/* <div className="line w-10 h-[1px] bg-white">
            
            </div> */}
      {/* TODO - Superimpose slider component over timeline so it can be scrolled by that...? */ }
      {/* NOTE - https://primereact.org/slider/ */ }
      <div className="flex gap-x-2 relative w-full justify-between">
        { 
          [...timelineYears].map((year, i) =>
            // <ObjectRow key={ i } />
            <>
              <div key={i}>
                <div className="flex flex-col items-center relative">
                  <div className="flex">
                    {/* NOTE - -left-1.5 is used to account for the radius of the circle so it can be properly centered */ }
                    <div className="circle border w-3 h-3 rounded-full bg-blue-500 absolute -left-1.5 z-20 cursor-pointer" onClick={ (e) => handleYearClick(e, year, i) }></div>
                  </div>
                  <span className="absolute top-3 cursor-pointer" onClick={ (e) => handleYearClick(e, year, i) }>{ year }</span>
                </div>
              </div>
            </>
          ) 
        }
        <div className="line bg-white h-1 w-full absolute top-1 z-10"></div>
      </div>
    </>
  );
};
export default Timeline;