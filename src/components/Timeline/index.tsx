"use client";
import React, { useState } from "react";

import { Slider, SliderChangeEvent } from 'primereact/slider';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Timeline = ({ 
  timelineYears,
  selectedYear,
  setSelectedYear,
}: TimelineProps) => {
  // NOTE - Sorts the content array by yearStart
  // const combinedYearsArr = [];
  // const sortedContentArr = contentArr.sort((a, b) => a.yearStart - b.yearStart);

  // for (let i = 0; i < sortedContentArr.length; i++) {
  //   combinedYearsArr.push(sortedContentArr[i].yearStart);
  //   combinedYearsArr.push(sortedContentArr[i].yearEnd);
  // }
  // const timelineYears = new Set(combinedYearsArr);

  // const [selectedYear, setSelectedYear] = useState(combinedYearsArr[0]);
  const [sliderValue, setSliderValue] = useState<[number, number] | number>();

  function handleYearClick(e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>, year: number, yearIndex?: number) {
    setSelectedYear(year);
  }

  function handleSliderChange(e: SliderChangeEvent) {
    // console.log(e);
    // console.log(e.value);
    // console.log(slideValueToYear(e.value as number, timelineYears));
    setSliderValue(e.value);
    setSelectedYear(slideValueToYear(e.value as number, timelineYears));
  }

  function slideValueToYear(value: number, timelineYears: number[]) {
    // NOTE - The slider value is a percentage, so we need to convert it to a year
    // NOTE - We can do this by multiplying the value by the number of years in the timeline
    const valuePercentage = value / 100;

    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);

    const yearRange = maxYear - minYear;
    const year = minYear + (yearRange * valuePercentage);
    return Math.floor(year);


    // const yearIndex = Math.floor(value * (timelineYears.length - 1));
    // return timelineYears[yearIndex];
  }

  return (
    <>
      {/* TODO - Make line absolute positioned; make it extend end-to-end in the container BEHIND THE DOTS */ }
      {/* <div className="line w-10 h-[1px] bg-white">
            
            </div> */}
      {/* TODO - Superimpose slider component over timeline so it can be scrolled by that...? */ }
      {/* NOTE - https://primereact.org/slider/ */ }
      {/* NOTE - -left-1.5 is used to account for the radius of the circle so it can be properly centered */ }
      <div className="flex gap-x-2 relative w-full justify-between">
        { 
          [...timelineYears].map((year, i) =>
            <div key={i}>
              <div className="flex flex-col items-center relative">
                <div className="flex">

                  <div className={ cn(styles.timelineButton, "circle border w-3 h-3 rounded-full shadow-3xl absolute -left-1.5 z-20 cursor-pointer", (year === selectedYear) ? styles.selected : "bg-white")} onClick={ (e) => handleYearClick(e, year, i) }></div>
                </div>
                <span className={ cn("absolute top-3 cursor-pointer", (year === selectedYear) ? "text-blue-500 font-medium" : "text-white")} onClick={ (e) => handleYearClick(e, year, i) }>{ year }</span>
              </div>
            </div>
          ) 
        }
        {/* <div className="line bg-transparent h-1 w-full absolute top-1 z-10 shadow-3xl"> */}
          {/* NOTE - This appears to be the same length without modification, but need to position in front of line */}
          <Slider 
            value={ sliderValue } 
            onChange={ handleSliderChange } 
            pt={ {
              root: {
                style: {
                  // zIndex: '20',
                  // height: '0.25rem',
                },
                className: "absolute top-1 w-full z-10 shadow-3xl h-1 bg-slate-700",
              },
            } }
          />
        {/* </div> */}
        
      </div>
    </>
  );
};
export default Timeline;