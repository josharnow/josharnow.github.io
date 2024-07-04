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
            // className="absolute top-0 left-0 right-0 bottom-0 flex flex-col text-white px-6 py-24 sm:py-32 lg:px-8"
            className="absolute top-0 left-0 right-0 bottom-0 text-white px-6 py-24 sm:py-32 sm:px-24"
          >
            {/* TODO - Make this as a grid instead, it'll be easier */}
          <div className="h-full relative flex flex-col justify-between">
            <div className="flex flex-col justify-between text-4xl sm:text-5xl w-3/6">
              <h1 className="text-white text-balance">
                Hi, I&apos;m <b className="font-medium text-blue-500">Josh</b>
              </h1>
              {/* TODO - Insert quote here */}

            </div>
            <div className="w-full flex justify-end">

              <div className="h-full flex text-4xl sm:text-5xl w-3/6 text-right" style={{"textAlign": "justify"}}>
              {/* <div className="h-full text-4xl sm:text-5xl flex flex-column self-end w-3/6 text-right"> */}
                <h1 className="text-white self-center text-right text-balance">
                  A <b className="text-blue-500 font-medium">software engineer</b> from NY/FL
                  {/* A Software Engineer */}
                </h1>
              </div>
            </div>
              <div className="text-white text-lg sm:text-xl w-3/6">
                <p>
                  “True happiness comes from the joy of deeds well done, the zest of creating things new.”  ~ Antoine De Saint-Exupery
                </p>
              </div>
            </div>

          {/* <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div>
                test
              </div>
              <div>
                test
              </div>
              <div>
                test
              </div>
          </div> */}

            {/* TODO - PUT BELOW QUOTE AT BOTTOM OF PAGE */}
            {/* “True happiness comes from the joy of deeds well done, the zest of creating things new.”  ~ Antoine De Saint-Exupery */}
            {/* Creativity is a fundamental aspect of being human. It’s our birthright. And it’s for all of us.” - Rick Rubin */}
            {/* <div>
              If you&apos;re looking for someone with a passion for creating outstanding applications across a variety of platforms, follow me!
            </div> */}
            {/* <div className="text-5xl self-end justify-self-end w-3/6" style={{"alignSelf": "flex-end"}}>
              <h1 className="text-white">
                Hi, I&apos;m <b className="font-medium text-blue-500">Josh</b>
              </h1>
            </div> */}
          

          {/* <div className="text-5xl self-end justify-self-end w-3/6">
            <h1>
            A <span className="text-blue-500">software engineer</span> with a passion for creating outstanding applications across a variety of platforms
            </h1>
          </div> */}
              {/* A software engineer with a passion for creating and building things. I have experience in full-stack web development, mobile development, and game development. I am always looking for new opportunities to learn and grow as a developer. */}


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
      {/* <div>
        testing
      </div> */}
    </>
  );
}