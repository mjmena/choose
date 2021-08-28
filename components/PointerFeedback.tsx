import React from "react";
import { useSpring, animated, config } from "react-spring";

import Pointer from "./types/Pointer";

type Props = {
  pointer: Pointer;
  radius: number;
};

const PointerFeedback = ({ pointer, radius }: Props) => {
  const props = useSpring({
    from: { opacity: 0 },
    to: {
      opacity: 1,
      stroke: "red",
      fill: "white",
      cx: pointer.x,
      cy: pointer.y
    },
    config: config.stiff
  });

  props.opacity = props.opacity as any;

  return <animated.circle r={radius} style={props} />;
};

export default React.memo(PointerFeedback);
