"use client";
import React, { useEffect, useRef, useState } from "react";
import { Timeline, WavyBackground } from "@/src/components";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  selectedContent: EducationTimelineContent[];
  selectedYear: number;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const EducationTimelineContent = ({selectedContent, selectedYear}: Props) => {

  console.log(selectedContent);
  return (
    <>
      {/* TODO - Make component for each stepper panel */ }
      <div className="relative h-full w-full flex justify-center items-center">
        <div className={ cn(`grid grid-cols-${selectedContent.length} w-full h-full gap-2`) }>
          {
            selectedContent.map((item: EducationTimelineContent, index: number) => {
              return (
                <div key={ index } className="flex flex-col items-center justify-center px-2 pb-6 pt-2">
                  <h1>{ item.yearStart }</h1>
                  <h1>{ item.institution }</h1>
                  {/* <h1>{item.title}</h1> */ }
                  {/* <p>{item.description}</p> */ }
                </div>
              );
            })
          }
        </div>
        <div className='absolute bottom-0 left-0 text-2xl opacity-25 font-medium'>Education</div>
      </div>
    </>
  );
};
export default EducationTimelineContent;