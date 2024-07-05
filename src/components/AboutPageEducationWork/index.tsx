"use client";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffect } from "@/src/components";

const AboutPageEducationWork = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.4], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.4], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.4], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.4], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.4], [0, 1.2]);

  return (
    <div ref={ ref } className="h-full" style={ { "backgroundImage": "linear-gradient(rgb(24 24 27), black)" } }>
      <GoogleGeminiEffect
        pathLengths={ [
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ] }
        description="We are more than the sum total of our experiences, but my diverse background equips me with a unique perspective to offer"
      >
        {/* <div className="px-2 md:px-40"> */}
        <div className="px-20 md:px-40">
          <q cite="https://www.goodreads.com/quotes/482424-true-happiness-comes-from-the-joy-of-deeds-well-done">
            <i>True happiness comes from the joy of deeds well done, the zest of creating things new.</i>
          </q> ~Antoine de Saint-Exupéry
          {/* TODO - bring ~Antoine de Saint-Exupéry to the next line and align right */}
        </div>
      </GoogleGeminiEffect>
    </div>
  );
};
export default AboutPageEducationWork;