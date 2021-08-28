import React, { useState, useCallback } from "react";
import Pointer from "../components/types/Pointer";
import PointerFeedback from "./PointerFeedback";
import { useSpring, config } from "react-spring";
import { easeSinInOut } from "d3-ease";
type Props = {
  pointers: Pointer[];
};

function PointerFeedbackGroup({ pointers }: Props) {
  const [isShrinking, setIsShrinking] = useState(false);
  const toggleExpand = useCallback(() => {
    setIsShrinking(lastExpand => !lastExpand);
  }, []);

  //@ts-ignore
  const { radius } = useSpring({
    from: { radius: 45 },
    to: { radius: 65 },
    config: { ...config.default, easing: easeSinInOut },
    reverse: isShrinking,
    onRest: toggleExpand
  });

  return (
    <g>
      {pointers.map(pointer => (
        <PointerFeedback key={pointer.id} pointer={pointer} radius={radius as any} />
      ))}
    </g>
  );
}

export default React.memo(PointerFeedbackGroup);
