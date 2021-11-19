import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { filterProduct } from "../features/productSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm);
    dispatch(filterProduct(searchTerm));
  };
  return (
    <div className="pt-2 relative text-gray-600 w-2/4">
      <form onSubmit={handleOnSubmit}>
        <input
          className="border-2 border-gray-300 bg-white h-10 w-full px-4 pr-14 rounded-lg text-sm focus:outline-none"
          type="text"
          name="search"
          value={searchTerm}
          placeholder="Looking for something?"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-400 rounded-md p-2 absolute -right-3 -top-2 mt-5 mr-4"
        >
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
