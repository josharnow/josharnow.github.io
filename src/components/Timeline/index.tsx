"use client";
import React, { useRef, useEffect } from "react";

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
  sliderValue,
  setSliderValue,
  yearToSliderValue,
}: TimelineProps) => {
  // const [sliderValue, setSliderValue] = useState<[number, number] | number>();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      const handleInputKeyPress = (e: KeyboardEvent) => {
        const inputValue = parseInt(e.key);
        const minYear = Math.min(...timelineYears);
        const maxYear = Math.max(...timelineYears);
        if (isNaN(inputValue)) {
          e.preventDefault();
        }
        if (inputRef?.current?.value) {
          if (inputRef.current.value?.length >= 3) {
            const inputYear = parseInt(inputRef.current?.value.toString().concat(e.key) as string);
            if (inputYear < minYear || inputYear > maxYear) {
              e.preventDefault();
            } 
          }
        } 


      };
      inputRef.current.addEventListener("keypress", handleInputKeyPress);
      return () => {
        inputRef.current?.removeEventListener("keypress", handleInputKeyPress);
      };
    }
  }
  , [inputRef, timelineYears]);

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

  /**
   * Handles the click event when a year is clicked.
   * 
   * @param e - The click event object.
   * @param year - The selected year.
   * @param yearIndex - The index of the selected year.
   */
  function handleYearClick(e: React.MouseEvent<HTMLDivElement | HTMLSpanElement, MouseEvent>, year: number, yearIndex?: number) {
    setSelectedYear(year);
    setSliderValue(yearToSliderValue(year, timelineYears));
  }

  /**
   * Handles the change event of the slider.
   * 
   * @param e - The slider change event.
   */
  function handleSliderChange(e: SliderChangeEvent) {
    setSliderValue(e.value);
    setSelectedYear(slideValueToYear(e.value as number, timelineYears));
  }


  /**
   * Converts a slider value to a corresponding year based on the timeline years.
   * @param value - The slider value (percentage).
   * @param timelineYears - An array of timeline years.
   * @returns The corresponding year based on the slider value.
   */
  function slideValueToYear(value: number, timelineYears: number[]) {
    // NOTE - The slider value is a percentage, so we need to convert it to a year
    // NOTE - We can do this by multiplying the value by the number of years in the timeline
    const valuePercentage = value / 100;

    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);

    const yearRange = maxYear - minYear;
    const year = minYear + yearRange * valuePercentage;
    return Math.floor(year);
  }

  return (
    <>
      <div className="w-full">
        <div className="flex gap-x-2 relative w-full justify-between">
          { 
            [...generateYearRange(timelineYears)].map((year, i) =>
              <div key={i}>
                <div className="flex flex-col items-center relative">
                  <div className="flex">
                    {/* NOTE - -left-1.5 is used to account for the radius of the circle so it can be properly centered */ }
                    <div className={ cn(
                      styles.timelineButton, 
                      "circle border size-3 rounded-full shadow-3xl absolute -left-1.5 z-20 cursor-pointer -top-1", 
                      (year === selectedYear) ? styles.selected : "bg-white",
                      (timelineYears.includes(year)) ? "" : "hidden"
                    )} onClick={ (e) => handleYearClick(e, year, i) }></div>
                  </div>
                  {/* TODO - Transition animations for box that appears behind selected year */}
                  <span className={ 
                    cn(
                      "absolute cursor-pointer flex flex-col", 
                      (i % 2 === 0) ? "top-4" : "bottom-3",
                      (year === selectedYear) ? styles.selectedYear : styles.unselectedYear,
                      (year === selectedYear) ? "text-blue-500 font-medium mt-1 p-1 bg-black shadow-3xl rounded-md bg-opacity-50 text-base sm:text-2xl" : "text-white text-xs sm:text-xl font-medium",
                      (timelineYears.includes(year)) ? "" : "hidden"
                    )} onClick={ (e) => handleYearClick(e, year, i) }>
                      { 
                        (year === currentYear) 
                        // ? (<><span className="text-center">{ year }</span><span>(Present)</span></>)
                        ? ("Present")
                          : year
                      }
                      </span>
                </div>
              </div>
            ) 
          }
            <Slider 
              value={ sliderValue } 
              onChange={ handleSliderChange } 
              pt={ {
                root: {
                  className: "absolute top-0 w-full shadow-3xl h-1 bg-slate-700 cursor-pointer",
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
      </div>
    </>
  );
};
export default Timeline;