"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Content = {
  title: string;
  description: string;
  content?: React.ReactNode | any;
};
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const StickyScrollReveal = ({
  content,
  contentClassName,
}: {
  content: Content[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 28 and comment line 29 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = useMemo(() => {
    return [
      "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
      "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
      "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
    ];
  }, []);

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard, linearGradients]);

  return (
    <motion.div
      animate={ {
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      } }
      className="grow rounded-lg overflow-y-auto flex justify-center relative p-10"
      ref={ ref }
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          { content.map((item, index) => (
            <div key={ item.title + index } className="my-20">
              <motion.h2
                initial={ {
                  opacity: 0,
                } }
                animate={ {
                  opacity: activeCard === index ? 1 : 0.3,
                } }
                className="text-lg md:text-3xl font-medium text-white"
              >
                { item.title }
              </motion.h2>
              <motion.p
                initial={ {
                  opacity: 0,
                } }
                animate={ {
                  opacity: activeCard === index ? 1 : 0.3,
                } }
                className="text-kg text-white max-w-sm mt-10"
              >
                { item.description }
              </motion.p>
            </div>
          )) }
          <div className="h-40" />
        </div>
      </div>
      <div
        style={ { background: backgroundGradient } }
        className={ cn(
          // "hidden lg:block h-60 w-80 rounded-lg bg-white sticky top-10 overflow-hidden",
          "block h-60 w-80 rounded-lg bg-white sticky top-10 overflow-hidden",
          contentClassName
        ) }
      >
        { content[activeCard].content ?? null }
      </div>
    </motion.div>
  );
};
export default StickyScrollReveal;