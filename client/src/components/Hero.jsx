import React from "react";
import HeroImg from "../assets/heroshop.svg";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="h-48 bg-red-200 flex space-x-14 items-center	justify-center">
      <img
        className="md:object-scale-down h-32 w-32"
        src={HeroImg}
        alt="hero"
      />
      {/* <input
        className="h-14 w-64 ml-20 mt-10 p-2"
        type="text"
        placeholder="Looking for something?"
      /> */}
      <div className="flex">
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;
