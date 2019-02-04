import React, { useRef } from "react";
import randomcolor from "randomcolor";
import useWindowSize from "./hooks/useWindowSize";
import usePointers from "./hooks/usePointers";

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
          <circle
            key={pointer.id}
            cx={pointer.x}
            cy={pointer.y}
            r="50px"
            stroke={randomcolor()}
            fill="none"
          />
        ))}
      </g>
    </svg>
  );
}

export default App;
