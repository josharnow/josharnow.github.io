"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
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

// type ContactModalProps = {
//   contentArr?: ContentObj[];
//   // triggerElement: React.ReactNode;
//   // imageSrcArr?: string[];
// };

// TODO - Change data here

const ContactModal = () => {

  // const { imageSrcArr } = content  || {};

  // console.log("imageSrcArr", imageSrcArr);
  const contentArr = [
    {
      contactMethod: "Email",
      primeiconClass: "pi-envelope",
      href: "mailto:contact@josharnow.com",
    },
    {
      contactMethod: "LinkedIn",
      primeiconClass: "pi-linkedin",
      href: "https://www.linkedin.com/in/joshuaarnow/",
    },
    {
      contactMethod: "GitHub",
      primeiconClass: "pi-github",
      href: "https://github.com/josharnow",
    },
  ]


  return (
    <>
      <Modal>
        <ModalTrigger className={ cn(styles.modalButton, "bg-black text-white flex justify-center group/modal-btn shadow-3xl shadow-blue-500 w-fit")}>
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
            <div className="grid grid-cols-3 gap-4">
              { contentArr?.map((content, idx) => (
                <div key={ "content" + idx } className="flex flex-col gap-y-2">
                  <ContactIcon content={ content } />
                  <Link className={ cn(styles.contactMethodText, " text-center w-fit self-center p-2 rounded-lg shadow-3xl shadow-slate-700 bg-slate-700 hover:shadow-blue-500 hover:bg-blue-500 hover:bg-opacity-15 flex flex-col")}
                  style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
                  href={ content.href } target="_blank"
                  >
                    {content.contactMethod}
                    { content.contactMethod.toLowerCase() === "email" && (
                      <>
                        <span className="text-[.5rem] sm:text-base">[<i className="text-medium">contact@josharnow.com</i>]</span>
                      </>
                      ) }
                  </Link>
                </div>
              )) }
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};
export default ContactModal;