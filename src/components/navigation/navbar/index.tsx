// NOTE - https://www.reddit.com/r/reactjs/comments/17i3a1p/what_is_the_benefit_of_the_indextsx_naming/
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";
import variables from '@/src/styles/variables.module.scss';

export default function Navbar() {
  return (
    <>
      <div className="w-full h-20 sticky top-0 navbar" style={{backgroundColor: variables.primaryColor}}>
      {/* NOTE - I'm just testing SCSS styling above */}
      {/* <div className="w-full h-20 bg-emerald-800 sticky top-0 navbar"> */}
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo /> */}
            <ul className="hidden md:flex gap-x-6 text-white">
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
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}