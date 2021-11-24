import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../features/authSlice";
import { useCreateProductMutation } from "../services/productApi";
import utilsService from "../services/util.services";
import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.min.css";

const SellProductPage = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory] = useState("Consumer electronics");

  const user = useSelector(selectCurrentUser);

  const [createproduct] = useCreateProductMutation();

  const uploadFile = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );

    const res = await utilsService.uploadImage(formData);
    if (res) {
      const data = await createproduct({
        productImgUrl: res.url,
        email: user.email,
        name,
        price,
        isSold: false,
        description,
        condition,
        category,
      }).unwrap();
      if (data) {
        toast.success("Your Product ready to be sold!", {
          onClose: () => window.location.reload(),
        });
        // navigate("/sell");
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    uploadFile();
  };
  return (
    <div className="flex justify-center items-center p-4 border-4 ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form onSubmit={handleOnSubmit} className="w-2/4">
        <div className="flex flex-col  p-4">
          <div className="mb-6 flex flex-col space-y-2 ">
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Product<span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Product Name"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className=" w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg"
              aria-describedby="product_image"
              type="file"
              required
              onChange={(e) => setFile(e.target.files[0])}
            />
            <div className="mt-1 text-sm text-gray-500 mb-2">
              A product picture is required for buyer to view your item
            </div>
            <label className="text-sm font-medium text-gray-900 block mb-2">
              Price<span className="text-red-600">*</span>
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
          <div className="flex flex-col w-full">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Description
            </label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="resize-none border rounded-md p-2"
            ></textarea>
          </div>

          <div className="mt-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Category
            </label>
            <select
              className="form-select mt-1 w-full border-2"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option>Consumer electronics</option>
              <option>Fashion and beauty</option>
              <option>Toys, DIY, and hobbies</option>
              <option>Personal care</option>
              <option>Others</option>
            </select>
          </div>

          <div className="mt-2">
            <label
              htmlFor="description"
              className="text-sm font-medium text-gray-900 block mb-2"
            >
              Item Condition
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="condition"
                  value={condition}
                  checked={condition === "new"}
                  onClick={() => setCondition("new")}
                  readOnly
                />
                <span className="ml-2">New</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="condition"
                  value={condition}
                  checked={condition === "Well Used"}
                  onClick={() => setCondition("Well Used")}
                  readOnly
                />
                <span className="ml-2">Well Used</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  name="condition"
                  value={condition}
                  checked={condition === "Used"}
                  onClick={() => setCondition("Used")}
                  readOnly
                />
                <span className="ml-2">Used</span>
              </label>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellProductPage;
