"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
// import { CanvasRevealEffect } from "@.c";
// import { CanvasRevealEffect } from "@/src/components";
// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// SOURCE - https://stackoverflow.com/questions/74466878/intersection-observer-will-not-observe-multiple-refs

interface Props extends React.HTMLProps<HTMLDivElement> {
  src: string;
  className: string;
  alt: string;
  ref: React.ForwardedRef<HTMLDivElement>;
  id: string;
  category?: string;
};

const TrackableImage = forwardRef(function TrackableImage(props: Props, ref: React.ForwardedRef<HTMLDivElement>) {

  return (
    <Image
      src={ props.src }
      className={props.className}
      alt={ props.alt }
      ref={ ref as any }
      data-category={ props.category }
    />
  );
});
export default TrackableImage;
