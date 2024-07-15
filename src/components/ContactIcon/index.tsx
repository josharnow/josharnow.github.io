"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const ContactIcon = ({
  content,
}: {
  content: ContentObj;
}) => {

  return (
    <motion.div
      className="border border-blue-500 flex justify-center items-center"
    >
      <div>
        <Image
          src={ content.imageSrc as string }
          alt="images"
          width="500"
          height="500"
          className="rounded-lg h-30 w-30 sm:h-20 sm:w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
        />
      </div>
    </motion.div>
    // <motion.div
    //   style={ {
    //   } }
    //   whileHover={ {
    //     scale: 1.1,
    //     rotate: 0,
    //     zIndex: 100,
    //   } }
    //   whileTap={ {
    //     scale: 1.1,
    //     rotate: 0,
    //     zIndex: 100,
    //   } }
    //   className="rounded-xl mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
    // >
    //   {/* {/* TODO - Ensure pictures stay as squares */ }
    //   {/* TODO - Improve styling */ }
    //   {/* TODO - Add text underneath */ }
    //   {/* TODO - Add photos */ }
    //   {/* TODO - Add links (set target so it opens in another tab) */ }
    //   {/* TODO - "Click to copy" for email */ } */}
    //   <Image
    //     src={ content.imageSrc as string }
    //     alt="images"
    //     width="500"
    //     height="500"
    //     className="rounded-lg h-30 w-30 sm:h-20 sm:w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
    //   />
    //   { content.contactMethod }
    // </motion.div>
  );
};
export default ContactIcon;
