"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { useForm } from "react-hook-form";
import { FormLabelInputContainer, FormLabel, FormInput } from "@/src/components";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// type Inputs = {
//   access_key: string;
//   name: string;
//   email: string;
//   message: string;
//   "h-captcha-response": string;
// }

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SOURCE - https://dsavir-h.medium.com/contact-form-for-static-site-with-web3forms-575ee166732
function ContactForm() {
  const [captcha, setCaptcha] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!captcha) {
      alert("Please verify the captcha");
      return;
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        "h-captcha-response": captcha,
        name: (e.target).name.value,
        email: (e.target).email.value,
        message: (e.target).message.value,
      }),
    });
    const result = await response.json();
    // if (response.ok) {

    // }
    // TODO - https://ui.aceternity.com/components/signup-form
    // TODO - After submission, show a success message under the form
    // TODO - Do a similar message with the captcha instead of presenting an alert
    // TODO - Use state to retain information a user puts in the boxes in case they accidentally click out. State handler will probably have to be in parent component, with the set function passed in here
  }

  return (
    <>
      <form onSubmit={ handleSubmit } className="flex flex-col gap-y-2">
        <FormLabelInputContainer className="w-full sm:w-[50%]">
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput id="name" name="name" placeholder="Your name" type="name" className="" />
        </FormLabelInputContainer>
        <FormLabelInputContainer className="w-full sm:w-[75%]">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput id="email" placeholder="YourEmailAddress@example.com" type="email" name="email" className="" />
        </FormLabelInputContainer>
        <FormLabelInputContainer className="w-full">
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormInput id="message" placeholder="Your message" name="message" className="h-20" inputElement={(
            <>
              <textarea id="message" name="message" placeholder="Your message" className="flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent 
                  file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
                  focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
                  disabled:cursor-not-allowed disabled:opacity-50
                  dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                  group-hover/input:shadow-none transition duration-400" />
            </>
          )} />
        </FormLabelInputContainer>
        <HCaptcha
          sitekey={ process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY }
          reCaptchaCompat={ false }
          onVerify={ setCaptcha }
        />
        <button className="bg-white text-black text-sm px-2 py-1 rounded-md border border-white w-fit cursor-pointer self-end" type="submit">
          Send Josh a message
        </button>
      </form>
    </>
  );
}
export default ContactForm;