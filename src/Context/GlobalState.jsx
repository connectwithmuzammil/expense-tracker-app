import { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";
//intial_state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//global_context
export const GlobalContext = createContext(initialState);

//provider_component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
