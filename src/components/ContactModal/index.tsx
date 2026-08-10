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
import React, { useRef, useState } from "react";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";
import type { ContactFormInputs, ContactFormStatus } from "../ContactForm";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const defaultFormValues: ContactFormInputs = {
  name: "",
  email: "",
  message: "",
  "h-captcha-response": "",
};

type Web3FormsResponse = {
  success?: boolean;
};

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
  const methods = useForm<ContactFormInputs>({
    defaultValues: defaultFormValues,
    mode: "onSubmit",
    reValidateMode: "onChange",
    shouldFocusError: true,
  });
  const [submissionStatus, setSubmissionStatus] = useState<ContactFormStatus>({ type: "idle" });
  const [captchaResetKey, setCaptchaResetKey] = useState(0);
  const submissionInProgressRef = useRef(false);

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
  ];

  const formId = "contactForm";

  const resetCaptcha = () => {
    methods.setValue("h-captcha-response", "", { shouldValidate: false });
    setCaptchaResetKey((currentKey) => currentKey + 1);
  };

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    if (submissionInProgressRef.current) {
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_API_KEY;
    if (!accessKey) {
      setSubmissionStatus({
        type: "error",
        message: "The contact form is temporarily unavailable. Please email me at contact@josharnow.com.",
      });
      return;
    }

    submissionInProgressRef.current = true;
    setSubmissionStatus({ type: "submitting" });

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        signal: controller.signal,
        body: JSON.stringify({
          access_key: accessKey,
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
          "h-captcha-response": data["h-captcha-response"],
        }),
      });
      const result = await response.json() as Web3FormsResponse;

      if (!response.ok || result.success !== true) {
        throw new Error("Contact form submission was rejected");
      }

      methods.reset(defaultFormValues);
      resetCaptcha();
      setSubmissionStatus({
        type: "success",
        message: "Thanks — your message was sent. I look forward to reading it!",
      });
    } catch (error) {
      resetCaptcha();
      const timedOut = error instanceof DOMException && error.name === "AbortError";
      setSubmissionStatus({
        type: "error",
        message: timedOut
          ? "The request timed out. Please try again."
          : "Your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      window.clearTimeout(timeoutId);
      submissionInProgressRef.current = false;
    }
  };

  const handleFormChange = () => {
    if (submissionStatus.type === "success" || submissionStatus.type === "error") {
      setSubmissionStatus({ type: "idle" });
    }
  };

  const isSubmitting = methods.formState.isSubmitting || submissionStatus.type === "submitting";

  return (
    <>
      <Modal>
        <ModalTrigger className={ cn(styles.modalButton, modalTriggerClassName)} buttonElement={ buttonElement }>
        { triggerElement }
        </ModalTrigger>
        <ModalBody>
          <FormProvider { ...methods }>
            <form
              noValidate
              id={ formId }
              onSubmit={ methods.handleSubmit(onSubmit) }
              onChange={ handleFormChange }
              aria-busy={ isSubmitting }
              className="flex min-h-0 flex-1 flex-col"
            >
              <ModalContent className="">
                <h2 className="text-base sm:text-3xl text-neutral-100 font-medium text-center mb-2 sm:mb-8">
                  Let’s get in touch!
                </h2>
                <div className="grow flex flex-col gap-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    { contentArr.map((content, idx) => (
                      <div key={ "content" + idx } className="flex flex-col gap-y-2 text-white">
                        <ContactIcon content={ content } />
                        <Link className={ cn(styles.contactMethodText, " text-center w-fit self-center p-2 rounded-lg shadow-3xl shadow-slate-700 bg-slate-700 hover:shadow-blue-500 hover:bg-blue-500 hover:bg-opacity-15 flex flex-col text-[.5rem] sm:text-base")}
                        style={ { transition: "box-shadow 1s ease 0s, background 1s ease 0s, opacity 1s ease 0s, color 1s ease 1s allow-discrete" } }
                        href={ content.href }
                        target="_blank"
                        >
                          {content.contactMethod}
                          { content.contactMethod.toLowerCase() === "email" && (
                            <span className="text-[.5rem] sm:text-base">[<i className="text-medium">contact@josharnow.com</i>]</span>
                          ) }
                        </Link>
                      </div>
                    )) }
                  </div>
                  <div className="flex flex-col grow border border-white p-4 rounded-2xl shadow-3xl shadow-slate-700 bg-slate-700">
                    <ContactForm
                      status={ submissionStatus }
                      captchaResetKey={ captchaResetKey }
                      disabled={ isSubmitting }
                    />
                  </div>
                </div>
              </ModalContent>
              <ModalFooter
                className="gap-4"
                submitDisabled={ isSubmitting }
                submitLabel={ isSubmitting ? "Sending…" : "Send Josh a message" }
              />
            </form>
          </FormProvider>
        </ModalBody>
      </Modal>
    </>
  );
};
export default ContactModal;
