import React from "react";

type State = {
  startTime: number;
};

const Countdown = ({ startTime }: State) => {
  return <>{Math.ceil(startTime)}</>;
};
