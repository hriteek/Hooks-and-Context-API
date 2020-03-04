import React, { useContext } from "react";
import { store } from "./store";
import "./App.css";

// Our store context can be accessed from any component in the component tree. To do this, we;ll import useContext Hook from react and the store from our ./store.js file
const App = () => {
  const globalState = useContext(store);
  const { state, dispatch } = globalState;
  return (
    <div className="App">
      <h1>Hello {state.name}</h1>
      <button
        type="button"
        onClick={() => dispatch({ type: "CHANGE_NAME", payload: "World" })}
      >
        Click Me
      </button>
    </div>
  );
};

export default App;
