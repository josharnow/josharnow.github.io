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
      Education
      {
        selectedContent.map((item: EducationTimelineContent, index: number) => {
          return (
            <div key={index}>
              <h1>{item.yearStart}</h1>
              <h1>{ item.institution }</h1>
              {/* <h1>{item.title}</h1> */}
              {/* <p>{item.description}</p> */}
            </div>
          );
        })
      }
    </>
  );
};
export default EducationTimelineContent;