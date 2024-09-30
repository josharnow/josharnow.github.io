"use client";
import { useScroll, useTransform, AnimatePresence, motion } from "framer-motion";
import React, { useRef, useMemo } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import TrackableImage from "./TrackableImage";
import { CanvasRevealEffect } from "@/src/components";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colorMap: {[key: string]: any} = {
  "Programming Languages": "bg-blue-500",
  "Libraries": "bg-purple-500",
  "Frameworks": "bg-yellow-500",
  "Databases / ORMs / ODMs": "bg-indigo-500",
  "Software": "bg-slate-500",
  "Cloud Computing / CI / CD": "bg-orange-500",
  "APIs": "bg-red-500",
};


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

  function getTailwindColorRgb(color?: string) {
    const colorMapRgb: { [key: string]: number[] } = {
      "bg-blue-500": [59, 130, 246],
      "bg-purple-500": [168, 85, 247],
      "bg-yellow-500": [234, 179, 8],
      "bg-indigo-500": [99, 102, 241],
      "bg-slate-500": [100, 116, 139],
      "bg-orange-500": [249, 115, 22],
      "bg-red-500": [239, 68, 68],
    };
    if (!color || !(color in colorMapRgb)) return [255, 255, 255];
    return colorMapRgb[color];
  }


  return (
    <div
      className={ cn("h-[40rem] w-full relative flex flex-col p-10 gap-5", className) }
      ref={ gridRef }
    >
      <div className="grow grid grid-cols-2 gap-2">
        {
          Object.keys(colorMap).map((key, idx) => (
            <div 
              key={idx}
              className={cn("flex justify-center items-center rounded-full w-full p-1 my-0 mx-auto", colorMap[key])}
            >
              <h3 className="text-sm sm:text-base font-medium text-center p-1">{key}</h3>
            </div>
          ))
        }

      </div>
      <div
        // className="overflow-y-auto grid grid-cols-2 sm:grid-cols-3 items-start w-full mx-auto gap-10 sm:gap-28 p-10 absolute top-52 sm:top-32 bottom-0 z-0"
        className=" overflow-y-auto grid grid-cols-2 sm:grid-cols-3 items-start w-full mx-auto gap-10 sm:gap-28 grow"
      >
        <div className="grid gap-10 relative" ref={ columnRef1 }>

          { firstPart.map((content, idx) => (
            <motion.div
              style={ { y: translateFirst } } // Apply the translateY motion value here
              key={ "grid-1" + idx }
              // className={ cn("bg-slate-500 rounded-3xl p-5", content.category?.toLowerCase() === "libraries" && "bg-red-500") }
              className={ cn("bg-slate-500 rounded-3xl p-5 relative", content.category && colorMap[content.category]) }
              // colorMap
            >
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById1[idx] }
                id={ (content.id as number).toString() }
              />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                >
                  <CanvasRevealEffect
                    // src={ content.imageSrc as string }
                    // alt={ content.imageAlt || "thumbnail" }
                    animationSpeed={ 3 }
                    containerClassName="bg-black bg-opacity-70"
                    colors={
                      [getTailwindColorRgb(colorMap[content.category as string])]
                    }
                  />
                </Card>
              </div>
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10 relative" ref={ columnRef2 }>


          {/* <div className="sticky left-0 right-0 top-0 bg-black z-[1] flex justify-center py-6 text-center">
            <h1 className="text-3xl font-medium">{ selectedCategory2 }</h1>
          </div> */}


          { secondPart.map((content, idx) => (
            <motion.div style={ { y: translateSecond } } key={ "grid-2" + idx } 
              className={ cn("bg-slate-500 rounded-3xl p-5 relative", content.category && colorMap[content.category]) }
            >
            <TrackableImage
              src={ content.imageSrc as string }
              className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
              alt={ content.imageAlt || "thumbnail" }
              ref={ refsById2[content.id as number] }
              id={ (content.id as number).toString() }
            />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                >
                  <CanvasRevealEffect
                    // src={ content.imageSrc as string }
                    // alt={ content.imageAlt || "thumbnail" }
                    animationSpeed={ 3 }
                    containerClassName="bg-black bg-opacity-70"
                    colors={
                      [getTailwindColorRgb(colorMap[content.category as string])]
                    }
                  />
                </Card>
              </div>
            </motion.div>
          )) }
        </div>
        <div className="grid gap-10 relative" ref={ columnRef3 }>


          { thirdPart.map((content, idx) => (
            <motion.div style={ { y: translateThird } } key={ "grid-3" + idx } className={ cn("bg-slate-500 rounded-3xl p-5 relative", content.category && colorMap[content.category]) }>
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById3[content.id as number] }
                id={ (content.id as number).toString() }
              />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                >
                  <CanvasRevealEffect
                    // src={ content.imageSrc as string }
                    // alt={ content.imageAlt || "thumbnail" }
                    animationSpeed={ 3 }
                    containerClassName="bg-black bg-opacity-70"
                    colors={
                      [getTailwindColorRgb(colorMap[content.category as string])]
                    }
                  />
                </Card>
              </div>
            </motion.div>
          )) }
        </div>
      </div>
    </div>
  );
};
export default ParallaxScrollChain;






const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={ () => setHovered(true) }
      onMouseLeave={ () => setHovered(false) }
      className="group/canvas-card flex items-center justify-center border-white/[0.2] w-full mx-auto p-4 h-full relative rounded-3xl"
    >

      <div className="h-full w-full absolute left-0 right-0 top-0 bottom-0 rounded-3xl z-30 p-4">
        <div className="size-full rounded-3xl relative">
          <AnimatePresence>
            { hovered && (
              <motion.div
                initial={ { opacity: 0 } }
                animate={ { opacity: 1 } }
                className="h-full w-full absolute left-0 right-0 top-0 bottom-0 rounded-3xl inset-0 overflow-hidden"
              // className="h-full w-full absolute inset-0 rounded-3xl"
              >
                { children }
              </motion.div>
            ) }
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-40 rounded-3xl size-full flex text-center justify-center items-center">
        {/* <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          { icon }
        </div> */}
        <h2 className="text-white text-2xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10  mt-4  font-medium group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 ">
          { title }
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={ { mixBlendMode: "darken" } }
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={ className }
      { ...rest }
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};