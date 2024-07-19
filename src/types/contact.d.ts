type ContentObj = {
  // triggerElement: React.ReactNode;
  contactMethod: string;
  primeiconClass?: string;
  href?: string;
  // imageSrc?: string;
  // content?: ;
};
interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { 
    inputElement?: React.ReactNode;
  }