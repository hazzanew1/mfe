import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const mount = (el) => {
  ReactDOM.render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("__dev_container__");
  if (el) {
    mount(el);
  } else {
    console.log("marketing container missing");
  }
}

export default App;
