import React, { useRef } from "react";
import useWindowSize from "./hooks/useWindowSize";
import usePointers from "./hooks/usePointers";
import PointerFeedbackGroup from "./PointerFeedbackGroup";

const style: React.CSSProperties = {
  backgroundColor: "#222222",
  touchAction: "none"
};

function App() {
  const size = useWindowSize();
  const ref = useRef<SVGSVGElement | null>(null);
  const pointers = usePointers(ref);

  return (
    <svg ref={ref} width={size.width} height={size.height} style={style}>
      <PointerFeedbackGroup pointers={pointers} />
    </svg>
  );
}

export default App;
