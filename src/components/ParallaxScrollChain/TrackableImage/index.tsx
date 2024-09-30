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
};

const TrackableImage = forwardRef(function TrackableImage(props: Props, ref: React.ForwardedRef<HTMLDivElement>) {

  // const [containerRef, isVisible] = useOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.1
  // });

  // console.log(isVisible);

  // const isVisible = useIsVisible(ref);

  // console.log(ref.current)
  if (parseInt(props.id) === 0) {
    // console.log(isVisible);
    // console.log(ref.current.offsetTop)
  }

  // if (isVisible) {
  //   console.log(isVisible);
  //   console.log(ref.current)
  // }

  // console.log(ref?.current?.getBoundingClientRect());
  // console.log(ref?.current?.y);

  return (
    <Image
      src={ props.src }
      className={props.className}
      alt={ props.alt }
      ref={ ref as any }
    />
  );
});
export default TrackableImage;
