"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { createNoise3D } from "simplex-noise";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerAndEducationTimelineContent = () => {
  
  return (
    <>
      <div className='h-full flex justify-center items-center'>
        <span className='font-medium text-3xl'>Coming soon!</span>
      </div>
    </>
  );
};
export default CareerAndEducationTimelineContent;