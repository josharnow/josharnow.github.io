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
    // <div ref={ ref } className="h-full" style={ { "backgroundColor": "rgb(24 24 27)" } }>
    <div ref={ ref } className="h-full" style={ { "backgroundImage": "linear-gradient(rgb(24 24 27), black)" } }>
      {/* <div>TEST QUOPTE</div> */}
      <GoogleGeminiEffect
        pathLengths={ [
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ] }
        // description="We are more than the sum total of our experiences, but a diverse background has equipped me with a unique perspective"
        description="We are more than the sum total of our experiences, but my diverse background equips me with a unique perspective to offer"
      />
    </div>
  );
};
export default AboutPageEducationWork;