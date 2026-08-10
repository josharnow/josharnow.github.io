"use client";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    const parent = canvas?.parentElement;

    if (!canvas || !context || !parent) {
      return;
    }

    const noise = createNoise3D();
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    const noiseSpeed = speed === "fast" ? 0.002 : 0.001;
    let width = 0;
    let height = 0;
    let noiseTime = 0;
    let animationId = 0;

    const resizeCanvas = () => {
      width = context.canvas.width = window.innerWidth;
      height = context.canvas.height = parent.offsetHeight;
      context.filter = `blur(${blur}px)`;
    };

    const drawWave = (waveCount: number) => {
      noiseTime += noiseSpeed;
      for (let waveIndex = 0; waveIndex < waveCount; waveIndex++) {
        context.beginPath();
        context.lineWidth = waveWidth || 50;
        context.strokeStyle = waveColors[waveIndex % waveColors.length];
        for (let x = 0; x < width; x += 5) {
          const y = noise(x / 800, 0.3 * waveIndex, noiseTime) * 100;
          context.lineTo(x, y + height * 0.5);
        }
        context.stroke();
        context.closePath();
      }
    };

    const render = () => {
      context.fillStyle = backgroundFill || "black";
      context.globalAlpha = waveOpacity;
      context.fillRect(0, 0, width, height);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [backgroundFill, blur, colors, speed, waveOpacity, waveWidth]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={ cn(
        "h-full flex flex-col items-center justify-center",
        containerClassName
      ) }
    >
      <canvas
        className={ cn(
          className
        ) }
        ref={ canvasRef }
        id="canvas"
        style={ {
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        } }
      ></canvas>
      {/* <div className={ cn("relative z-10", className) } { ...props }> */}
        { children }
      {/* </div> */}
    </div>
  );
};
export default WavyBackground;
