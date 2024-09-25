"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import styles from './styles.module.scss';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
    {/* NOTE - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items */}
      <div
        className={ cn(
          "flex flex-row flex-wrap items-center justify-start [perspective:1000px] relative h-fit sm:overflow-visible no-visible-scrollbar max-w-full w-fit",
          containerClassName
        ) }
      >
        { propTabs.map((tab, idx) => (
          <button
            key={ tab.title }
            onClick={ () => {
              moveSelectedTabToTop(idx);
            } }
            onMouseEnter={ () => setHovering(true) }
            onMouseLeave={ () => setHovering(false) }
            className={ cn("relative px-4 py-2 rounded-full", tabClassName) }
            style={ {
              transformStyle: "preserve-3d",
            } }
          >
            { active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={ { type: "spring", bounce: 0.3, duration: 0.6 } }
                className={ cn(
                  "absolute inset-0 bg-zinc-800 rounded-full ",
                  activeTabClassName
                ) }
              />
            ) }

            <span className="relative block text-white">
              { tab.title }
            </span>
          </button>
        )) }
      </div>
      <FadeInDiv
        tabs={ tabs }
        active={ active }
        key={ active.value }
        hovering={ hovering }
        className={ cn("mt-32", contentClassName) }
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      { tabs.map((tab, idx) => (
        <motion.div
          key={ tab.value }
          layoutId={ tab.value }
          style={ {
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? (1 - idx * 0.1) : 0,
          } }
          animate={ {
            y: isActive(tab) ? [0, 40, 0] : 0,
          } }
          className={ cn(
            styles.tab, 
            (isActive(tab) && hovering) ? styles.selectedTabHovering : isActive(tab) ? styles.selectedTabNotHovering : hovering ? styles.unselectedTabHovering : styles.unselectedTabNotHovering,
            "w-full h-full absolute top-0 left-0", 
            className
          ) }
        >
          { tab.content }
        </motion.div>
      )) }
    </div>
  );
};
export default Tabs;