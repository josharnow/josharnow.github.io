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
      <AuroraBackground>
          <motion.div
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            } }
          // className={ classNames("px-6 py-24 sm:py-32 lg:px-8 h-full overflow-auto") }
            // className="relative"
          // className="h-full w-full overflow-auto"
          // className="px-6 py-24 sm:py-32 lg:px-8 h-full"
            className="absolute top-0 left-0 right-0 bottom-0"
            // className="relative"
          >
            <div className="text-white">
              test
            </div>
            {/* <h1 className="text-white">
              Hi, I&apos;m <b>Josh</b>
            </h1>
            <h1>
              A passionate software engineer (*IN DIFFERENT COLOR*) from NY/FL
            </h1> */}


            {/* TODO - get rid of overflow. This should be one page ("view") */}
            {/* <div className={ classNames(styles.landingOuterDiv, "absolute top-0 left-0 bottom-0 right-0") }> */}
            {/* <div className={ classNames(styles.landingOuterDiv, "px-6 py-24 sm:py-32 lg:px-8 h-full ") }> */}
          {/* <div className={ classNames(" h-fit") }> */}
            {/* <div className={ classNames("px-6 py-24 sm:py-32 lg:px-8 h-full ") }> */}
              {/* <div className="mx-auto max-w-2xl text-center flex flex-col items-center text-white h-full">
                <h1>Welcome to my unfinished website! I&apos;m in the process of building it.</h1><br></br>
                <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } />
                <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } /> */}
                {/* <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } />
                <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } /> */}
                {/* { Array.from({ length: 5 }).map((_, index) => (
                  <Card key={ index } title={ `Card ${index + 1}` } style={ { width: '25rem', height: '25rem' } } className="bg-white" />
                )) } */}
              {/* </div> */}
            {/* </div> */}
            {/* <div className={ classNames(styles.landingOuterDiv, "bg-black px-6 py-24 sm:py-32 lg:px-8 h-full overflow-auto") }>
              <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
                <h1>Welcome to my unfinished website! I&apos;m in the process of building it.</h1><br></br>
                <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } />
                { Array.from({ length: 5 }).map((_, index) => (
                  <Card key={ index } title={ `Card ${index + 1}` } style={ { width: '25rem', height: '25rem' } } className="bg-white" />
                )) }
              </div>
            </div> */}
          </motion.div>
      </AuroraBackground>
    </>
  );
}