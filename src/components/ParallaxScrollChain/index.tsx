"use client";
import { useScroll, useTransform, AnimatePresence, motion } from "framer-motion";
import React, { useRef, useMemo, useEffect } from "react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import TrackableImage from "./TrackableImage";
import { CanvasRevealEffect } from "@/src/components";
import Link from "next/link";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const colorMap: {[key: string]: any} = {
  "Programming Languages": "blue-500",
  "Libraries": "purple-500",
  "Frameworks": "yellow-500",
  "Databases / ORMs / ODMs": "indigo-500",
  "Software": "slate-500",
  "Cloud Computing / CI / CD": "orange-500",
  "APIs": "red-500",
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




  const consolidatedContentArr: Content[] = [];

  for (const [, contentArr] of Object.entries(contentArrContainer)) {
    let i = 0;
    for (const [, value] of Object.entries(contentArr)) {
      const valueAndId = { ...value, id: i };
      consolidatedContentArr.push(valueAndId);
      i++;
    }
  }
  


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
    firstPart.forEach((item, i) => {
      refs[i] = React.createRef();
    })
    return refs;
  }, [firstPart]);
  const refsById2 = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    secondPart.forEach((item, i) => {
      refs[i] = React.createRef();
    })
    return refs;
  }, [secondPart]);
  const refsById3 = useMemo(() => {
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    thirdPart.forEach((item, i) => {
      refs[i] = React.createRef();
    })
    return refs;
  }, [thirdPart]);

  const consolidatedRefs = useMemo(() => {
    let i = 0;
    const refs: { [key: string]: React.RefObject<HTMLImageElement> } = {};
    for (const [, value] of Object.entries(refsById1)) {
      refs[i] = value;
      i++;
    }
    for (const [, value] of Object.entries(refsById2)) {
      refs[i] = value;
      i++;
    }
    for (const [, value] of Object.entries(refsById3)) {
      refs[i] = value;
      i++;
    }
    return refs;
  }, [refsById1, refsById2, refsById3]);


  function getTailwindColorRgb(color?: string) {
    const colorMapRgb: { [key: string]: number[] } = {
      "blue-500": [59, 130, 246],
      "purple-500": [168, 85, 247],
      "yellow-500": [234, 179, 8],
      "indigo-500": [99, 102, 241],
      "slate-500": [100, 116, 139],
      "orange-500": [249, 115, 22],
      "red-500": [239, 68, 68],
    };
    if (!color || !(color in colorMapRgb)) return [255, 255, 255];
    return colorMapRgb[color];
  }

  function handleTabClick(e: React.BaseSyntheticEvent<MouseEvent>) {
    const filteredRefs = Object.values(consolidatedRefs).filter((ref) => ref.current?.dataset.category === e.target.textContent);

    filteredRefs?.[0]?.current?.scrollIntoView({ 
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  }


  return (
    <div
      className={ cn("h-[40rem] w-full relative flex flex-col p-10 gap-5", className) }
      ref={ gridRef }
    >
      <div className="grow grid grid-cols-2 gap-2">
        {
          Object.keys(colorMap).map((key, idx) => (
            // NOTE - For some reason the shadow colors must be applied multiple times here for it to apply the colors dynamically...
            <div 
              onClick={handleTabClick}
              key={idx}
              className={ cn(
                `flex justify-center items-center rounded-full 
                shadow-purple-500 
                shadow-yellow-500 
                shadow-blue-500
                shadow-indigo-500
                shadow-slate-500
                shadow-orange-500
                shadow-red-500
                bg-purple-500
                bg-yellow-500
                bg-blue-500
                bg-indigo-500
                bg-slate-500
                bg-orange-500
                bg-red-500
                w-full p-1 my-0 mx-auto shadow-3xl cursor-pointer`,
                "bg-" + colorMap[key], 
                "shadow-" + colorMap[key]
              )}
            >
              <h3 className="text-sm sm:text-base font-medium text-center p-1">{key}</h3>
            </div>
          ))
        }

      </div>
      <div
        className=" overflow-y-auto overflow-x-hidden grid grid-cols-2 sm:grid-cols-3 items-start w-full mx-auto gap-10 sm:gap-28 grow"
      >
        <div className="grid gap-10 relative" ref={ columnRef1 }>

          { firstPart.map((content, idx) => (
            <motion.div
              style={ { y: translateFirst } } // Apply the translateY motion value here
              key={ "grid-1" + idx }
              className={ cn("rounded-3xl p-5 relative shadow-3xl", content.category && "bg-" + colorMap[content.category], content.category && "shadow-" + colorMap[content.category]) }
            >
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById1[idx] }
                id={ (content.id as number).toString() }
                category={ content.category }
              />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                  url={ content.url }
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
              className={ cn("rounded-3xl p-5 relative shadow-3xl", content.category && "bg-" + colorMap[content.category], content.category && "shadow-" + colorMap[content.category]) }
            >
            <TrackableImage
              src={ content.imageSrc as string }
              className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
              alt={ content.imageAlt || "thumbnail" }
              ref={ refsById2[idx] }
              id={ (content.id as number).toString() }
              category={ content.category }
            />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                  url={ content.url }
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
            <motion.div style={ { y: translateThird } } key={ "grid-3" + idx } className={ cn("rounded-3xl p-5 relative shadow-3xl", content.category && "bg-" + colorMap[content.category], content.category && "shadow-" + colorMap[content.category]) }>
              <TrackableImage
                src={ content.imageSrc as string }
                className="h-full w-full object-contain object-center rounded-lg gap-10 !m-0 !p-0"
                alt={ content.imageAlt || "thumbnail" }
                ref={ refsById3[idx] }
                id={ (content.id as number).toString() }
                category={ content.category }
              />
              <div className="absolute left-0 right-0 top-0 bottom-0">
                <Card
                  title={ content.title }
                  icon={ <></> }
                  url={ content.url }
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
  url,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  url?: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  const anchorRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!hovered || !url) {
      e.preventDefault();
    }
    // window.open(url, "_blank");
    setHovered(!hovered);
  }


  // useEffect(() => {
  //   if (!hovered && anchorRef.current) {
  //     anchorRef.current.style.opacity = "0";

  //     // TODO - Set opacity
  //   } else if (hovered && anchorRef.current) {
  //     anchorRef.current.style.opacity = "1";
  //   }
  // }, [hovered, anchorRef]);

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
              >
                { children }
              </motion.div>
            ) }
          </AnimatePresence>
        </div>
      </div>

      <Link 
        onClick={ handleClick }
        href={ url || "#" }
        className={ cn("relative z-40 rounded-3xl size-full flex text-center justify-center items-center cursor-pointer",
          "text-white text-base sm:text-2xl  mt-4 font-medium  transition duration-200", 
          "opacity-0 group-hover/canvas-card:opacity-100 group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2") }
        target="_blank"
        ref={ anchorRef }
      >
        { title }
      </Link>
    </div>
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