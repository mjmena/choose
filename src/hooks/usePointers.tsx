import { RefObject, useEffect, useReducer } from "react";

interface Pointer {
  id: number;
  x: number;
  y: number;
}

interface PositionAction extends Pointer {
  type: "down" | "move";
}

interface IdAction {
  type: "up";
  id: number;
}

type Action = PositionAction | IdAction;

const pointersReducer = (state: Pointer[], action: Action) => {
  switch (action.type) {
    case "down": {
      return [...state, { id: action.id, x: action.x, y: action.y }];
    }
    case "move": {
      return state
        .filter(pointer => pointer.id === action.id)
        .concat({ id: action.id, x: action.x, y: action.y });
    }
    case "up": {
      return state.filter(pointer => pointer.id !== action.id);
    }
  }
};

const usePointers = (ref: RefObject<EventTarget | null>) => {
  const [pointers, dispatch] = useReducer(pointersReducer, [] as Pointer[]);

  useEffect(() => {
    const handleDown = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({ type: "down", id: e.pointerId, x: e.clientX, y: e.clientY });
      }
    };

    const handleUp = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({ type: "up", id: e.pointerId });
      }
    };
    if (ref.current instanceof EventTarget) {
      ref.current.addEventListener("pointerdown", handleDown);
      ref.current.addEventListener("pointerup", handleUp);
      return () => {
        if (ref.current instanceof EventTarget) {
          ref.current.removeEventListener("pointerdown", handleDown);
          ref.current.removeEventListener("pointerup", handleUp);
        }
      };
    }
  }, [ref]);
  return pointers;
};

export default usePointers;
