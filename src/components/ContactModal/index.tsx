"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Modal,
  ModalBody, 
  ModalContent, 
  ModalFooter, 
  ModalTrigger, 
  ContactIcon, 
} from "@/src/components";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
            {/* NOTE - https://tailwindcss.com/docs/grid-template-columns */}
            {/* TODO - Idea: Iterate over each Contact icon, and underneath each have text */}
            <div className="grid grid-cols-4 gap-4">
              { contentArr?.map((content, idx) => (
                <div key={ "content" + idx }>
                  <ContactIcon content={ content } />
                  <span className="text-center">{content.contactMethod}</span>
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