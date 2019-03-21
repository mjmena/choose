import { useRef, useEffect, useState } from "react";

export default function useTimeoutWhileTrue(
  expression: boolean,
  callback: () => void,
  duration: number
) {
  const savedCallback = useRef(callback);
  const [startTime, setStartTime] = useState<number | null>(null);
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (expression) {
      let id = setTimeout(tick, duration);
      setStartTime(Date.now());
      return () => {
        clearTimeout(id);
        setStartTime(null);
      };
    }
  }, [expression, duration]);

  return startTime;
}
