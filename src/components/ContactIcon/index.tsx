"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Image from "next/image";
import styles from "./styles.module.scss";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ContactIcon = ({
  content,
}: {
  content: ContentObj;
}) => {
  //   {/* {/* TODO - Ensure pictures stay as squares */ }
  //   {/* TODO - Improve styling */ }
  //   {/* TODO - Add text underneath */ }
  //   {/* TODO - Add photos */ }
  //   {/* TODO - Add links (set target so it opens in another tab) */ }
  //   {/* TODO - "Click to copy" for email */ } */}
  return (
    <>
      <motion.div
        className={
          cn(
            styles.iconContainer,
            "rounded-lg flex justify-center items-center w-fit self-center shadow-3xl shadow-slate-700 bg-slate-700 hover:shadow-blue-500 hover:bg-blue-500 hover:bg-opacity-15"
          ) }
        style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
      >
        <Link 
          className={
            cn(
              
              "p-2 sm:p-5"
            ) }
          href={ content.href as string }
          target="_blank"
        >
          {/* TODO - Make icons larger on desktop */}
          <i className={
            cn(
              styles.icon,
              content.primeiconClass,
              "pi text-[1.5rem] sm:text-[2rem] text-blue-500",
            )}
          ></i>
          {/* <Image
            src={ content.imageSrc as string }
            alt="images"
            width="500"
            height="500"
            className="rounded-lg h-30 w-30 sm:h-20 sm:w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
          /> */}
        </Link>
      </motion.div>
    </>
  );
};
export default ContactIcon;
