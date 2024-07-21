type ContentObj = {
  // triggerElement: React.ReactNode;
  contactMethod: string;
  primeiconClass?: string;
  href?: string;
  // imageSrc?: string;
  // content?: ;
};


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  type?: import("react").HTMLInputTypeAttribute | "textarea";
  inputElement?: React.ReactNode;
  name: string;
  label?: string;
  id: string;
  placeholder?: string;
  validation?: any;
  multiline?: boolean | null | undefined;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  isCaptcha?: boolean;


  // cols?: number;
  // rows?: number;
  // textLength?: number;
  // wrap?: string;
}