import React from "react";
import { Link } from "react-router-dom";
import ProductImg from "../assets/product-mock.jpg";

const ProductCard = () => {
  return (
    // <div className="bg-white duration-300 flex flex-col max-w-xs rounded-xl shadow-lg space-y-4 transform w-full hover:translate-y-2">
    <div className="bg-gray-500 duration-300 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 transform w-full hover:translate-y-2 m-6">
      <div className="flex flex-row items-center justify-between pt-4 px-4">
        <p className="font-semibold text-sm">
          <span className="font-bold">Seller:</span> John Ng
        </p>
        <p className="text-sm italic">Posted 2 days ago</p>
      </div>
      {/* image */}
      <div className="flex justify-center cursor-pointer">
        <img src={ProductImg} alt="" />
      </div>
      {/* title */}
      <div className="flex flex-col px-4">
        <div className="flex flex-col -space-y-0.5 pb-4">
          {/* link to product details */}
          <Link to="/" className="font-medium tracking-wide w-max">
            Apple
          </Link>
          {/* category */}
          <p className="text-gray-500 text-xs">Fruit</p>
          <p className="text-gray-800 text-xs py-1">
            <span className="font-medium">Condition: </span> New
          </p>
          <h1 className="font-medium text-2xl">$10</h1>
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
