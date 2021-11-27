import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import UserProductListing from "./pages/UserProductListing";
import Footer from "./components/Footer";
import ProductSearchPage from "./pages/ProductSearchPage";
import SellProductPage from "./pages/SellProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { useAuth } from "./hooks/useAuth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/search/:term" element={<ProductSearchPage />} />
          <Route exact path="/product/:id" element={<ProductDetailPage />} />
          {/* <Route exact path="/main" element={<MainPage />} /> */}
          {/* <Route exact path="/login" element={<LoginPage />} /> */}
          <Route path="*" element={<LandingPage />} />
          {/* Protected routes */}
          <Route
            path="/sell"
            element={
              <RequireAuth redirectTo="/">
                <SellProductPage />
              </RequireAuth>
            }
          />

          <Route
            path="/mylisting"
            element={
              <RequireAuth redirectTo="/">
                <UserProductListing />
              </RequireAuth>
            }
          />

          {/* <Route exact path="/mylisting" element={<UserProductListing />} /> */}
          {/* <Route exact path="/sell" element={<SellProductPage />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

function RequireAuth({ children, redirectTo }) {
  const auth = useAuth();
  return auth.user ? children : <Navigate to={redirectTo} />;
}

export default App;
