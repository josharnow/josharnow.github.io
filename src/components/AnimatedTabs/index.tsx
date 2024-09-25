"use client";

import React, { useState, useRef } from "react";
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
  indexOrder: number;
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

  const selectedTabbarElementRef = useRef<HTMLDivElement>(null);

  // TODO - Fix bug where tab doesn't focus when going to first index to last or vice versa. Don't have time to fix the minor issue now
  function handleBackClick(e: React.MouseEvent<HTMLButtonElement>, tabs: Tab[], activeTab: Tab) {
    const lastTabIndex = (activeTab.indexOrder - 1 + tabs.length) % tabs.length;
    moveSelectedTabToTop(lastTabIndex);

    setHovering(true);
    // NOTE - Timeout is set to the same transition duration in the CSS for the element
    setTimeout(() => {
      setHovering(false);
    }, 500);

    selectedTabbarElementRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "end" });
  }
  function handleNextClick(e: React.MouseEvent<HTMLButtonElement>, tabs: Tab[], activeTab: Tab) {
    const nextTabIndex = (activeTab.indexOrder + 1) % tabs.length;
    moveSelectedTabToTop(nextTabIndex);

    setHovering(true);
    // NOTE - Timeout is set to the same transition duration in the CSS for the element
    setTimeout(() => {
      setHovering(false);
    }, 500);

    selectedTabbarElementRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
  }

  return (
    <>
    {/* NOTE - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items */}
      <div
        className={ cn(
          "flex flex-row sm:flex-wrap overflow-x-auto overflow-y-hidden sm:items-center sm:justify-start [perspective:1000px] relative sm:overflow-visible no-visible-scrollbar max-w-full w-fit",
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
            className={ cn("relative px-2 sm:px-4 sm:py-2 rounded-full", tabClassName) }
            style={ {
              transformStyle: "preserve-3d",
              // "margin": "auto 0"
            } }
          >
            { active.value === tab.value && (
              <motion.div
                ref={ selectedTabbarElementRef }
                layoutId="clickedbutton"
                transition={ { type: "spring", bounce: 0.3, duration: 0.6 } }
                className={ cn(
                  "absolute inset-0 bg-zinc-800 rounded-full",
                  activeTabClassName
                ) }
              />
            ) }

            <span className="relative block text-white whitespace-nowrap">
              { tab.title }
            </span>
          </button>
        )) }
      </div>
      <div className="mt-4 w-full flex justify-between">
        {/* NOTE - After switching tab index, should focus on selected tab in bar */}
        <button 
          className="inline-flex size-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={ (e) => handleBackClick(e, tabs, active) }
          >
          <i className="pi pi-chevron-left"></i>
        </button>
        <button
          className="inline-flex size-12 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] p-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          onClick={ (e) => handleNextClick(e, tabs, active) }
          >
          <i className="pi pi-chevron-right"></i>
        </button>
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