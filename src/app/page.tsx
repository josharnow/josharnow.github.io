// This is the root view of the app, hence it is placed in the root of the app directory.
import Image from "next/image";
import Link from "next/link";

import { Card } from 'primereact/card';

// import { classNames } from "@/src/app/_utils";
import styles from "./styles.module.scss";

export default function Home() {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className={ classNames(styles.landingOuterDiv, "bg-black px-6 py-24 sm:py-32 lg:px-8 h-full overflow-auto")}>
        <div className="mx-auto max-w-2xl text-center flex flex-col items-center">
          <h1>Welcome to my unfinished website! I&apos;m in the process of building it.</h1><br></br>
          <Image src="https://cdn-icons-png.flaticon.com/512/8999/8999474.png" alt="Work In Progress" width={ 200 } height={ 200 } />
          {/* TODO - iterate through cards to test scrolling */}

          {Array.from({ length: 5 }).map((_, index) => (
            <Card key={index} title={`Card ${index + 1}`} style={{ width: '25rem', height: '25rem' }} className="bg-white" />
          ))}

        </div>
      </div>
    </>
  );
}