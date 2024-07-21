"use client";
import React, {forwardRef} from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/src/components";

const AboutPageEducationWork = forwardRef(function AboutPageEducationWork(props, ref: React.ForwardedRef<HTMLDivElement>) {
  // const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLDivElement>,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.4], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.4], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.4], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.4], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.4], [0, 1.2]);

  return (
    <div id="career-education" ref={ ref } className="h-full" style={ { "backgroundImage": "linear-gradient(rgb(24 24 27), black)" } }>
      <GoogleGeminiEffect
        pathLengths={ [
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ] }
        description={ (<>Our experiences define us:<br/>My diverse background allows me to offer a unique perspective</>)}
      >
        <div className="px-30 sm:px-40 lg:px-60 xl:px-96 flex flex-col text-center text-balance text-white">
          <q cite="https://www.goodreads.com/quotes/482424-true-happiness-comes-from-the-joy-of-deeds-well-done" className="text-balance">
            <i>True happiness comes from the joy of deeds well done, the zest of creating things new.</i>
          </q>
          <i className="">~Antoine de Saint-Exupéry</i>
        </div>
      </GoogleGeminiEffect>
    </div>
  );
});
export default AboutPageEducationWork;