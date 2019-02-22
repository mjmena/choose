import { useRef, useEffect } from "react";

export default function useInterval(callback: () => void, duration: number) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, duration);
    return () => clearInterval(id);
  }, [duration]);
}
