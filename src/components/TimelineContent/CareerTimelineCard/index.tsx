"use client";
import React from "react";
import { CardSpotlight } from "@/src/components";
// import Link from "next/link";
import styles from '../styles.module.scss';
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerTimelineCard = ({ content, className }: { 
  content: CareerTimelineContent;
  className?: string;
}) => {

  return (
    <>
      <div className={ cn(className ? className : "", "flex flex-col items-center justify-center pt-7") }>
        {/* <CardSpotlight className={ cn(styles.card, "border border-red-500 rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-transparent") }
          style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
          > */}
        <CardSpotlight className={ cn(styles.card, "rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-black bg-opacity-80") }
          >
          {/* TODO - Use CSS grid */}
          <div className="grid grid-cols-2">
            <div className="flex h-fit">
              <h1>{ content.yearStart }</h1>&nbsp;–&nbsp;<h1>{ content.yearEnd ? content.yearEnd : "Present" }</h1>
            </div>
            <h6 className="text-xs sm:text-sm h-fit" style={ { textAlign: "right" } }><i>{ content.location }</i></h6>
          </div>


          {/* <div className="flex justify-between w-full text-xs sm:text-sm">
            <div className="flex">
              <h1>{ content.yearStart }</h1>&nbsp;–&nbsp;<h1>{ content.yearEnd ? content.yearEnd : "Present" }</h1>
            </div>
            <h6 className="text-xs sm:text-sm" style={ { textAlign: "right" } }><i>{ content.location }</i></h6>
          </div> */}
          <div className="flex">
            <h1 className="font-medium">{ content.institution }</h1>
          </div>
        </CardSpotlight>
      </div>
    </>
  );
};

export default CareerTimelineCard;