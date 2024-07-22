import { useEffect, useState } from "react";
/**
 * Custom hook that returns the current window size.
 * 
 * @returns An object containing the width and height of the window.
 */
export function useWindowSize() {
  // SOURCE - https://stackoverflow.com/questions/62846043/react-js-useeffect-with-window-resize-event-listener-not-working
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  } as { width: number | undefined, height: number | undefined});
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}