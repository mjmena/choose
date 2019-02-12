import React, { useState, useCallback, useRef, useEffect } from "react";
import randomColor from "randomcolor";
import { useSpring, animated, config } from "react-spring";

import Pointer from "./types/Pointer";

type Props = {
  pointer: Pointer;
};

function useInterval(callback: () => void) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, 1500);
    return () => clearInterval(id);
  }, []);
}

const PointerFeedback = ({ pointer }: Props) => {
  const [color] = useState(randomColor());
  const [expand, setExpand] = useState(false);

  const toggleExpand = useCallback(() => {
    setExpand(lastExpand => !lastExpand);
  }, []);

  useInterval(toggleExpand);

  const spawn = useSpring({
    to: { r: expand ? 65 : 45 },
    config: config.molasses
  });

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

  //@ts-ignore
  return <animated.circle r={spawn.r} style={props} />;
};

export default React.memo(PointerFeedback);
