import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { setProduct } from "../features/productSlice";
import ProductService from "../services/product.service";
import { useDispatch } from "react-redux";
import ProductListing from "../components/ProductListing";

const LandingPage = () => {
  const dispatch = useDispatch();

  // Fetch backend product

  useEffect(() => {
    async function fetchData() {
      try {
        const products = await ProductService.getAllProducts();
        console.log(products);
        dispatch(setProduct(products));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      {/* Body Eg. Cards */}
      <ProductListing />
      <Footer />
    </div>
  );
};

export default LandingPage;
