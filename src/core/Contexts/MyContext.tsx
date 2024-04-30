import { ReactNode, createContext, useReducer } from "react";
import { reducer } from "../Reducers/MyReducer";

// Define your context type
export interface MyContextType {
  // Define your context state and any functions you want to expose
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the initial state
const initialState: MyContextType = {
  count: 0,
  increment: () => {},
  decrement: () => {},
};

export const MyContext = createContext<MyContextType>(initialState);

// Define your provider props
type MyProviderProps = {
  children: ReactNode;
};

// Create a Provider component
export const MyContextProvider: React.FC<MyProviderProps> = ({ children }) => {
  // Use useReducer hook to manage state
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define your context values
  const contextValues: MyContextType = {
    count: state.count,
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };

  // Return the provider with value
  return (
    <MyContext.Provider value={contextValues}>{children}</MyContext.Provider>
  );
};
