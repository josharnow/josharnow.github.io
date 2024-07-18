"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import HCaptcha from '@hcaptcha/react-hcaptcha';
// import { useForm } from "react-hook-form";

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
    // TODO - After submission, show a success message under the form
    // TODO - Do a similar message with the captcha instead of presenting an alert
    // TODO - Use state to retain information a user puts in the boxes in case they accidentally click out. State handler will probably have to be in parent component, with the set function passed in here
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" required placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required placeholder="email@example.com" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" required rows={ 3 } placeholder="Enter Message"></textarea>
        </div>
        <HCaptcha
          sitekey={ process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY }
          reCaptchaCompat={ false }
          onVerify={ setCaptcha } 
        />
        <button type="submit">Submit Form</button>
      </form>
    </>
  );
}
export default ContactForm;