"use client";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ParallaxScrollChain = ({
  contentArrContainer,
  className,
}: {
  contentArrContainer: ContentArrContainer;
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);



  // TODO - Break out contentArrContainer into 3 parts. Used to be string[] now it's ContentArrContainer

  const consolidatedContentArr = [];

  for (const [key, contentArr] of Object.entries(contentArrContainer)) {
    for (const [key, value] of Object.entries(contentArr)) {
      consolidatedContentArr.push(value);
    }
  }

  // TODO - Use category key to switch between which tab heading is shown

  
  const third = Math.ceil(consolidatedContentArr.length / 3);

  const firstPart = consolidatedContentArr.slice(0, third);
  const secondPart = consolidatedContentArr.slice(third, 2 * third);
  const thirdPart = consolidatedContentArr.slice(2 * third);



  // TODO - Track which tab is selected
  // const [selectedTab, setSelectedTab] = useState("");
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
    // console.log("latest", latest);

    // const cardsBreakpoints = content.map((_, index) => index / cardLength);
    // const closestBreakpointIndex = cardsBreakpoints.reduce(
    //   (acc, breakpoint, index) => {
    //     const distance = Math.abs(latest - breakpoint);
    //     if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
    //       return index;
    //     }
    //     return acc;
    //   },
    //   0
    // );
    // setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className={ cn("h-[40rem] items-start overflow-y-auto w-full relative", className) }
      ref={ gridRef }
    >
      <div className="fixed top-0 w-full bg-black z-10">testing 123</div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10 absolute top-5 z-0"
        ref={ gridRef }
      >
        <div className="grid gap-10">
          { firstPart.map((content, idx) => (
            <motion.div
              style={ { y: translateFirst } } // Apply the translateY motion value here
              key={ "grid-1" + idx }
            >
              <Image
                src={ content.imageSrc as string }
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10">
          { secondPart.map((content, idx) => (
            <motion.div style={ { y: translateSecond } } key={ "grid-2" + idx }>
              <Image
                src={ content.imageSrc as string }
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10">
          { thirdPart.map((content, idx) => (
            <motion.div style={ { y: translateThird } } key={ "grid-3" + idx }>
              <Image
                src={ content.imageSrc as string }
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height={400}
                width={400}
                alt="thumbnail"
              />
            </motion.div>
          )) }
        </div>
      </div>
    </div>
  );
};
export default ParallaxScrollChain;
