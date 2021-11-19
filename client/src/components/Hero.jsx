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
      <div className="flex"> Add a carsousel slider </div>
      {/* <div className="flex">
        <SearchBar />
      </div> */}
    </div>
  );
};

export default Hero;
