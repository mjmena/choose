import React, { useRef, useMemo } from "react";
import useWindowSize from "../components/hooks/useWindowSize";
import usePointers from "../components/hooks/usePointers";
import PointerFeedbackGroup from "../components/PointerFeedbackGroup";

function Index() {
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

export default Index;
