"use client";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import React, { useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import TrackableImage from "./TrackableImage";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// function useIsVisible(ref: React.RefObject<any>) {
//   const [isIntersecting, setIntersecting] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) =>
//       setIntersecting(entry.isIntersecting)
//     );

//     observer.observe(ref.current);
//     return () => {
//       observer.disconnect();
//     };
//   }, [ref]);

//   return isIntersecting;
// }




const ParallaxScrollChain = ({
  contentArrContainer,
  className,
}: {
  contentArrContainer: ContentArrContainer;
  className?: string;
}) => {
  const gridRef = useRef<any>(null);

  const { 
    scrollYProgress,
    // scrollY
  } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);



  // TODO - Break out contentArrContainer into 3 parts. Used to be string[] now it's ContentArrContainer

  const consolidatedContentArr: Content[] = [];

  for (const [, contentArr] of Object.entries(contentArrContainer)) {
    let i = 0;
    for (const [, value] of Object.entries(contentArr)) {
      const valueAndId = { ...value, id: i };
      consolidatedContentArr.push(valueAndId);
      i++;
    }
  }

  // TODO - Use category key to switch between which tab heading is shown

  const columnRef1 = useRef<HTMLDivElement>(null);
  const columnRef2 = useRef<HTMLDivElement>(null);
  const columnRef3 = useRef<HTMLDivElement>(null);

  const third = Math.ceil(consolidatedContentArr.length / 3);

  const firstPart = consolidatedContentArr.slice(0, third);
  const secondPart = consolidatedContentArr.slice(third, 2 * third);
  const thirdPart = consolidatedContentArr.slice(2 * third);



  // TODO - Track which tab is selected
  const [selectedCategory1, setSelectedCategory1] = useState(firstPart[0].category);
  const [selectedCategory2, setSelectedCategory2] = useState(secondPart[0].category);
  const [selectedCategory3, setSelectedCategory3] = useState(thirdPart[0].category);



  // SOURCE - https://maxschmitt.me/posts/react-refs-loops
  const refsById1 = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    firstPart.forEach((item) => {
      // refs[item.id as number] = useIsVisible(React.createRef());
      refs[item.id as number] = React.createRef();
    })
    return refs;
  }, [firstPart]);
  const refsById2 = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    secondPart.forEach((item) => {
      // refs[item.id as number] = useIsVisible(React.createRef());
      refs[item.id as number] = React.createRef();
    })
    return refs;
  }, [secondPart]);
  const refsById3 = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    thirdPart.forEach((item) => {
      // refs[item.id as number] = useIsVisible(React.createRef());
      refs[item.id as number] = React.createRef();
    })
    return refs;
  }, [thirdPart]);



  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // const refColumn1Bounds = columnRef1?.current?.getBoundingClientRect();
    // const refColumn2Bounds = columnRef2?.current?.getBoundingClientRect();
    // const refColumn3Bounds = columnRef3?.current?.getBoundingClientRect();



    // console.log(gridRef.current.getBoundingClientRect().top);
    console.log("SCROLLING")
    // NOTE - Should be the "top" of the gridRef as it scrolls; if scrollY > element bottom, then it's not visible
    // console.log(refsById1[0].current.getBoundingClientRect().top + scrollY.get());
    // console.log(refsById1[0].current.getBoundingClientRect().top);
    // console.log(refsById1[0].current.getBoundingClientRect().bottom);
    // console.log(scrollY.get());

    // NOTE - *** INDEXING APPEARS TO BE OFF. THAT'S PROBABLY THE ISSUE...
    console.log(refsById1[0].current?.offsetParent);
    console.log(refsById1[0].current?.offsetParent?.scrollTop);
    console.log(refsById1)

    


    // console.log(scrollYProgress.get());


    // console.log(refColumn1Bounds);
    // console.log(refsById1[0].current?.getBoundingClientRect());
    // TODO - Get scroll position of each image ref

    // console.log(isVisibleById);


    // TODO - Track the first visible card from each column and set the category



    function getBreakpointIndex(refsById: { [key: string]: React.RefObject<HTMLImageElement> }) {
      const cardBreakpoint = Object.keys(refsById).map((_, index) => index / Object.keys(refsById).length);
      const closestBreakpointIndex = cardBreakpoint.reduce(
        (acc, breakpoint, index) => {
          const distance = Math.abs(latest - breakpoint);
          if (distance < Math.abs(latest - cardBreakpoint[acc])) {
            return index;
          }
          return acc;
        },
        0
      );
      return closestBreakpointIndex;
    }


    // const cardBreakpoint1 = firstPart.map((_, index) => index / firstPart.length);
    // // const cardsBreakpoints = content.map((_, index) => index / cardLength);
    // const closestBreakpointIndex1 = cardBreakpoint1.reduce(
    //   (acc, breakpoint, index) => {
    //     const distance = Math.abs(latest - breakpoint);
    //     if (distance < Math.abs(latest - cardBreakpoint1[acc])) {
    //       return index;
    //     }
    //     return acc;
    //   },
    //   0
    // );

    const breakpointIndex1 = getBreakpointIndex(refsById1);
    const breakpointIndex2 = getBreakpointIndex(refsById2);
    const breakpointIndex3 = getBreakpointIndex(refsById3);
    console.log("closestBreakpointIndex1", breakpointIndex1);

    setSelectedCategory1(firstPart[breakpointIndex1].category);
    setSelectedCategory2(secondPart[breakpointIndex2].category);
    setSelectedCategory3(thirdPart[breakpointIndex3].category);


    // setActiveCard(closestBreakpointIndex);
  });

  return (
    <div
      className={ cn("h-[40rem] items-start overflow-y-auto w-full relative", className) }
      ref={ gridRef }
    >
      <div
        // className="grid grid-cols-2 sm:grid-cols-3 items-start w-full mx-auto gap-10 sm:gap-28 p-10 absolute top-5 z-0"
        // top-20 sm:top-0 bottom-30 sm:bottom-10
        className="grid grid-cols-2 sm:grid-cols-3 items-start w-full mx-auto gap-10 sm:gap-28 p-10 absolute top-0 bottom-0 z-0"
        // ref={ gridRef }
      >
        <div className="grid gap-10 relative" ref={ columnRef1 }>

          {/* <div className="sticky left-0 right-0 top-0 bg-black z-[1] flex justify-center py-6 text-center">
            <h1 className="text-3xl font-medium">{ selectedCategory1 }</h1>
          </div> */}


          <div className="sticky left-0 right-0 top-0 bg-black z-[1] flex justify-center py-6 text-center">
            <h1 className="text-3xl font-medium">{ selectedCategory1 }</h1>
          </div>






          { firstPart.map((content, idx) => (
            <motion.div
              style={ { y: translateFirst } } // Apply the translateY motion value here
              key={ "grid-1" + idx }
              className="bg-slate-500 rounded-3xl p-5"
            >
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById1[idx] }
                id={ (content.id as number).toString() }
              />
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10 relative" ref={ columnRef2 }>


          <div className="sticky left-0 right-0 top-0 bg-black z-[1] flex justify-center py-6 text-center">
            <h1 className="text-3xl font-medium">{ selectedCategory2 }</h1>
          </div>


          { secondPart.map((content, idx) => (
            <motion.div style={ { y: translateSecond } } key={ "grid-2" + idx } className="bg-slate-500 rounded-3xl p-5">
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById2[content.id as number] }
                id={ (content.id as number).toString() }
              />
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10 relative" ref={ columnRef3 }>


          <div className="sticky left-0 right-0 top-0 bg-black z-[1] flex justify-center py-6 text-center">
            <h1 className="text-3xl font-medium">{ selectedCategory3 }</h1>
          </div>



          { thirdPart.map((content, idx) => (
            <motion.div style={ { y: translateThird } } key={ "grid-3" + idx } className="bg-slate-500 rounded-3xl p-5">
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById3[content.id as number] }
                id={ (content.id as number).toString() }
              />
            </motion.div>
          )) }
        </div>
      </div>
    </div>
  );
};
export default ParallaxScrollChain;
