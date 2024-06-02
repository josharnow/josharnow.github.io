"use client";
// NOTE - "use client" appears to be necessary to compile this without an error
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// import { Loader as dreiLoader } from "@react-three/drei";
import { Loader } from '@/src/components';


export default function ThreeDDemo() {

  return (
    <>
      <h1>3D demo test</h1>
      <Canvas 
        className='w-full h-full bg-transparent'
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
      </Canvas>
    </>
  );
}
