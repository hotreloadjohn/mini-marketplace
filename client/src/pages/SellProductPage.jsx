import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/authSlice";
import { useCreateProductMutation } from "../services/productApi";
import utilsService from "../services/util.services";

// {
//     "email": "terry@gmail.com",
//     "name": "Black Army Belt",
//     "price": "3.50",
//     "isSold": false,
//     "productImgUrl": "https://media.karousell.com/media/photos/products/2021/11/18/black_army_no4_belt_1637228221_a866f9f0_progressive_thumbnail.jpg"
// }
const SellProductPage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const user = useSelector(selectCurrentUser);

  const [createproduct, { isLoading }] = useCreateProductMutation();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "devdev");

    // const productImgUrl = res.data.url;
    //     const email = user.email;

    const res = await utilsService.uploadImage(formData);
    if (res) {
      const data = await createproduct({
        productImgUrl: res.url,
        email: user.email,
        name,
        price,
        isSold: false,
      }).unwrap();
      console.log(data);
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    uploadFile();
  };
  return (
    <div className="flex flex-col justify-center w-2/4 p-6">
      <form onSubmit={handleOnSubmit}>
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-900 block mb-2">
            Product Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Product Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-900 block mb-2">
            Price
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <input
          className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
          aria-describedby="product_image"
          type="file"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="mt-1 text-sm text-gray-500 mb-2">
          A product picture is required for buyer to view your item
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellProductPage;
