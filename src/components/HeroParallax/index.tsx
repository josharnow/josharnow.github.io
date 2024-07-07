"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MovingBorderButton } from "@/src/components";

const HeroParallax = ({
  products,
  areLinksDisabled = false,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
  areLinksDisabled?: boolean;
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ ref }
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={ {
          rotateX,
          rotateZ,
          translateY,
          opacity,
        } }
        className="absolute flex flex-col"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          { firstRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateX }
              key={ product.title }
              isLinkDisabled={ areLinksDisabled }
            />
          )) }
        </motion.div>
        <motion.div className="flex flex-row space-x-20 my-20">
          { secondRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateXReverse }
              key={ product.title }
              isLinkDisabled={ areLinksDisabled }
            />
          )) }
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          { thirdRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateX }
              key={ product.title }
              isLinkDisabled={ areLinksDisabled }
            />
          )) }
        </motion.div>
      </motion.div>
      <div 
        className="text-white flex flex-col justify-end items-center absolute bottom-48"
      >
        <div
          className="flex flex-col items-center text-center text-balance px-6"
        >
          <motion.p
            key={ "about-page-technologies-bottom-content-1" }
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            exit={ { opacity: 0.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 1.0,
              ease: "easeInOut",
            } }
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            As a <span className="font-medium text-blue-500">full-stack developer</span>, I’ve used a plethora of technologies to provide the best solutions to clients across different industries
          </motion.p>
          <motion.div
            key={ "about-page-technologies-bottom-content-2" }
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            exit={ { opacity: 0.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 1.0,
              ease: "easeInOut",
            } }
            className="my-4 md:my-6 lg:my-10"
          >
            <MovingBorderButton
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-700 text-black dark:text-white border-neutral-200 dark:border-slate-800 font-medium z-10 text-normal sm:text-lg md:text-xl w-fit h-fit px-2 py-2 text-balance"
              duration={ 5000.0 }
            >
              <Link href="/technologies">My Technologies</Link>
            </MovingBorderButton>
          </motion.div>
          <motion.p
            key={ "about-page-technologies-bottom-content-3" }
            initial={ { opacity: 0.0, y: 0 } }
            whileInView={ { opacity: 1.0, y: 0 } }
            exit={ { opacity: 0.0, y: 0 } }
            transition={ {
              delay: 0.3,
              duration: 1.0,
              ease: "easeInOut",
            } }
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            My toolbelt is ready no matter the platform
          </motion.p>
        </div>
        
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full ">
      <motion.h1
        key={ "about-page-technologies-header" }
        initial={ { opacity: 0.0, y: 0 } }
        whileInView={ { opacity: 1.0, y: 0 } }
        exit={ { opacity: 0.0, y: 0 } }
        transition={ {
          delay: 0.3,
          duration: 1.0,
          ease: "easeInOut",
        } }
        className="text-4xl md:text-7xl font-medium dark:text-white"
      >
        Technology moves<br/>faster than light
      </motion.h1>
      <motion.p 
        key={ "about-page-technologies-subheader" }
        initial={ { opacity: 0.0, y: 0 } }
        whileInView={ { opacity: 1.0, y: 0 } }
        exit={ { opacity: 0.0, y: 0 } }
        transition={ {
          delay: 0.3,
          duration: 1.0,
          ease: "easeInOut",
        } }
        className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200"
      >
        Finding the most <span className="font-medium text-blue-500">innovative</span>, <span className="font-medium text-blue-500">competitive</span>, and <span className="font-medium text-blue-500">sustainable solutions</span> for your needs can be a challenge with new tools emerging by the day
      </motion.p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
  isLinkDisabled = false,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
  isLinkDisabled?: boolean;
}) => {
  return (
    <motion.div
      style={ {
        x: translate,
      } }
      whileHover={ {
        y: -20,
      } }
      key={ product.title }
      className="group/product h-96 w-[32rem] relative flex-shrink-0"
    >
      <Link
        href={ product.link }
        className="block group-hover/product:shadow-2xl"
        onClick={ (e) => { e.preventDefault() } }
      >
        <Image
          src={ product.thumbnail }
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={ product.title }
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        { product.title }
      </h2>
    </motion.div>
  );
};
export default HeroParallax;