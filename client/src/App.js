import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import UserProductListing from "./pages/UserProductListing";
import Footer from "./components/Footer";
import ProductSearchPage from "./pages/ProductSearchPage";
import SellProductPage from "./pages/SellProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/main" element={<MainPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/search/:term" element={<ProductSearchPage />} />
          <Route path="*" element={<LandingPage />} />
          {/* TODO: Make private route */}
          <Route exact path="/listings" element={<UserProductListing />} />
          <Route exact path="/sell" element={<SellProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
