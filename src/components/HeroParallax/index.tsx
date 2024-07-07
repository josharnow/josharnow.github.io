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

const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
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
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={ {
          rotateX,
          rotateZ,
          translateY,
          opacity,
        } }
        className="absolute"
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          { firstRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateX }
              key={ product.title }
            />
          )) }
        </motion.div>
        <motion.div className="flex flex-row space-x-20 my-20">
          { secondRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateXReverse }
              key={ product.title }
            />
          )) }
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          { thirdRow.map((product) => (
            <ProductCard
              product={ product }
              translate={ translateX }
              key={ product.title }
            />
          )) }
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full ">
      <motion.h1
        key={ "about-page-technology-header" }
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
        key={ "about-page-technology-subheader" }
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
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
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
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={ product.link }
        className="block group-hover/product:shadow-2xl "
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