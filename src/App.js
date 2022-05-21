import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import API from "./Components/MockMan/MockMan";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { Login, Signup, Cart, Home, WishList } from "./Pages/index";
import ProductListing from "./Pages/ProductListing/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <WishList />
            </ProtectedRoute>
          }
        />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/mockman" element={<API />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
