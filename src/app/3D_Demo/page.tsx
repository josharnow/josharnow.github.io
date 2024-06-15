"use client";
// NOTE - "use client" appears to be necessary to compile this without an error
import { Suspense, useState } from 'react';
import { type Camera, Canvas } from '@react-three/fiber';
// import { Loader as dreiLoader } from "@react-three/drei";
import { Loader } from '@/src/components';
import { Island } from '@/src/models';
import { FontData, Text3D } from '@react-three/drei';
import text3DFont from '@/src/assets/fonts/ibm_plex_sans_var_roman_regular.json';
// import { Leva, useControls } from 'leva';

export default function ThreeDDemo() {
  const cameraProps = {
    near: 0.1,
    far: 1000,
  } as Camera;


  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  // const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const currentFocusPoint = 0;

  const adjustIslandForScreenSize = () => {
    let screenScale;
    const screenPosition = [0, -6.5, -43];
    const islandRotation = [0.1, 4.7, 0]

    // NOTE - Can't access window.innerWidth due to SSR, so I'm using a fixed value for now (https://stackoverflow.com/questions/69009355/getting-width-of-screen-using-window-innerwidth-not-working) (there are workarounds)
    // if (window.innerWidth < 768) {
    //   screenScale = [0.9, 0.9, 0.9];
    // } else {
    //   screenScale = [1, 1, 1];
    // }
    screenScale = [1, 1, 1];

    return [screenScale, screenPosition, islandRotation]
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <>
      {/* <Leva /> */}
      <Canvas 
        className='w-full h-full bg-transparent'
        camera={cameraProps}
      >
        <Suspense fallback={<Loader />}>
        {/* NOTE - https://codesandbox.io/p/sandbox/r3f-drei-3d-text-de86ih?file=%2Fsrc%2FApp.js */}
        {/* <Text3D font={text3DFont as FontData}>
            Josh Arnow
        </Text3D> */}


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
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </>
  );
}
