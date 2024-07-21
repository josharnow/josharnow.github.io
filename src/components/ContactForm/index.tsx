"use client";
import React, { useRef, useState } from "react";
import { useForm, FormProvider, type SubmitHandler } from "react-hook-form";
import { Input } from "@/src/components";
import styles from "./styles.module.scss";
import {
  NAME_VALIDATION,
  EMAIL_VALIDATION,
  MESSAGE_VALIDATION,
  CAPTCHA_VALIDATION,
} from './inputValidations'

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type Inputs = {
  // access_key: string;
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
}


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SOURCE - https://dsavir-h.medium.com/contact-form-for-static-site-with-web3forms-575ee166732
function ContactForm({ formId }: { formId?: string } ) {
  const isMessageSent = useRef(false);

  const methods = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    // NOTE - Once this function is hit, it means data validation passed
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY,
        ...data,
      }),
    });
    const result = await response.json();

    if (result.success) {
      isMessageSent.current = true;
      methods.reset();
    }
  };


  return (
    <>
      <FormProvider {...methods}>
        <form noValidate id={ formId } onSubmit={ methods.handleSubmit(onSubmit) } className="flex flex-col grow gap-y-2">
          <Input
            containerClassName="w-full sm:w-[50%]"
            { ...NAME_VALIDATION }
          />
          <Input
            containerClassName="w-full sm:w-[75%]"
            { ...EMAIL_VALIDATION }
          />
          <Input
            containerClassName="w-full"
            inputClassName={ styles.textareaInput }
            { ...MESSAGE_VALIDATION }
          />
          <Input
            containerClassName="w-fit"
            { ...CAPTCHA_VALIDATION }
            isCaptcha={ true }
          />
        </form>
      </FormProvider>
      {
        isMessageSent.current && (
          <span className="text-right font-medium mt-5">Thanks, I look forward to reading your message!</span>
        )
      }
    </>
  );
}
export default ContactForm;