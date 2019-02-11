import React, { useRef } from "react";
import useWindowSize from "./hooks/useWindowSize";
import usePointers from "./hooks/usePointers";
import PointerFeedback from "./PointerFeedback";

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
      <g>
        {pointers.map(pointer => (
          <PointerFeedback key={pointer.id} pointer={pointer} />
        ))}
      </g>
    </svg>
  );
}

export default App;
