import { RefObject, useEffect, useReducer } from "react";
import Pointer from "../types/Pointer";

interface PositionAction extends Pointer {
  type: "move";
}

interface IdAction {
  type: "up";
  id: number;
}

type Action = PositionAction | IdAction;

const pointersReducer = (state: Pointer[], action: Action) => {
  switch (action.type) {
    case "move": {
      return state
        .filter(pointer => pointer.id !== action.id)
        .concat({ id: action.id, x: action.x, y: action.y });
    }
    case "up": {
      return state.filter(pointer => pointer.id !== action.id);
    }
  }
};

const usePointers = (ref: RefObject<EventTarget | null>) => {
  const [pointers, dispatch] = useReducer(pointersReducer, [
    // { id: 500, x: 500, y: 500 },
    // { id: 999, x: 300, y: 240 }
  ]);

  useEffect(() => {
    const handleUp = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({ type: "up", id: e.pointerId });
      }
    };

    const handleMove = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({ type: "move", id: e.pointerId, x: e.clientX, y: e.clientY });
      }
    };

    const handleDisableMenu = (e: Event) => {
      e.preventDefault();
    };

    if (ref.current instanceof EventTarget) {
      ref.current.addEventListener("pointermove", handleMove);
      ref.current.addEventListener("pointerup", handleUp);
      ref.current.addEventListener("contextmenu", handleDisableMenu);
      return () => {
        if (ref.current instanceof EventTarget) {
          ref.current.addEventListener("pointermove", handleMove);
          ref.current.removeEventListener("pointerup", handleUp);
          ref.current.addEventListener("contextmenu", handleDisableMenu);
        }
      };
    }
  }, [ref]);

  return pointers;
};

export default usePointers;
