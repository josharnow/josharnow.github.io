"use client";
import React from "react";
// import Link from "next/link";
// import styles from '../styles.module.scss';

const EducationTimelineCard = ({ content, className }: { 
  content: EducationTimelineContent;
  className?: string;
}) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center px-2 pb-6 pt-2">
          <h1>{ content.yearStart }</h1>
          <h1>{ content.institution }</h1>
      </div>
    </>
  );
};

export default EducationTimelineCard;