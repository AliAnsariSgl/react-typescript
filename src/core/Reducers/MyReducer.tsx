import { MyContextType } from "../Contexts/MyContext";

// Define your action types
type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

// Define your reducer function
export const reducer = (
  state: MyContextType,
  action: Action,
): MyContextType => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
