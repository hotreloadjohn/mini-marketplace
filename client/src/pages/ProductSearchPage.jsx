import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ProductCard from "../components/ProductCard";
import { getSearchedProducts } from "../features/productSlice";

const ProductSearchPage = () => {
  const products = useSelector(getSearchedProducts);
  const { term } = useParams();

  return (
    <>
      <h2>
        Search Result: {products.length} item(s) for "{term}" found.
      </h2>
      <div className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductSearchPage;
