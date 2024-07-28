"use client";
import React from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type TimelineProps = {
  // className?: string;
  // fill?: string;
  contentArr: object[];
};

// TODO - Make content into type

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Timeline = ({ 
  contentArr
}: TimelineProps) => {
  for (let i = 0; i < contentArr.length; i++) {
    console.log(contentArr[i]);
  }
  // TODO - Extend timeline based on contentArr length


  return (
    <>
      {/* TODO - Make line absolute positioned; make it extend end-to-end in the container BEHIND THE DOTS */ }
      {/* <div className="line w-10 h-[1px] bg-white">
            
            </div> */}
      {/* TODO - Superimpose slider component over timeline so it can be scrolled by that...? */ }
      {/* NOTE - https://primereact.org/slider/ */ }
      <div className="flex gap-x-2 relative w-full justify-between">
        <div className="flex flex-col items-center relative">
          <div className="flex">
            {/* NOTE - -left-1.5 is used to account for the radius of the circle so it can be properly centered */}
            <div className="circle border w-3 h-3 rounded-full bg-blue-500 absolute -left-1.5 z-20"></div>
          </div>
          <span className="absolute top-3">2012</span>
        </div>
        
        <div className="flex flex-col items-center relative">
          <div className="flex">
            <div className="circle border w-3 h-3 rounded-full bg-blue-500 absolute -left-1.5 z-20"></div>
          </div>
          <span className="absolute top-3">2014</span>
        </div>
        <div className="flex flex-col items-center relative">
          <div className="flex">
            <div className="circle border w-3 h-3 rounded-full bg-blue-500 absolute -left-1.5 z-20"></div>
          </div>
          <span className="absolute top-3">Present</span>
        </div>
        





        
        <div className="line bg-white h-[1px] w-full absolute top-1.5 z-10"></div>
      </div>
    </>
  );
};
export default Timeline;