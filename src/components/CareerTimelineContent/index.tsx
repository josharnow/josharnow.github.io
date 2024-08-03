"use client";
import React, { useEffect, useRef, useState } from "react";
import { Timeline, WavyBackground } from "@/src/components";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Props = {
  selectedContent: CareerTimelineContent[];
  selectedYear: number;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerTimelineContent = ({ selectedContent, selectedYear }: Props) => {

  return (
    <>
      {/* TODO - Make component for each stepper panel */ }
      Career
      {
        selectedContent.map((item: CareerTimelineContent, index: number) => {
          return (
            <div key={ index }>
              <h1>{ item.yearStart }</h1>
              <h1>{ item.institution }</h1>
              {/* <h1>{item.title}</h1> */ }
              {/* <p>{item.description}</p> */ }
            </div>
          );
        })
      }
    </>
  );
};
export default CareerTimelineContent;