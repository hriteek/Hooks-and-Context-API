import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./store";

// In order to access our state globally, we'll need to wrap our root <App/> component in our StoreProvider before rendering it in our ReactDOM.render() function.

ReactDOM.render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
