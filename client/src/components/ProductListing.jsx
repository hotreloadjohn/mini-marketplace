import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { getProducts } from "../features/productSlice";

const ProductListing = () => {
  const products = useSelector(getProducts);
  return (
    // flex flex-wrap items-center justify-center
    <div className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
