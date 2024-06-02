// "use client";
import { Html } from "@react-three/drei";
import React from "react";

const Loader = () => {
  return (
    <>
      {/* NOTE - HTML appears broken for some reason... doesn't seem to be related to Million.js */}
      {/* <Html>
        <div className='flex justify-center items-center'>
          <div className='w-20 h-20 border-2 border-opacity-20 border-blue-500 border-t-blue-500 rounded-full animate-spin'></div>
        </div>
      </Html> */}
    </>
  );
};

export default Loader;