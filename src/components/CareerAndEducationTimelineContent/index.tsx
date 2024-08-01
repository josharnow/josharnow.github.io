"use client";
import React, { useEffect, useRef, useState } from "react";
import { Timeline, WavyBackground } from "@/src/components";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerAndEducationTimelineContent = () => {
  const contentArr: (EducationTimelineContent | CareerTimelineContent)[] = [
    {
      yearStart: 2012,
      yearEnd: 2016,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Tulane University",
      location: "New Orleans, LA",
      type: "education",
      degrees: [(<span key={ 1 }>Bachelor of Science in Economics, <i>cum laude</i></span>), (<span key={ 2 }>Bachelor of Arts in Political Economy, <i>cum laude</i></span>)],
      GPA: 3.7,
    },
    {
      yearStart: 2020,
      yearEnd: 2021,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Touro Law Center",
      location: "Islip, NY (Remote)",
      type: "education",
      degrees: [(<span key={ 1 }>Juris Doctor (incomplete)</span>),],
    },
    {
      // TODO - Figure out years I attended Stony Brook
      yearStart: 2021,
      yearEnd: 2021,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Coding Dojo",
      location: "Remote",
      type: "education",
      degrees: [(<span key={ 1 }>Full-Stack Software Development Bootcamp</span>),],
    },
    {
      // TODO - Figure out years I attended Stony Brook
      yearStart: 2018,
      yearEnd: 2019,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Stony Brook University",
      location: "Stony Brook, NY",
      type: "education",
      degrees: [(<span key={ 1 }>Post-Baccalaureate Pre-Health Program</span>),],
    },

    {
      yearStart: 2013,
      yearEnd: 2015,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Tulane University",
      location: "New Orleans, LA",
      type: "career",
      position: "Resident Advisor",
    },
    {
      yearStart: 2014,
      yearEnd: 2015,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Capital One",
      location: "Melville, NY",
      type: "career",
      position: "Municipal Finance Credit Analyst (Intern)",
    },
    {
      yearStart: 2016,
      yearEnd: 2018,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Capital One",
      location: "Melville, NY",
      type: "career",
      position: "Middle Market C&I Credit Analyst",
    },
    {
      yearStart: 2018,
      yearEnd: 2021,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Citiscape Realty Advisors, Inc.",
      location: "Huntington, NY",
      type: "career",
      position: "Financial Analyst",
    },
    {
      yearStart: 2021,
      yearEnd: 2022,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Self-Employed",
      location: "Huntington, NY",
      type: "career",
      position: "Software Developer",
    },
    {
      yearStart: 2022,
      yearEnd: 2023,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Two Fish Creative, Inc.",
      location: "West Palm Beach, FL / Remote (Hybrid)",
      type: "career",
      position: "Developer",
    },
    {
      yearStart: 2023,
      // yearEnd: 2024,
      isPresent: true,
      bodyElement: <div>BRIEFLY DESCRIBE / TALK ABOUT THIS TIME IN MY LIFE HERE. CAN TAKE STUFF FROM RESUME (if applicable)</div>,
      institution: "Two Fish Creative, Inc.",
      location: "West Palm Beach, FL / Remote (Hybrid)",
      type: "career",
      position: "Team Lead",
      supersedesOtherPositions: true,
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
      if (contentArr[i]?.yearEnd) {
        combinedYearsArr.push(contentArr[i]?.yearEnd);
      }
    }

    combinedYearsArr.push(currentYear);

    const combinedYearsSet = new Set(combinedYearsArr as number[]);
    return [...combinedYearsSet].sort((a, b) => a - b);
  }

  return (
    <>
    {/* TODO - Make component for each stepper panel */ }
      <WavyBackground containerClassName="absolute top-0 left-0 right-0 bottom-0" className="w-full" />
      <div className="absolute top-0 bottom-0 left-0 right-0 p-6">
        <div className="w-full h-full border">
          <div className="w-full h-full flex flex-col">
              <div className="w-full grow border flex flex-col justify-center items-center">
              <span>Career</span>
              <b>{ selectedYear }</b>
            </div>
            <div className="w-full grow border flex flex-col justify-center items-center px-6 py-3">
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