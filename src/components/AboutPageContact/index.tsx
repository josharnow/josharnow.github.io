"use client";
import React, { forwardRef } from "react";
import { MovingBorderButton, ContactModal } from "@/src/components";
import { motion } from "framer-motion";

const AboutPageContact = forwardRef(function AboutPageContact(props, ref: React.ForwardedRef<HTMLDivElement>) {

  return (
    // NOTE - h-[calc(100vh-5rem)] is used to offset the height of the top navbar
    <div ref={ ref } id="contact" className="h-[calc(100vh-5rem)] sm:h-screen  w-full bg-black  bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */ }
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className=" p-4 max-w-7xl  mx-auto relative z-1  w-full pt-20 md:pt-0">
        <motion.h1
          key={ "about-page-contact-1" }
          initial={ { opacity: 0.0, y: 0 } }
          whileInView={ { opacity: 1.0, y: 0 } }
          exit={ { opacity: 0.0, y: 0 } }
          transition={ {
            delay: 0.3,
            duration: 1.0,
            ease: "easeInOut",
          } }
          className="text-4xl md:text-7xl font-bold text-center text-balance bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4"
        >
          Do you want a <span className="text-blue-500">vision</span> brought to <span className="text-blue-500">life</span>?
        </motion.h1>
        <motion.div 
          key={ "about-page-contact-2" }
          initial={ { opacity: 0.0, y: 0 } }
          whileInView={ { opacity: 1.0, y: 0 } }
          exit={ { opacity: 0.0, y: 0 } }
          transition={ {
            delay: 0.3,
            duration: 1.0,
            ease: "easeInOut",
          } }
          className="w-full flex justify-center my-4"
        >
          <ContactModal
            modalTriggerClassName=""
            buttonElement={(
              <>
                <MovingBorderButton
                  borderRadius="1.75rem"
                  className="bg-slate-700 !text-white border-slate-800 font-medium z-1 text-normal sm:text-lg md:text-xl w-fit h-fit px-2 py-2 text-balance"
                  duration={ 5000.0 }
                >
                  <span>Contact Me</span>
                </MovingBorderButton>
              </>
            )} 
          />
        </motion.div>
        <motion.p 
          key={ "about-page-contact-3" }
          initial={ { opacity: 0.0, y: 0 } }
          whileInView={ { opacity: 1.0, y: 0 } }
          exit={ { opacity: 0.0, y: 0 } }
          transition={ {
            delay: 0.3,
            duration: 1.0,
            ease: "easeInOut",
          } }
          className="text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-300 max-w-lg text-center text-balance mx-auto pt-4"
        >
          Reach out and I would be more than happy to discuss 😄
        </motion.p>
      </div>
    </div>
  );
});
export default AboutPageContact;