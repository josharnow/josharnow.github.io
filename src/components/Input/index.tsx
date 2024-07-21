"use client";
// SOURCE - https://www.freecodecamp.org/news/how-to-validate-forms-in-react/
/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPONENT
|
|  🐸 Returns: TSX
*-------------------------------------------------------------------*/

import { type FieldErrors, type FieldValues, useFormContext } from 'react-hook-form';
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

const InputError = ({ message }: { message: string }) => {
  return (
    <>
      <motion.p
        className="text-sm lg:text-base flex items-center gap-1 px-2 font-medium text-red-500 bg-red-100 rounded-md"
        { ...framer_error }
      >
        <MdError />
        { message }
      </motion.p>
    </>
  )
}



/**
 * Finds the error associated with a specific input field. Filters the error object & returns the error of the given input
 * 
 * @param errors - The object containing the errors for all input fields.
 * @param name - The name of the input field to find the error for.
 * @returns The error object associated with the specified input field.
 */
export function findInputError(errors: FieldErrors<FieldValues>, name: string) {
  const filtered = Object.keys(errors)
    .filter(key => key.includes(name))
    .reduce((cur, key) => {
      return Object.assign(cur, { error: errors[key] })
    }, {});
  return filtered as FieldErrors<FieldValues>;
}

export const isFormInvalid = (err: FieldErrors<FieldValues>) => {
  if (Object.keys(err).length > 0) return true
  return false
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
  // ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  // const input_tailwind = 'p-5 font-medium rounded-md w-full border border-slate-300 placeholder:opacity-60';

  // const inputRef = useRef<any>(null);

  function handleCaptchaVerify(token: string) {
    setValue(name, token);
    clearErrors(name);
  }

  return (
    <>
      <div className={ cn('flex flex-col w-full gap-2', containerClassName) }>
        <div className={ (type !== "hidden") ? "flex justify-between items-center" : "flex justify-end items-center" }>
          { type !== "hidden" && <FormLabel htmlFor={ id } className={ labelClassName }>{ label }</FormLabel> }
          <AnimatePresence mode="wait" initial={ false }>
            { isInvalid && (
              <InputError
                message={ inputErrors?.error?.message as string }
                key={ inputErrors?.error?.message as string }
              />
            ) }
          </AnimatePresence>
        </div>
        {
          !isCaptcha ? (
            <FormInput id={ id } placeholder={ placeholder } className={ inputClassName } type={ type } multiline={ multiline } { ...register(name, validation) } />
          ) :
          (
            <div className={ styles.captchaContainer }>
              <FormInput id={ id } placeholder={ placeholder } className={ inputClassName } type={ type } multiline={ multiline } { ...register(name, validation) } />
              <HCaptcha
                sitekey={ process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string }
                reCaptchaCompat={ false }
                onVerify={ handleCaptchaVerify }
              />
            </div>
          )
        }
      </div>
    </>
  )
}
export default Input;