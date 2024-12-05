import { createContext, useContext, useEffect, useReducer } from "react";
import { initVal, PRODUCTS, reducer } from "./Reducer";
import data from "./data.json";

export const Context = createContext();


export default function UserContex({ children }) {
  const [state, dispatch] = useReducer(reducer, initVal);

  useEffect(() => {
    dispatch({ type: PRODUCTS, payload: data });
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

// Custom hook to access the context
export function MainContext() {
  return useContext(Context);
}
