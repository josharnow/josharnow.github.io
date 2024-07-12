// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
import Link from "next/link";
// import Logo from "./Logo";
// import Button from "./Button";
import variables from '@/src/styles/variables.module.scss';
import styles from './styles.module.scss';
// import { classNames } from "@/src/app/_utils";
import { ContactModal } from "@/src/components";

const Navbar = ({ toggle }: { toggle: () => void }) => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <nav className={ classNames(styles.navbar, 'h-20 sm:hidden fixed bg-slate-700')}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <div className="p-3" style={{ height: '100%', aspectRatio: '1/1' }}>
              {/* <Logo /> */}
            </div>
            <ContactModal />
            {/* <ul className="flex gap-x-6 text-black ">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul> */}
            <button
              type="button"
              className="inline-flex items-center md:hidden"
              onClick={ toggle }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  fill="black"
                  d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;