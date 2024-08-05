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
        <CardSpotlight className={ cn(styles.card, "rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-transparent") }
          >
          {/* TODO - Add  allow-discrete transition (need separate styles) */}
        {/* <CardSpotlight className="border border-red-500 rounded-lg w-full h-full p-2 shadow-3xl shadow-white"> */}
          <h1>{ content.yearStart }</h1>
          <h1>{ content.institution }</h1>
        </CardSpotlight>
      </div>
    </>
  );
};

export default CareerTimelineCard;