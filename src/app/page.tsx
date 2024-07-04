"use client";
// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground } from "@/src/components";
import { motion } from "framer-motion";

import { Card } from 'primereact/card';

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

export default function Home() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  // TODO - Track what "step" we're on in regard to scrolling content (?). We should have about 4.

  return (
    <>
      <div className={ classNames(styles.view1) }>
        <AuroraBackground>
          <motion.div
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            } }
            className="absolute top-0 left-0 right-0 bottom-0 text-white px-6 py-24 sm:py-32 sm:px-24"
          >
            <div className="h-full relative flex flex-col justify-between">
              <div className="flex flex-col justify-between text-4xl sm:text-5xl w-3/6">
                <h1 className="text-white text-balance">
                  Hi, I’m <b className="font-medium text-blue-500">Josh</b>
                </h1>
              </div>
              <div className="w-full flex justify-end">
                <div className="h-full flex text-4xl sm:text-5xl w-3/6 text-right" style={{"textAlign": "justify"}}>
                  <h1 className="text-white self-center text-right text-balance">
                    A <b className="text-blue-500 font-medium">software engineer</b> from NY/FL
                  </h1>
                </div>
              </div>
              <div className="text-white w-3/6 text-3xl sm:text-4xl">
                <p className="">
                  Software is a more than a career to me:<br/>it’s a <b className="text-red-500 font-medium">passion</b>
                </p>
              </div>
            </div>
          </motion.div>
        </AuroraBackground>
      </div>
      {/* TODO - Remove the border when I get to the second view */}
      {/* TODO - Put below in a card & make it look nice */ }
      {/* TODO -Move quote to somewhere on next page. Here, put: "Software is a more than a career for me: it’s a passion."  */ }
      {/* <i>
        “True happiness comes from the joy of deeds well done, the zest of creating things new.”  ~Antoine De Saint-Exupery
      </i> */}
      <div className={ classNames(styles.view2, "border-t-white border-t-2") }>
        testing
      </div>
    </>
  );
}