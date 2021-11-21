import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { setProduct } from "../features/productSlice";
import { useDispatch } from "react-redux";
import ProductListing from "../components/ProductListing";
import { useGetAllProductsMutation } from "../services/productApi";

const LandingPage = () => {
  const dispatch = useDispatch();

  const [getAllProducts, { isLoading }] = useGetAllProductsMutation();

  // Fetch backend product

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const products = await ProductService.getAllProducts();
    //     console.log(products);
    //     dispatch(setProduct(products));
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }
    // fetchData();
    async function fetchData() {
      try {
        const products = await getAllProducts();
        if (products) dispatch(setProduct(products.data));
        // product is empty do smth
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Hero />
      {/* Body Eg. Cards */}
      <ProductListing />
    </div>
  );
};

export default LandingPage;
