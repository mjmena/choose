import React, { useRef, useState } from "react";
import useTime from "./hooks/useTime";

type Props = {
  length: number;
};

const Countdown = ({ length }: Props) => {
  const currentTime = useTime(1000);
  const [zero] = useState(currentTime);
  return <> {length - Math.floor((currentTime - zero) / 1000)} </>;
};

export default React.memo(Countdown);
