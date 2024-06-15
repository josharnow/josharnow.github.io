"use client";
// NOTE - "use client" appears to be necessary to compile this without an error
import { Suspense, useState } from 'react';
import { type Camera, Canvas } from '@react-three/fiber';
// import { Loader as dreiLoader } from "@react-three/drei";
import { Loader } from '@/src/components';
import { Island } from '@/src/models';


export default function ThreeDDemo() {
  const cameraProps = {
    near: 0.1,
    far: 1000,
  } as Camera;

  const [isRotating, setIsRotating] = useState(true);
  const [currentStage, setCurrentStage] = useState(0);
  const currentFocusPoint = 0;

  return (
    <>
      <h1>3D demo test</h1>
      <Canvas 
        className='w-full h-full bg-transparent'
        camera={cameraProps}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight  />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
          {/* TODO - Set up props for island */}
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={ setCurrentStage as (stage: number | null) => void }
            currentFocusPoint={currentFocusPoint}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
