import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "./StateManagement/Contexts/StateContext/StateContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <Router>
        <App />
      </Router>
    </ProductContext>
  </React.StrictMode>,
  document.getElementById("root")
);
