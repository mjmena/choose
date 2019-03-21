import React, { useRef, useMemo } from "react";
import useWindowSize from "./hooks/useWindowSize";
import usePointers from "./hooks/usePointers";
import PointerFeedbackGroup from "./PointerFeedbackGroup";

function App() {
  const size = useWindowSize();
  const ref = useRef<SVGSVGElement | null>(null);
  const pointers = usePointers(ref);

  return (
    <svg
      viewBox={`0 0 ${size.width} ${size.height}`}
      ref={ref}
      width={size.width}
      height={size.height}
      style={{
        backgroundColor: "#222222",
        touchAction: "none"
      }}
    >
      <PointerFeedbackGroup pointers={pointers} />
    </svg>
  );
}

export default App;
