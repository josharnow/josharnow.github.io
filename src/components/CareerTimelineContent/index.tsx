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
      <div className="relative h-full w-full flex justify-center items-center">
        <div className={cn(`grid grid-cols-${selectedContent.length} w-full h-full gap-2`)}>
          {
            selectedContent.map((item: CareerTimelineContent, index: number) => {
              return (
                <div key={ index } className="flex flex-col items-center justify-center px-2 pt-6 pb-2">
                  <h1>{ item.yearStart }</h1>
                  <h1>{ item.institution }</h1>
                  {/* <h1>{item.title}</h1> */ }
                  {/* <p>{item.description}</p> */ }
                </div>
              );
            })
          }
        </div>
        <div className='absolute top-0 left-0 text-2xl opacity-25 font-medium'>Career</div>
      </div>
    </>
  );
};
export default CareerTimelineContent;