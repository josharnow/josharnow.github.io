"use client";
import {
  ContactForm,
  ContactIcon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/src/components";
import { clsx, type ClassValue } from "clsx";
import Link from "next/link";
import React from "react";
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

const ContactModal = ({
  triggerElement = (
  <>
    <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
      🙋‍♂️ Contact Me
    </span>
    <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
      📇
    </div>
  </>),
  buttonElement,
  modalTriggerClassName = "bg-black text-white flex justify-center group/modal-btn shadow-3xl shadow-blue-500 w-fit",
}:{
  triggerElement?: React.ReactNode;
  buttonElement?: React.ReactNode;
  modalTriggerClassName?: string;
  // content?: ContactModalProps;
}) => {

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

  const formId = "contactForm";

  return (
    <>
      <Modal>
        <ModalTrigger className={ cn(styles.modalButton, modalTriggerClassName)} buttonElement={ buttonElement }>
        { triggerElement }
        </ModalTrigger>
        <ModalBody>
          <ModalContent className="">
            <h2 className="text-base sm:text-3xl text-neutral-100 font-medium text-center mb-2 sm:mb-8">
              Let’s get in touch!
            </h2>
            {/* NOTE - https://tailwindcss.com/docs/grid-template-columns */}
            <div className="grow flex flex-col gap-y-3">
              <div className="grid grid-cols-3 gap-4">
              {/* <div className="grid grid-cols-3 gap-4" style={{ flex:"5px 5px 5px"}}> */}
              {/* <div className="grid grid-cols-3 gap-4 h-5"> */}
                { contentArr?.map((content, idx) => (
                  <div key={ "content" + idx } className="flex flex-col gap-y-2">
                    <ContactIcon content={ content } />
                    <Link className={ cn(styles.contactMethodText, " text-center w-fit self-center p-2 rounded-lg shadow-3xl shadow-slate-700 bg-slate-700 hover:shadow-blue-500 hover:bg-blue-500 hover:bg-opacity-15 flex flex-col text-[.5rem] sm:text-base")}
                    style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
                    href={ content.href } 
                    target="_blank"
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
              <div className="flex flex-col grow border border-white p-4 rounded-2xl shadow-3xl shadow-slate-700 bg-slate-700">
                <ContactForm formId={ formId } />
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4" formId={ formId }>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </>
  );
};
export default ContactModal;