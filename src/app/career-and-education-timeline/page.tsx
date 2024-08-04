"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';
// import styles from './styles.module.scss';
import { Timeline, WavyBackground, CareerTimelineContent, EducationTimelineContent } from '@/src/components';

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function CareerAndEducationTimelinePage() {
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

    // TODO - When rendering this out, make sure that the last position doesn't share with the one before in the same year (2023); should only show the last when it starts

  ]


  const sortedContentArr = sortContentArr(contentArr);
  const combinedYearsArr = combineYears(sortedContentArr);
  const [selectedYear, setSelectedYear] = useState(combinedYearsArr[0]);

  const selectedCareerContent = useMemo(() => {
    const contentToSelect: CareerTimelineContent[] = [];

    for (let i = 0; i < sortedContentArr.length; i++) {
      const contentObj = sortedContentArr[i];

      // NOTE - Setting selectedContent here (if the selectedYear sits in between the contentObj's start and end year (inclusive))
      if (selectedYear >= contentObj.yearStart) {
        if ((contentObj?.yearEnd && selectedYear <= contentObj?.yearEnd) || contentObj.isPresent) {
          if (contentObj.type === "career") {
            contentToSelect.push(contentObj as CareerTimelineContent);
          }
        }
      }
    }

    return contentToSelect;
  }, [selectedYear, sortedContentArr]);


  const selectedEducationContent = useMemo(() => {
    const contentToSelect: EducationTimelineContent[] = [];

    for (let i = 0; i < sortedContentArr.length; i++) {
      const contentObj = sortedContentArr[i];

      // NOTE - Setting selectedContent here (if the selectedYear sits in between the contentObj's start and end year (inclusive))
      if (selectedYear >= contentObj.yearStart) {
        if ((contentObj?.yearEnd && selectedYear <= contentObj?.yearEnd) || contentObj.isPresent) {
          if (contentObj.type === "education") {
            contentToSelect.push(contentObj as EducationTimelineContent);
          }
        }
      }
    }

    return contentToSelect;
  }, [selectedYear, sortedContentArr]);


  /**
 * Sorts contentArr by yearStart
 */
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
      <WavyBackground containerClassName="absolute top-0 left-0 right-0 bottom-0" className="w-full" />
      <div className="absolute top-0 bottom-0 left-0 right-0 p-6">
        <div className="w-full h-full border">
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-[40%] border flex flex-col justify-center items-center">
              <b>{ selectedYear }</b>
              <CareerTimelineContent selectedYear={ selectedYear } selectedContent={ selectedCareerContent } />
            </div>
            <div className="w-full border grow flex flex-col justify-center items-center px-6 py-3 relative">
              <Timeline timelineYears={ combinedYearsArr } selectedYear={ selectedYear } setSelectedYear={ setSelectedYear } />
            </div>
            <div className="w-full h-[40%] border flex flex-col justify-center items-center">
              <b>{ selectedYear }</b>
              <EducationTimelineContent selectedYear={ selectedYear } selectedContent={ selectedEducationContent } />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
