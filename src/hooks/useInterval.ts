import { useRef, useEffect } from "react";

export default function useInterval(callback: () => void, duration: number) {
  const savedCallback = useRef(callback);
  const timeout = useRef(0);
  const expectedTime = useRef(Date.now() + duration);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
      const dt = Date.now() - expectedTime.current;
      expectedTime.current += duration;
      //@ts-ignore
      timeout.current = setTimeout(tick, Math.max(0, duration - dt));
    }

    //@ts-ignore
    timeout.current = setTimeout(tick, duration);
    return () => clearTimeout(timeout.current);
  }, [duration]);
}
