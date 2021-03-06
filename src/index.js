import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductContext } from "./StateManagement/Contexts/StateContext/StateContext";
import { AuthContextProvider } from "./StateManagement/Contexts/AuthContext/AuthContext";
import { CartProvider } from "./StateManagement/Contexts/CartContext/CartContext";
import { WishListProvider } from "./StateManagement/Contexts/WishListContext/WishListContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <AuthContextProvider>
        <CartProvider>
          <WishListProvider>
            <Router>
              <App />
            </Router>
          </WishListProvider>
        </CartProvider>
      </AuthContextProvider>
    </ProductContext>
  </React.StrictMode>,
  document.getElementById("root")
);
