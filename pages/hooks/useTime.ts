import { useState } from "react";
import useInterval from "./useInterval";

export default function useTime(accuracy: number) {
  const [time, setTime] = useState(Date.now());
  useInterval(() => setTime(Date.now()), accuracy);
  return time;
}
