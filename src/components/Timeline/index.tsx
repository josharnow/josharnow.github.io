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

  // TODO - Have timeline end on "Present" instead

  const [sliderValue, setSliderValue] = useState<[number, number] | number>();

  const currentYear = timelineYears[timelineYears.length - 1];

  /**
   * Generates an array of years within the range of the given timeline years.
   *
   * @param timelineYears - An array of timeline years.
   * @returns An array of years within the range of the given timeline years.
   */
  function generateYearRange(timelineYears: number[]) {
    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);
    const yearRange = maxYear - minYear + 1;
    const yearArray = Array.from({ length: yearRange }, (_, index) => minYear + index);
    return yearArray;
  };

  function handleYearClick(e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>, year: number, yearIndex?: number) {
    console.log(year);
    console.log(yearToSliderValue(year, timelineYears));
    setSelectedYear(year);
    setSliderValue(yearToSliderValue(year, timelineYears));
  }

  function handleSliderChange(e: SliderChangeEvent) {
    // console.log(e);
    // console.log(e.value);
    console.log(slideValueToYear(e.value as number, timelineYears));
    setSliderValue(e.value);
    setSelectedYear(slideValueToYear(e.value as number, timelineYears));
  }

  // function yearToSliderValue(year: number, timelineYears: Set<number>) {
  //   const yearsArray = [...timelineYears];
  //   const yearIndex = yearsArray.indexOf(year);
  //   return yearIndex;
  // }

  // function slideValueToYear(sliderValue: number, timelineYears: Set<number>) {
  //   const yearsArray = [...timelineYears];
  //   return yearsArray[sliderValue];
  // }
  function slideValueToYear(value: number, timelineYears: number[]) {
    // NOTE - The slider value is a percentage, so we need to convert it to a year
    // NOTE - We can do this by multiplying the value by the number of years in the timeline
    const valuePercentage = value / 100;

    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);

    const yearRange = maxYear - minYear;
    const year = minYear + (yearRange * valuePercentage);
    return Math.floor(year);
  }

  function yearToSliderValue(year: number, timelineYears: number[]) {
    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);

    const yearRange = maxYear - minYear;
    const yearPercentage = (year - minYear) / yearRange;
    return yearPercentage * 100;
  }

  return (
    <>
      {/* TODO - Make line absolute positioned; make it extend end-to-end in the container BEHIND THE DOTS */ }
      {/* <div className="line w-10 h-[1px] bg-white">
            
            </div> */}
      {/* TODO - Superimpose slider component over timeline so it can be scrolled by that...? */ }
      {/* NOTE - https://primereact.org/slider/ */ }
      {/* NOTE - -left-1.5 is used to account for the radius of the circle so it can be properly centered */ }
      {/* <div className="flex gap-x-2 relative w-full justify-between"> */}
      <div className="flex gap-x-2 relative w-full justify-between">
        { 
          // [...timelineYears].map((year, i) =>
          [...generateYearRange(timelineYears)].map((year, i) =>
            <div key={i}>
              <div className="flex flex-col items-center relative">
                <div className="flex">

                  <div className={ cn(
                    styles.timelineButton, 
                    "circle border w-3 h-3 rounded-full shadow-3xl absolute -left-1.5 z-20 cursor-pointer", 
                    (year === selectedYear) ? styles.selected : "bg-white",
                    (timelineYears.includes(year)) ? "" : "hidden"
                  )} onClick={ (e) => handleYearClick(e, year, i) }></div>
                </div>
                {/* TODO - add background behind selected year so it stands out */}
                {/* TODO - Transition animations for box that appears behind selected year */}
                <span className={ 
                  cn(
                    "absolute top-3 cursor-pointer flex flex-col", 
                    (year === selectedYear) ? "text-blue-500 font-medium mt-1 p-1 bg-black shadow-3xl rounded-md bg-opacity-50 text-2xl" : "text-white text-xl",
                    (timelineYears.includes(year)) ? "" : "hidden"
                  )} onClick={ (e) => handleYearClick(e, year, i) }>
                    { 
                      (year === timelineYears[timelineYears.length - 1]) 
                      // ? (<><span className="text-center">{ year }</span><span>(Present)</span></>)
                      ? ("Present")
                        : year
                    }
                    </span>
              </div>
            </div>
          ) 
        }
        {/* <div>
          <div className="flex flex-col items-center relative">
            <div className="flex">

              <div className={ cn(styles.timelineButton, "circle border w-3 h-3 rounded-full shadow-3xl absolute -left-1.5 z-20 cursor-pointer", (currentYear === selectedYear) ? styles.selected : "bg-white") } onClick={ (e) => handleYearClick(e, year, i) }></div>
            </div>
            <span className={ cn("absolute top-3 cursor-pointer", (currentYear === selectedYear) ? "text-blue-500 font-medium" : "text-white") } onClick={ (e) => handleYearClick(e, timelineYears[timelineYears.length - 1], timelineYears.length - 1) }>Present</span>
          </div>
        </div> */}
          {/* NOTE - This appears to be the same length without modification, but need to position in front of line */}
          <Slider 
            value={ sliderValue } 
            onChange={ handleSliderChange } 
            pt={ {
              root: {
                className: "absolute top-1 w-full shadow-3xl h-1 bg-slate-700 cursor-pointer",
              },
              range: {
                className: "bg-blue-500 shadow-3xl",
              },
              handle: {
                className: cn(styles.sliderHandle, "bg-blue-500 shadow-3xl border border-2 top-0 w-6 h-6 fixed z-50"),
              },
            } }
          />
      </div>
    </>
  );
};
export default Timeline;