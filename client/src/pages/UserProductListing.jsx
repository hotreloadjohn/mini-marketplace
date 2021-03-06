import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { selectCurrentUser } from "../features/authSlice";
import { useGetUserProductsByIdMutation } from "../services/productApi";

const UserProductListing = () => {
  const user = useSelector(selectCurrentUser);
  // const products = useSelector(getProducts);

  // let userProducts = products.filter(
  //   (product) => product.user.name === user.name
  // );

  const [userProducts, setUserProducts] = useState([]);
  const [getUserProduct] = useGetUserProductsByIdMutation();

  useEffect(() => {
    async function fetchData() {
      const res = await getUserProduct(user.userId);
      setUserProducts(res.data);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
