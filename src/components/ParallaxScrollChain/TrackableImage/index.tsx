"use client";
import React, { forwardRef } from "react";
import Image from "next/image";
// import { type ClassValue, clsx } from "clsx";
// import { twMerge } from "tailwind-merge";

// function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs));
// }

// SOURCE - https://stackoverflow.com/questions/74466878/intersection-observer-will-not-observe-multiple-refs
// const useOnScreen = (options: any): any => {
//   const containerRef = useRef<HTMLDivElement[]>([]);
//   const [isVisible, setIsVisible] = useState([]);

//   const callbackFunction = (entries: any) => {
//     const [entry] = entries;

//     if (entry.isIntersecting) {
//       const checkIdInArray = isVisible.indexOf(entry.target.id) === -1;
//       if (checkIdInArray) {
//         setIsVisible((oldArray) => [...oldArray, entry.target.id])
//       };
//     }
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(callbackFunction, options);
//     if (containerRef.current)
//       containerRef.current.forEach((el) => {
//         observer.observe(el);
//       });

//     return () => {
//       if (containerRef.current)
//         containerRef.current.forEach((el) => {
//           observer.unobserve(el);
//         });
//     };
//   }, [containerRef, options]);

//   return [containerRef, isVisible];
// };

// function useIsVisible(ref: React.ForwardedRef<HTMLDivElement>) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//       setIntersecting(entry.isIntersecting)
//     );

//     observer.observe(ref?.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }

interface Props extends React.HTMLProps<HTMLDivElement> {
  src: string;
  className: string;
  alt: string;
  ref: React.ForwardedRef<HTMLDivElement>;
  id: string;
};

const TrackableImage = forwardRef(function TrackableImage(props: Props, ref: React.ForwardedRef<HTMLDivElement>) {

  // const [containerRef, isVisible] = useOnScreen({
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.1
  // });

  // console.log(isVisible);

  // const isVisible = useIsVisible(ref);

  // console.log(ref.current)
  if (parseInt(props.id) === 0) {
    // console.log(isVisible);
    // console.log(ref.current.offsetTop)
  }

  // if (isVisible) {
  //   console.log(isVisible);
  //   console.log(ref.current)
  // }

  // console.log(ref?.current?.getBoundingClientRect());
  // console.log(ref?.current?.y);

  return (
    <Image
      src={ props.src }
      className={props.className}
      alt={ props.alt }
      ref={ ref as any }
    />
  );
});
export default TrackableImage;
