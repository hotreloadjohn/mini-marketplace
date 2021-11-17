import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchedItem, setSearchedItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    //   queryImage(searchedItem)
  };
  return (
    <div class="pt-2 relative mx-auto text-gray-600">
      <input
        class="border-2 border-gray-300 bg-white h-10 w-96	 px-4 pr-14 rounded-lg text-sm focus:outline-none"
        type="text"
        name="search"
        placeholder="Looking for something?"
      />
      <button
        type="submit"
        class="bg-blue-400 rounded-md p-2 absolute -right-3 -top-2 mt-5 mr-4"
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
