"use client";
import React from 'react';
// import styles from './styles.module.scss';
// import resume from '@/public/Josh_Arnow_Resume.pdf';
import Link from "next/link";

export default function ResumePage() {

  return (
    <>
    {/* NOTE - https://stackoverflow.com/questions/71669274/having-trouble-rendering-a-local-pdf-within-a-nextjs-app */}
      <div className="h-full w-full relative">
        <Link 
          href="/Josh_Arnow_Resume.pdf" 
          target="_blank"
        className="absolute left-0 right-0 top-0 sm:top-0 h-10 flex justify-center items-center p-3 font-medium shadow-3xl border-b-[1px] border-white z-[1]"
        >
        Open résumé in a new tab
        </Link>
      </div>
      <iframe src="/Josh_Arnow_Resume.pdf" title="Josh Arnow's résumé" className="absolute left-0 right-0 bottom-0 top-10 w-full h-[calc(100%-2.5rem)]" />
    </>
  );
}
