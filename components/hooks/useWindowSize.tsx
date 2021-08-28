import { useState, useEffect } from "react";

export default function useWindowSize() {
  
  const [windowSize, setWindowSize] = useState({width:0,height:0});
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return windowSize;
}
