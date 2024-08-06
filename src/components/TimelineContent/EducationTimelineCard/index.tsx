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

const EducationTimelineCard = ({ content, className }: { 
  content: EducationTimelineContent;
  className?: string;
}) => {

  return (
    <>
      <div className={ cn(className ? className : "", "flex flex-col items-center justify-center pb-7")}>
        <CardSpotlight className={ cn(styles.card, "rounded-lg w-full h-full p-2 shadow-3xl shadow-blue-500 bg-black bg-opacity-80") }>
          <h1>{ content.yearStart }</h1>
          <h1>{ content.institution }</h1>
        </CardSpotlight>

          {/* { content.bodyElement } */}
      </div>
    </>
  );
};

export default EducationTimelineCard;