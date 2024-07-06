"use client";
// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground, WavyBackground, AboutPageIntro, AboutPageEducationWork, AboutPagePortfolio } from "@/src/components";
import { motion } from "framer-motion";

import { Card } from 'primereact/card';

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

export default function Home() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    <>
        <AboutPageIntro />
        {/* NOTE - The below div is my hacky way to make transition effects between views work correctly. Without it the text from the next page is considered to be within the viewport even at the maximum scroll height, so the transition will not activate when scrolling down. */}
        <div className="w-full" style={ { "height": "1px", "backgroundColor": "rgb(24 24 27)"}}></div>
        <AboutPageEducationWork />
        <AboutPagePortfolio />
      {/* TODO - Remove the border when I get to the second view */}
      {/* TODO - Put below in a card & make it look nice */ }
      {/* <i>
        
      </i> */}
      {/* <AboutPageIntro /> */}
      {/* <div className={ classNames("border-t-white border-t-2 h-full") } style={ { "backgroundColor": "rgb(24 24 27)"}}>
        test
      </div> */}
      {/* <div>
        l.knjkljklh
      </div> */}
        {/* <WavyBackground >
          <div className="absolute top-0 left-0 right-0 bottom-0">

            testing
          </div>
        </WavyBackground> */}
    </>
  );
}