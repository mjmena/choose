import React, { useState } from "react";
import randomColor from "randomcolor";
import { useSpring, animated } from "react-spring";

import Pointer from "./types/Pointer";

type Props = {
  pointer: Pointer;
};

const PointerFeedback = ({ pointer }: Props) => {
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
    config: { mass: 0, tension: 0, friction: 1 }
  });

  return <animated.circle r={50} style={props} />;
};

export default React.memo(PointerFeedback);
