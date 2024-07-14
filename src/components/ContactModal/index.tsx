"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/src/components";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ContentObj = {
  // triggerElement: React.ReactNode;
  contactMethod: string;
  imageSrc?: string;
  // content?: ;
};
type ContactModalProps = {
  contentArr?: ContentObj[];
  // triggerElement: React.ReactNode;
  // imageSrcArr?: string[];
};

// TODO - Change data here

const ContactModal = ({ contentArr }: ContactModalProps) => {

  // const { imageSrcArr } = content  || {};

  // console.log("imageSrcArr", imageSrcArr);

  contentArr?.map(({imageSrc}, idx) => {
    console.log("imageSrcArr", imageSrc);
  });

  return (
    <>
      <Modal>
        <ModalTrigger className={ cn(styles.modalButton, "bg-black text-white flex justify-center group/modal-btn shadow-blue-500")}>
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            🙋‍♂️ Contact Me
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
            📇
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h2 className="text-2xl sm:text-3xl text-neutral-100 font-medium text-center mb-8">
              Let’s get in touch!
            </h2>
            <div className="flex justify-center items-center grow space-x-10">
              { contentArr?.map((content, idx) => (
                <div key={ "content" + idx }>
                  <motion.div
                    style={ {
                      // rotate: Math.random() * 20 - 10,
                    } }
                    whileHover={ {
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    } }
                    whileTap={ {
                      scale: 1.1,
                      rotate: 0,
                      zIndex: 100,
                    } }
                    className="rounded-xl mt-4 p-1 bg-neutral-800 border-neutral-700 border flex-shrink-0 overflow-hidden"
                  >
                    {/* TODO - Ensure pictures stay as squares */}
                    {/* TODO - Improve styling */}
                    {/* TODO - Add text underneath */}
                    {/* TODO - Add photos */}
                    {/* TODO - Add links (set target so it opens in another tab) */}
                    {/* TODO - "Click to copy" for email */}
                    <Image
                      src={ content.imageSrc as string }
                      alt="images"
                      width="500"
                      height="500"
                      className="rounded-lg h-30 w-30 sm:h-20 sm:w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                      // className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                    />
                    {content.contactMethod}
                  </motion.div>
                </div>
              )) }
            </div>
            {/* TODO - Content here */}
            {/* Phone (w/link), email (w/link) */}
            {/* <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <div className="flex  items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  5 connecting flights
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  12 hotels
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  69 visiting spots
                </span>
              </div>
              <div className="flex  items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  Good food everyday
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  Open Mic
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-neutral-300 text-sm">
                  Paragliding
                </span>
              </div>
            </div> */}
            {/* <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto"> */}


            {/* <div className="grow flex justify-center items-center">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-white">
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  Border Magic
                </span>
              </button>
    
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Lit up borders
                </div>
              </button>
            </div> */}
          </ModalContent>
          <ModalFooter className="gap-4">
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};
export default ContactModal;