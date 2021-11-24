import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectCurrentUser } from "../features/authSlice";
import { getProducts } from "../features/productSlice";

const UserProductListing = () => {
  const user = useSelector(selectCurrentUser);
  const products = useSelector(getProducts);

  let userProducts = products.filter(
    (product) => product.user.name === user.name
  );

  return (
    <>
      <h1>My Product:</h1>

      <div className="p-20 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {userProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default UserProductListing;
