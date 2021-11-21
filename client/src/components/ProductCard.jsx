import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // TODO: shift to util
  const getPostedDays = (createdDate) => {
    const today = new Date();
    const postedDate = new Date(createdDate);

    const oneDay = 1000 * 60 * 60 * 24;

    const diffInTime = today.getTime() - postedDate.getTime();
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  };

  // const getUsername = async (userId) => {
  //   console.log("getUsername");
  //   await userService.getUsernameById(userId);
  // };

  // console.log(product.userId);
  // getUsername(product.userId);
  return (
    // <div className="bg-white duration-300 flex flex-col max-w-xs rounded-xl shadow-lg space-y-4 transform w-full hover:translate-y-2">
    <div className="bg-white h-30 rounded-lg shadow-md space-y-4">
      <div className="flex flex-row items-center justify-between pt-4 px-4">
        <p className="font-semibold text-sm">
          <span className="font-bold">Seller:</span> {product.user.name}
        </p>
        <p className="text-sm italic">
          Posted {getPostedDays(product.createdAt)} days ago
        </p>
      </div>
      {/* image */}
      <div className="flex justify-center cursor-pointer">
        <img
          className="w-full h-64 object-fill mx-auto mt-7"
          src={product.productImgUrl}
          alt=""
        />
      </div>
      {/* title */}
      <div className="flex flex-col px-4">
        <div className="flex flex-col -space-y-0.5 pb-4">
          {/* link to product details */}
          <Link to="/" className="font-medium tracking-wide w-max">
            {product.name}
          </Link>
          {/* category */}
          <p className="text-gray-500 text-xs">Fruit</p>
          <p className="text-gray-800 text-xs py-1">
            <span className="font-medium">Condition: </span> New
          </p>
          <h1 className="font-medium text-2xl">${product.price.toFixed(2)}</h1>
        </div>
      </div>
      {/* price */}
      {/* <div className="flex flex-row items-center justify-between pb-4 px-4">
        <h1 className="font-medium text-2xl">$10</h1>
      </div> */}
    </div>
  );
};

export default ProductCard;
