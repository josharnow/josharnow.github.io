"use client";
import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import { Timeline, WavyBackground, TimelineContent } from '@/src/components';

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
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1')}>
        <div>
          <span>&bullet;</span>&nbsp;<span>Excelled at a complete pre-med curriculum as I pursued two degrees in unrelated fields</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Engaged in many extracurricular activities including musical ensembles, residence life leadership, Greek life leadership, & more</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Spent a semester abroad at Cambridge University to study economics & broaden my horizons by exploring Europe</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Founders Scholarship recipient</span>
        </div>
      </div>,
      institution: "Tulane University",
      location: "New Orleans, LA",
      type: "education",
      degrees: [(<span key={ 1 }>Bachelor of Science <span className='font-normal'>in</span> Economics, <i className='font-normal'>cum laude</i></span>), (<span key={ 2 }>Bachelor of Arts <span className='font-normal'>in</span> Political Economy, <i className='font-normal'>cum laude</i></span>)],
      GPA: 3.7,
    },
    {
      yearStart: 2018,
      yearEnd: 2019,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Expanded on optional pre-med coursework related to my personal interests, such as cancer biology</span>
        </div>
        <div className='flex flex-col'>
          <div>
            <span>&bullet;</span>&nbsp;<span>Prepared a medical school application packet during this time</span>
          </div>
          <div className='pl-6'>
            <span>&bullet;</span>&nbsp;<span>Shadowed a private practice physician & an ER physician</span>
          </div>
          <div className='pl-6'>
            <span>&bullet;</span>&nbsp;<span>Scored above average on the MCAT</span>
          </div>
          <div className='pl-6'>
            <span>&bullet;</span>&nbsp;<span>Continued regularly volunteering as an EMT (2017-2021)</span>
          </div>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Opted not to send out my completed application packet due to COVID lockdowns</span>
        </div>
      </div>,
      institution: "Stony Brook University",
      location: "Stony Brook, NY",
      type: "education",
      degrees: [(<span key={ 1 }>Post-Baccalaureate Pre-Health Program</span>),],
    },
    {
      yearStart: 2020,
      yearEnd: 2021,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Seized an opportunity to study law amidst mandated lockdowns</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Forwent degree completion due to a health issue, post-lockdown university policies, & finding my passion in software engineering</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Dean’s Fellowship Scholarship recipient</span>
        </div>
      </div>,
      institution: "Touro Law Center",
      location: "Islip, NY (Remote)",
      type: "education",
      degrees: [(<span key={ 1 }>Juris Doctor (incomplete)</span>),],
    },
    {
      yearStart: 2021,
      yearEnd: 2021,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Completed a full-time online coding bootcamp focused on full-stack software development within three tech stacks</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Studied React, Python, & Java frameworks in addition to HTML, CSS, & vanilla JavaScript</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Obtained certifications after receiving excellent marks on completed projects from each tech stack</span>
        </div>
      </div>,
      institution: "Coding Dojo",
      location: "Remote",
      type: "education",
      degrees: [(<span key={ 1 }>Full-Stack Software Development Bootcamp</span>),],
    },
    {
      yearStart: 2013,
      yearEnd: 2015,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Addressed concerns & managed emergencies for dozens of residents while maintaining order within the dorms</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Planned & coordinated activities with fellow RAs on behalf of our residents</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Maintained a high academic standing & acted as a social role model for residents</span>
        </div>
      </div>,
      institution: "Tulane University",
      location: "New Orleans, LA",
      type: "career",
      position: "Resident Advisor",
    },
    {
      yearStart: 2014,
      yearEnd: 2015,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Interpreted annual financial reports to determine the creditworthiness of municipalities</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Researched bond pricing and related information to assist in credit analysis, making extensive use of Bloomberg terminals</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Developed an understanding of the intricacies of the municipal bond market</span>
        </div>
      </div>,
      institution: "Capital One",
      location: "Melville, NY",
      type: "career",
      position: "Municipal Finance Credit Analyst (Intern)",
    },
    {
      yearStart: 2016,
      yearEnd: 2018,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Assessed & reported on the financial performance of middle market firms with annual revenues up to $1 billion</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Recommended extensions of credit based on underwriting criteria & qualities of the borrower</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Analyzed borrowers’ business prospects through quantitative analysis of financial statements while assessing qualitative aspects & information gathered from client meetings</span>
        </div>
        <div className='flex flex-col'>
          <div>
            <span>&bullet;</span>&nbsp;<span>Participated in Capital One’s Commercial Banking Development Program to receive specialized skill training over the course of my employment</span>
          </div>
          <div className='pl-6'>
            <span>&bullet;</span>&nbsp;<span>Received education & exposure to many aspects of banking at Capital One sites around the country</span>
          </div>
        </div>
      </div>,
      institution: "Capital One",
      location: "Melville, NY",
      type: "career",
      position: "Middle Market C&I Credit Analyst",
    },
    {
      yearStart: 2018,
      yearEnd: 2021,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Reviewed & analyzed offering memorandums to recommend the acquisition of residential & commercial real estate</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Performed tasks including annual cash flow analysis, rent roll review, property improvement plans, cash flow projections, & review of third-party reports</span>
        </div>
      </div>,
      institution: "Citiscape Realty Advisors, Inc.",
      location: "Huntington, NY",
      type: "career",
      position: "Financial Analyst",
    },
    {
      yearStart: 2021,
      yearEnd: 2022,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Expanded upon ideas by using various languages to independently design full-stack applications</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Educated myself on languages and frameworks I was interested in but didn’t have exposure to</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Familiarized myself with common project management philosophies and frameworks like Agile & Scrum</span>
        </div>
      </div>,
      institution: "Self-Employed",
      location: "Huntington, NY",
      type: "career",
      position: "Software Developer",
    },
    {
      yearStart: 2022,
      yearEnd: 2023,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Created full-stack webapps for clients related to surrogacy services & sales/marketing</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Integrated various forms of analytics into the systems & rendered data using ChartJS</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Primarily used Python/Flask alongside jQuery & MySQL/MariaDB in the stack & deployed applications to AWS to be accessed by clients’ customers & employees on the web</span>
        </div>
      </div>,
      institution: "Two Fish Creative, Inc.",
      location: "W. Palm Beach, FL / Remote (Hybrid)",
      type: "career",
      position: "Developer",
    },
    {
      yearStart: 2023,
      // yearEnd: 2024,
      isPresent: true,
      bodyElement: <div className={ cn(styles.bodyElement, 'grid grid-cols-1 gap-1') }>
        <div>
          <span>&bullet;</span>&nbsp;<span>Independently created/published native iOS & Android applications & designed a server & databases to integrate with</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Utilized TypeScript with the Vue.js Composition API to create the end user frontend, Ionic/Capacitor to build native mobile apps, Python/Flask to build the server & admin portal, & MySQL/MariaDB to handle the database</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Heavily used Mapbox GL JS & GeoJSON data to render maps & ChartJS to provide analytics</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Introduced new developers to the project & led the development process while utilizing scrum/agile methodologies, performing code reviews, & managing the project timeline</span>
        </div>
        <div>
          <span>&bullet;</span>&nbsp;<span>Exceeded client expectations after former developers could not satisfy them which led to contract renewals with our company at higher rates</span>
        </div>
      </div>,
      institution: "Two Fish Creative, Inc.",
      location: "W. Palm Beach, FL / Remote (Hybrid)",
      type: "career",
      position: "Team Lead",
      supersedesOtherPositions: true,
    },
  ]


  const sortedContentArr = sortContentArr(contentArr);
  const combinedYearsArr = combineYears(sortedContentArr);
  const [selectedYear, setSelectedYear] = useState(combinedYearsArr[0]);

  const [sliderValue, setSliderValue] = useState<[number, number] | number>();

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


  // NOTE - This validation logic is separate from the logic in useEffect
  function handleInputYearChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if (parseInt(e.target.value) >= Math.min(...combinedYearsArr) || parseInt(e.target.value) <= Math.max(...combinedYearsArr)) {
      // if (parseInt(e.target.value) < Math.min(...timelineYears)) {
      //   return setSelectedYear(Math.min(...timelineYears));
      // }
      setSelectedYear(parseInt(e.target.value));
      setSliderValue(yearToSliderValue(parseInt(e.target.value), combinedYearsArr));
    }
  }

  /**
 * Converts a year value to a slider value based on the given timeline years.
 * @param year - The year value to convert.
 * @param timelineYears - An array of timeline years.
 * @returns The corresponding slider value.
 */
  function yearToSliderValue(year: number, timelineYears: number[]) {
    const minYear = Math.min(...timelineYears);
    const maxYear = Math.max(...timelineYears);

    const yearRange = maxYear - minYear;
    const yearPercentage = (year - minYear) / yearRange;
    return yearPercentage * 100;
  }
  
  return (
    <>
      <WavyBackground containerClassName="absolute top-0 left-0 right-0 bottom-0 bg-black" className="w-full" />
      <div className="absolute top-0 bottom-0 left-0 right-0 p-2 sm:p-4">
        <div className="w-full h-full">
          <div className="w-full h-full flex flex-col relative">
            <div className="w-full h-[40%] flex justify-center items-center">
              <TimelineContent 
                selectedYear={ selectedYear } 
                selectedContent={ selectedCareerContent } 
                contentType='career' 
                handleInputYearChange={ handleInputYearChange }
              />
            </div>
            <div className="w-full grow flex flex-col justify-center items-center px-6 py-3 relative">
              <Timeline 
                timelineYears={ combinedYearsArr } 
                selectedYear={ selectedYear } 
                setSelectedYear={ setSelectedYear } 
                sliderValue={ sliderValue as [number, number] | number }
                setSliderValue={ setSliderValue }
                yearToSliderValue={ yearToSliderValue }
              />
            </div>
            <div className="w-full h-[40%] flex justify-center items-center">
              <TimelineContent 
                selectedYear={ selectedYear } 
                selectedContent={ selectedEducationContent } 
                contentType='education' 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
