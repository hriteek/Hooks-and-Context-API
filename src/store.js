import React, { createContext, useReducer } from "react";

const initialState = { name: "Hriteek Bista" };
//  createContext() is used to create a new context. THis method returns an object with a Provider and Consumer component. Here, we'll be using only the Provider component and then the useContext Hook when we need to access our state.
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  // Here we are using the useReducer Hooks in out StateProvider. When we need to manipulate our state, we'll call the dispatch method and pass in an object with the desired type as its argument.
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "CHANGE_NAME":
        const newState = { ...state, name: action.payload }; // do something with the action
        return newState;
      default:
        throw new Error();
    }
  }, initialState);
  // In out StateProvider, we returned our Provider component with a value prop of state and dispatch from useReducer Hook
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
