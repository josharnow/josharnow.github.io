"use client";
// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";
import { AuroraBackground, WavyBackground, AboutPageIntro } from "@/src/components";
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
      {/* TODO - Remove the border when I get to the second view */}
      {/* TODO - Put below in a card & make it look nice */ }
      {/* TODO -Move quote to somewhere on next page: "True happiness comes from the joy of deeds well done, the zest of creating things new." – Antoine de Saint-Exupery */ }
      {/* <i>
        
      </i> */}
      {/* <AboutPageIntro /> */}
      <div className={ classNames("border-t-white border-t-2") } style={ { "backgroundColor": "rgb(24 24 27)"}}>
        test
      </div>
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