import React, { useState, useCallback, useRef, useEffect } from "react";
import randomColor from "randomcolor";
import { useSpring, animated, config } from "react-spring";

import Pointer from "./types/Pointer";

type Props = {
  pointer: Pointer;
  radius: number;
};

const PointerFeedback = ({ pointer, radius }: Props) => {
  const [color] = useState(randomColor());

  const props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
      stroke: color,
      fill: color,
      cx: pointer.x,
      cy: pointer.y
    },
    config: config.stiff
  });

  return <animated.circle r={radius} style={props} />;
};

export default React.memo(PointerFeedback);
