import { RefObject, useEffect, useReducer } from "react";
import Pointer from "../types/Pointer";
import { produce } from "immer";

interface PositionAction {
  type: "move" | "down";
  pointer: Pointer;
}

interface IDAction {
  type: "up";
  id: number;
}

type Action = PositionAction | IDAction;
type State = Pointer[];

const pointersReducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case "down": {
      return produce(state, draft => {
        draft[action.pointer.id] = action.pointer;
      });
    }
    case "move": {
      if (state[action.pointer.id])
        return produce(state, draft => {
          draft[action.pointer.id] = action.pointer;
        });
      return state;
    }
    case "up": {
      return state.filter(pointer => pointer.id !== action.id);
    }
  }
};

const usePointers = (ref: RefObject<EventTarget | null>) => {
  const [pointers, dispatch] = useReducer(pointersReducer, []);

  useEffect(() => {
    const handleDown = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({
          type: "down",
          pointer: { id: e.pointerId, x: e.clientX, y: e.clientY }
        });
      }
    };
    const handleMove = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({
          type: "move",
          pointer: { id: e.pointerId, x: e.clientX, y: e.clientY }
        });
      }
    };
    const handleUp = (e: Event) => {
      e.preventDefault();
      if (e instanceof PointerEvent) {
        dispatch({ type: "up", id: e.pointerId });
      }
    };

    const handleDisableMenu = (e: Event) => {
      e.preventDefault();
    };

    if (ref.current instanceof EventTarget) {
      ref.current.addEventListener("pointerdown", handleDown);
      ref.current.addEventListener("pointermove", handleMove);
      ref.current.addEventListener("pointerup", handleUp);
      ref.current.addEventListener("contextmenu", handleDisableMenu);
      return () => {
        if (ref.current instanceof EventTarget) {
          ref.current.removeEventListener("pointerdown", handleDown);
          ref.current.removeEventListener("pointermove", handleMove);
          ref.current.removeEventListener("pointerup", handleUp);
          ref.current.removeEventListener("contextmenu", handleDisableMenu);
        }
      };
    }
  }, [ref]);

  return pointers;
};

export default usePointers;
