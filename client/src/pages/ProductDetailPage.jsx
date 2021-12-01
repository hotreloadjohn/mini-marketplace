import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useGetProductDetailsByIdMutation } from "../services/productApi";

const ProductDetailPage = () => {
  let { id } = useParams();

  const [product, setProduct] = useState({});

  const [getProduct, { isLoading }] = useGetProductDetailsByIdMutation();

  useEffect(() => {
    async function fetchData() {
      const res = await getProduct(id);
      if (res) {
        console.log(res.data);
        setProduct(res.data);
      }
    }
    fetchData();
    // return () => {
    //   setProduct(null);
    // };
  }, [id, getProduct]);

  //   const product = products.filter((product) => product.id.toString() === id);
  //   console.log(products);
  return (
    <div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <div className="flex space-x-12 p-12 justify-center">
          {/* Product Image */}
          <div className="w-8/12 sm:w-4/12  px-4">
            <img
              className="bg-shadow rounded max-w-full  align-middle border-none"
              src={product.productImgUrl}
              alt=""
            />
          </div>
          <div className=" flex flex-col justify-between w-4/12 sm:w-4/12 h-1/5">
            {/* item details */}
            <div className="flex flex-col p-4 space-y-4 items-center">
              <p className="font-bold text-2xl">
                ${parseFloat(product.price).toFixed(2)}
              </p>
              <p className="text-xl	">{product.name}</p>
              <p className="text-xl	">{product.description}</p>
              <p className="text-xl	uppercase">
                <span className="capitalize">Condition: </span>
                {product.condition}
              </p>
              <p className="text-xl	">
                <span className="capitalize">category: </span>
                {product.category?.name}
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                Buy
              </button>
            </div>
            {/* seller info */}
            <div className="flex flex-col flex-1 items-center justify-evenly p-4">
              <p className="uppercase font-semibold	">Seller Info</p>
              <p>{product.user?.name}</p>
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-full">
                Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
