"use client";
// SOURCE - https://www.freecodecamp.org/news/how-to-validate-forms-in-react/
/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPONENT
|
|  🐸 Returns: TSX
*-------------------------------------------------------------------*/

import { useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { MdError } from 'react-icons/md';

import { FormInput, FormLabel } from '@/src/components';
import HCaptcha from '@hcaptcha/react-hcaptcha';


import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import styles from "./styles.module.scss";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const InputError = ({ id, message }: { id: string; message: string }) => {
  return (
    <>
      <motion.p
        id={ id }
        role="alert"
        className="text-sm lg:text-base flex items-center gap-1 px-2 font-medium text-red-500 bg-red-100 rounded-md"
        { ...framer_error }
      >
        <MdError />
        { message }
      </motion.p>
    </>
  )
}



const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
}

const Input = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  containerClassName,
  labelClassName,
  inputClassName,
  isCaptcha = false,
  captchaResetKey = 0,
  disabled,
  autoComplete,
}: InputProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
    setError,
  } = useFormContext();

  const inputError = errors[name];
  const errorMessage = typeof inputError?.message === "string" ? inputError.message : "Invalid value";
  const isInvalid = Boolean(inputError);
  const errorId = `${id}-error`;
  const captchaSiteKey = process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY;

  function handleCaptchaVerify(token: string) {
    setValue(name, token, { shouldDirty: true, shouldValidate: true });
    clearErrors(name);
  }

  function handleCaptchaExpire() {
    setValue(name, "", { shouldValidate: true });
  }

  function handleCaptchaError() {
    setValue(name, "", { shouldValidate: false });
    setError(name, {
      type: "manual",
      message: "Captcha verification failed. Please try again.",
    });
  }

  return (
    <>
      <div className={ cn('flex flex-col w-full gap-2', containerClassName) }>
        <div className={ (type !== "hidden") ? "flex justify-between items-center" : "flex justify-end items-center" }>
          { type !== "hidden" && <FormLabel htmlFor={ id } className={ labelClassName }>{ label }</FormLabel> }
          <AnimatePresence mode="wait" initial={ false }>
            { isInvalid && (
              <InputError
                id={ errorId }
                message={ errorMessage }
                key={ errorMessage }
              />
            ) }
          </AnimatePresence>
        </div>
        {
          !isCaptcha ? (
            <FormInput
              id={ id }
              placeholder={ placeholder }
              className={ inputClassName }
              type={ type }
              multiline={ multiline }
              disabled={ disabled }
              autoComplete={ autoComplete }
              aria-invalid={ isInvalid }
              aria-describedby={ isInvalid ? errorId : undefined }
              { ...register(name, validation) }
            />
          ) :
          (
            <div className={ styles.captchaContainer }>
              <FormInput
                id={ id }
                placeholder={ placeholder }
                className={ inputClassName }
                type={ type }
                multiline={ multiline }
                disabled={ disabled }
                aria-invalid={ isInvalid }
                aria-describedby={ isInvalid ? errorId : undefined }
                { ...register(name, validation) }
              />
              { captchaSiteKey ? (
                <HCaptcha
                  key={ captchaResetKey }
                  sitekey={ captchaSiteKey }
                  reCaptchaCompat={ false }
                  onVerify={ handleCaptchaVerify }
                  onExpire={ handleCaptchaExpire }
                  onChalExpired={ handleCaptchaExpire }
                  onError={ handleCaptchaError }
                />
              ) : (
                <p role="alert" className="text-sm text-red-100">
                  Contact verification is temporarily unavailable. Please email me directly instead.
                </p>
              ) }
            </div>
          )
        }
      </div>
    </>
  )
}
export default Input;
