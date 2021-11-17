import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
// import Login from "../components/Login";

const LandingPage = () => {
  // Fetch backend product
  return (
    <div>
      <Hero />
      {/* Body Eg. Cards */}
      <div className="flex flex-wrap items-center justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
