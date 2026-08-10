"use client";
import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={ cn(
        "inline-flex bg-transparent relative p-[1px] overflow-hidden shadow-3xl shadow-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        containerClassName
      ) }
      style={ {
        borderRadius: borderRadius,
      } }
      { ...otherProps }
    >
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={ { borderRadius: `calc(${borderRadius} * 0.96)` } }
      >
        <MovingBorder duration={ duration } rx="30%" ry="30%">
          <span
            className={ cn(
              "block h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--sky-500)_40%,transparent_60%)]",
              borderClassName
            ) }
          />
        </MovingBorder>
      </span>

      <span
        className={ cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className
        ) }
        style={ {
          borderRadius: `calc(${borderRadius} * 0.96)`,
        } }
      >
        { children }
      </span>
    </Component>
  );
}

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>();
  const progress = useMotionValue<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useAnimationFrame((time) => {
    if (shouldReduceMotion) {
      return;
    }
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        { ...otherProps }
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={ rx }
          ry={ ry }
          ref={ pathRef }
        />
      </svg>
      <motion.span
        style={ {
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        } }
      >
        { children }
      </motion.span>
    </>
  );
};
export default MovingBorderButton;
