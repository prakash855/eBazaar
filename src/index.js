import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "./StateManagement/Contexts/StateContext/StateContext";
import { AuthContextProvider } from "./StateManagement/Contexts/AuthContext/AuthContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <AuthContextProvider>
        <Router>
          <App />
        </Router>
      </AuthContextProvider>
    </ProductContext>
  </React.StrictMode>,
  document.getElementById("root")
);
