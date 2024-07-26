"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";

import { createNoise3D } from "simplex-noise";

import { Stepper, StepperChangeEvent } from 'primereact/stepper';
import { StepperPanel } from 'primereact/stepperpanel';
import { Button } from 'primereact/button';


import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const CareerAndEducationTimelineContent = () => {
  const stepperRef = useRef(null);

  function handleStepperClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if ((e.target as HTMLButtonElement).classList.contains('pi-arrow-left') || (e.target as HTMLSpanElement).textContent === 'Back') {
      // @ts-ignore
      stepperRef?.current?.prevCallback()
    } else if ((e.target as HTMLButtonElement).classList.contains('pi-arrow-right') || (e.target as HTMLSpanElement).textContent === 'Next') {
      // @ts-ignore
      stepperRef?.current?.nextCallback() 
    }
  }
    

  return (
    <>
      <div className='h-full flex justify-center items-center'>
        <Stepper ref={ stepperRef } pt={ {
          root: {
            style: {
              flexBasis: '50rem',
            },
          }
        } }>
          {/* TODO - Make component for each stepper panel */ }
          <StepperPanel header="Header I">
            <div className="flex flex-col h-12rem">
              <div className="border-2 border-dashed border-gray-300 rounded surface-ground flex-auto flex justify-center items-center font-medium">Content I</div>
            </div>
            <div className="flex pt-4 justify-end">
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={ handleStepperClick } />
            </div>
          </StepperPanel>
          <StepperPanel header="Header II">
            <div className="flex flex-col h-12rem">
              <div className="border-2 border-dashed border-gray-300 rounded surface-ground flex-auto flex justify-center items-center font-medium">Content II</div>
            </div>
            <div className="flex pt-4 justify-between">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={ handleStepperClick } />
              <Button label="Next" icon="pi pi-arrow-right" iconPos="right" onClick={ handleStepperClick } />
            </div>
          </StepperPanel>
          <StepperPanel header="Header III">
            <div className="flex flex-col h-12rem">
              <div className="border-2 border-dashed border-gray-300 rounded surface-ground flex-auto flex justify-center items-center font-medium">Content III</div>
            </div>
            <div className="flex pt-4 justify-start">
              <Button label="Back" severity="secondary" icon="pi pi-arrow-left" onClick={ handleStepperClick } />
            </div>
          </StepperPanel>
        </Stepper>
      </div>
    </>
  );
};
export default CareerAndEducationTimelineContent;