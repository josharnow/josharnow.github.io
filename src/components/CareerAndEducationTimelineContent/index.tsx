"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Timeline, WavyBackground } from "@/src/components";

import { createNoise3D } from "simplex-noise";

// import { Stepper, StepperChangeEvent } from 'primereact/stepper';
// import { StepperPanel } from 'primereact/stepperpanel';
// import { Button } from 'primereact/button';


import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerAndEducationTimelineContent = () => {
  const stepperRef = useRef(null);

  // function handleStepperClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
  //   if ((e.target as HTMLButtonElement).classList.contains('pi-arrow-left') || (e.target as HTMLSpanElement).textContent === 'Back') {
  //     // @ts-ignore
  //     stepperRef?.current?.prevCallback()
  //   } else if ((e.target as HTMLButtonElement).classList.contains('pi-arrow-right') || (e.target as HTMLSpanElement).textContent === 'Next') {
  //     // @ts-ignore
  //     stepperRef?.current?.nextCallback() 
  //   }
  // }
    
  const contentArr = [
    {
      yearStart: 2020,
      yearEnd: 2021,
      content: "Started working at company A"
    },
    {
      yearStart: 2016,
      yearEnd: 2019,
      content: "Graduated from university B"
    },
    {
      yearStart: 2018,
      yearEnd: 2018,
      content: "Started university B"
    },
    {
      yearStart: 2017,
      yearEnd: 2017,
      content: "Graduated from high school"
    },
    {
      yearStart: 2017,
      yearEnd: 2017,
      content: "Graduated from high school"
    },
  ]

  const sortedContentArr = sortContentArr(contentArr);
  const combinedYearsArr = combineYears(sortedContentArr);
  const [selectedYear, setSelectedYear] = useState(combinedYearsArr[0]);

  function sortContentArr(contentArr: TimelineContent[]) {
    return contentArr.sort((a, b) => a.yearStart - b.yearStart);
  }
  function combineYears(contentArr: TimelineContent[]) {
    const currentYear = new Date().getFullYear();
    const combinedYearsArr = [];

    for (let i = 0; i < contentArr.length; i++) {
      combinedYearsArr.push(contentArr[i].yearStart);
      combinedYearsArr.push(contentArr[i].yearEnd);
    }

    combinedYearsArr.push(currentYear);

    const combinedYearsSet = new Set(combinedYearsArr);
    return [...combinedYearsSet].sort((a, b) => a - b);
  }

  // function calculateTranslateX(year: number, timelineYears: number[]) {
  function getYearRange(timelineYears: number[]) {
    const yearRange = timelineYears[timelineYears.length - 1] - timelineYears[0];
    return yearRange;
  }

  function performTimelineYearTranslate(i: number, timelineYears: number[]) {
    const yearRange = getYearRange(timelineYears);
    return `calc(${i} * ${100}%)`;

    // TODO - figure out reference point... needd to be able to calculate the percentage of the timeline that each year represents
    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);
    const year = minYear + (yearRange * i);
    console.log(year)
    // console.log(minYear)
    // console.log(maxYear)
    // return `calc(${year} * ${100 / yearRange}%)`;
    // return `calc(${i} * ${100 / yearRange}%)`;
  }

  function calculateYearFlexBasis(year: number, timelineYears: number[]) {
    const yearRange = getYearRange(timelineYears);
    return `calc(${year} * ${100 / yearRange}%)`;
  }
  function calculateFlexGrow(year: number, timelineYears: number[]) {
    const yearRange = getYearRange(timelineYears);
    return `calc(${year} * ${100 / yearRange}%)`;
  }

  return (
    <>
    {/* TODO - Draw how I want component to look */}
    {/* TODO - Make my own component */}

    {/* TODO - Make component for each stepper panel */ }


    {/* <div className="w-full h-full px-6 py-10 sm:py-15 sm:px-24 md:px-20"> */}
      <WavyBackground containerClassName="absolute top-0 left-0 right-0 bottom-0" className="w-full" />

      <div className="absolute top-0 bottom-0 left-0 right-0 p-6">
      {/* <div className="w-full h-full p-6"> */}
        <div className="w-full h-full border">
          {/* TODO - Career card above */}
          {/* TODO - Timeline between */}
          {/* TODO - Education card below */}

          <div className="w-full h-full flex flex-col">
              <div className="w-full grow border flex flex-col justify-center items-center">
              <span>Career</span>
              <b>{ selectedYear }</b>
            </div>
            <div className="w-full grow border flex flex-col justify-center items-center p-3">
              <Timeline timelineYears={ combinedYearsArr } selectedYear={ selectedYear } setSelectedYear={ setSelectedYear } />
            </div>
            <div className="w-full grow border flex flex-col justify-center items-center">
              <span>Education</span>
              <b>{selectedYear}</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CareerAndEducationTimelineContent;