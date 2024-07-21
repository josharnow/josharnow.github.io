// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
import styles from './styles.module.scss';
import { ContactModal } from "@/src/components";
import NavbarMenu from "./NavbarMenu";
import NavbarMenuButton from "./NavbarMenuButton";
import Link from "next/link";

const Navbar = ({ toggle, isOpen, navigationOptions }: { 
  toggle: () => void; 
  isOpen: boolean;
  navigationOptions: NavigationOption[];
  }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav className={ classNames(styles.navbar, "h-20 sm:hidden fixed shadow-3xl")}>
        <div 
          className={ classNames(
            styles.navbar, 
            "absolute left-0 right-0 top-0 bottom-0 z-40 bg-slate-700",
          ) }
        >
          <div className="flex justify-between items-center h-full w-full px-4 py-2">
            <div className="flex gap-x-4">
              <ContactModal />
              <Link 
                className="px-4 py-2 rounded-md text-white text-center relative overflow-hidden bg-black flex justify-center shadow-3xl shadow-blue-500 w-fit group/resume-btn" 
                href="/Josh_Arnow_Resume.pdf"
                target="_blank"
              >
                <span className="group-hover/resume-btn:translate-x-40 text-center transition duration-500">
                  📄 Résumé
                </span>
                <div className="-translate-x-40 group-hover/resume-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-black z-20">
                  📈
                </div>
              </Link>
            </div>
            <NavbarMenuButton toggle={ toggle } isOpen={ isOpen } />
          </div>
        </div>
        <NavbarMenu isOpen={isOpen} navigationOptions={navigationOptions} toggle={toggle} />
      </nav>
    </>
  );
};

export default Navbar;