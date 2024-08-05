"use client";
import React from "react";
// import Link from "next/link";
// import styles from '../styles.module.scss';

const CareerTimelineCard = ({ content, className }: { 
  content: CareerTimelineContent;
  className?: string;
}) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className={ classNames(className ? className : "", "flex flex-col items-center justify-center pt-6") }>
        <div className="border border-red-500 rounded-lg w-full h-full p-2">
          <h1>{ content.yearStart }</h1>
          <h1>{ content.institution }</h1>
        </div>
      </div>
    </>
  );
};

export default CareerTimelineCard;