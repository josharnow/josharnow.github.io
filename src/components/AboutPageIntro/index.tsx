"use client";
import React from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "@/src/components";

const AboutPageIntro = () => {
  return (
    <AuroraBackground id="intro" className="h-full sm:h-screen sm:min-h-fit w-full">
      <div className="min-h-full px-6 py-10 sm:py-15 sm:px-24 md:px-20">
        <div className="justify-evenly sm:justify-between h-full min-h-fit relative flex flex-col">
          <motion.div 
            key={"about-page-intro-1"}
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            exit={ { opacity: 0.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 1.0,
              ease: "easeInOut",
            } }
            className="flex flex-col justify-between w-3/6"
          >
            <h1 className="text-white text-balance text-3xl md:text-4xl lg:text-5xl">
              Hi, I’m <b className="font-medium text-blue-500">Josh</b>
            </h1>
          </motion.div>
          <motion.div 
            key={ "about-page-intro-2" }
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            exit={ { opacity: 0.0, y: 0 } }
            transition={ {
              delay: 2.05,
              duration: 1.0,
              ease: "easeInOut",
            } }
            className="w-full flex justify-end"
          >
            <div className="flex w-3/6 text-right justify-end" style={ { "textAlign": "justify" } }>
              <h1 className="text-white self-center text-right text-balance text-3xl md:text-4xl lg:text-5xl">
                A <b className="text-blue-500 font-medium">software engineer</b> from NY/FL
              </h1>
            </div>
          </motion.div>
          <div className="flex flex-col justify-end justify-self-end text-white w-3/6 text-3xl lg:text-4xl">
            <p className="text-balance">
              <motion.span
                key={ "about-page-intro-3" }
                initial={ { opacity: 0.0, y: 0 } }
                whileInView={ { opacity: 1.0, y: 0 } }
                exit={ { opacity: 0.0, y: 0 } }
                transition={ {
                  delay: 3.8,
                  duration: 1.0,
                  ease: "easeInOut",
                } }
              >
                Software is a more than a career to me:
              </motion.span><br />
              <motion.span
                key={ "about-page-intro-4" }
                initial={ { opacity: 0.0, y: 0 } }
                whileInView={ { opacity: 1.0, y: 0 } }
                exit={ { opacity: 0.0, y: 0 } }
                transition={ {
                  delay: 5.8,
                  duration: 1.0,
                  ease: "easeInOut",
                } }
              >
                it’s a <b className="text-red-500 font-medium">passion</b>
              </motion.span>
            </p>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
};
export default AboutPageIntro;