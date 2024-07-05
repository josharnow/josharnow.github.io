"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/src/components";

const AboutPageIntro = () => {
  return (
    <AuroraBackground className="min-h-fit h-full w-full">
      <motion.div
        initial={ { opacity: 0.0, y: 0 } }
        whileInView={ { opacity: 1.0, y: 0 } }
        transition={ {
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        } }
        className="min-h-full px-6 py-20 sm:py-18 sm:px-24 sm:py-16 md:px-20"
      >
        <div className="justify-between h-full min-h-fit relative flex flex-col">
          <div className="flex flex-col grow justify-between w-3/6">
            <h1 className="text-white text-balance text-3xl md:text-4xl lg:text-5xl">
              Hi, I’m <b className="font-medium text-blue-500">Josh</b>
            </h1>
          </div>
          <div className="w-full flex justify-end grow">
            <div className="flex w-3/6 text-right justify-end" style={ { "textAlign": "justify" } }>
              <h1 className="text-white self-center text-right text-balance text-3xl md:text-4xl lg:text-5xl">
                A <b className="text-blue-500 font-medium">software engineer</b> from NY/FL
              </h1>
            </div>
          </div>
          <div className="flex flex-col grow justify-end justify-self-end text-white w-3/6 text-3xl lg:text-4xl">  
            <p className="">
              Software is a more than a career to me:<br />it’s a <b className="text-red-500 font-medium">passion</b>
            </p>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
export default AboutPageIntro;