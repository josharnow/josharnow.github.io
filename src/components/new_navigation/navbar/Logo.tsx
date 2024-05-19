"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";
import joshArnowLogo from "@/src/assets/images/josh_arnow_logo.svg";

const Logo = () => {
  //update the size of the logo when the size of the screen changes
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    updateWidth();
  }, []);

  // change between the logo and the button when the user scrolls
  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton);
  }, []);

  return (
    <>
      <Link href="/" style={ { display: showButton ? "none" : "block" } }>
        {/* src="/src/assets/images/josh_arnow_logo.svg" */}
        <Image
          src={joshArnowLogo}
          alt="Logo"
          style={{ shapeRendering: 'geometricPrecision'}}
          quality={100}
        />
        {/* https://github.com/airbnb/lottie-web/issues/1976#issuecomment-1161091203 */}
        {/* <object type="image/svg+xml" data="../../../assets/images/josh_arnow_logo.svg">svg-image</object> */}
        {/* <object type="image/svg+xml" data={joshArnowLogo}>svg-image</object> */}
        {/* <Image
          src={joshArnowLogo}
          alt="Logo"
          className="relative"
        /> */}
          {/* width={ width < 1024 ? "150" : "250" }
          height={ width < 1024 ? "45" : "74" } */}
      </Link>
      <div
        style={ {
          display: showButton ? "block" : "none",
        } }
      >
        <Button />
      </div>
    </>
  );
};

export default Logo;