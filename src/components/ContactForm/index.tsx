"use client";
import React from "react";
import { Input } from "@/src/components";
import styles from "./styles.module.scss";
import {
  NAME_VALIDATION,
  EMAIL_VALIDATION,
  MESSAGE_VALIDATION,
  CAPTCHA_VALIDATION,
} from './inputValidations';

export type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

export type ContactFormStatus = {
  type: "idle" | "submitting" | "success" | "error";
  message?: string;
};

function ContactForm({
  status,
  captchaResetKey,
  disabled = false,
}: {
  status: ContactFormStatus;
  captchaResetKey: number;
  disabled?: boolean;
}) {


  return (
    <div className="flex flex-col grow gap-y-2">
      <Input
        containerClassName="w-full sm:w-[50%]"
        autoComplete="name"
        disabled={ disabled }
        { ...NAME_VALIDATION }
      />
      <Input
        containerClassName="w-full sm:w-[50%]"
        autoComplete="email"
        disabled={ disabled }
        { ...EMAIL_VALIDATION }
      />
      <Input
        containerClassName="w-full"
        inputClassName={ styles.textareaInput }
        disabled={ disabled }
        { ...MESSAGE_VALIDATION }
      />
      <Input
        containerClassName="w-fit max-w-full"
        disabled={ disabled }
        captchaResetKey={ captchaResetKey }
        { ...CAPTCHA_VALIDATION }
        isCaptcha={ true }
      />
      <div className="min-h-6 pt-1 text-sm sm:text-base" aria-atomic="true">
        { status.type === "submitting" && (
          <p role="status" aria-live="polite" className="text-neutral-200">
            Sending your message…
          </p>
        ) }
        { status.type === "success" && (
          <p role="status" aria-live="polite" className="font-medium text-emerald-300">
            { status.message }
          </p>
        ) }
        { status.type === "error" && (
          <p role="alert" className="font-medium text-red-200">
            { status.message }
          </p>
        ) }
      </div>
    </div>
  );
}
export default ContactForm;
