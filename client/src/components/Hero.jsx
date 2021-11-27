import React from "react";
import HeroImg from "../assets/heroshop.svg";
import BannerCarousel from "./BannerCarousel";

const Hero = () => {
  return (
    // bg-gray-100 flex items-center justify-center
    <div className="w-full m-auto flex items-center">
      <div className="w-3/4 ml-10">
        <BannerCarousel />
      </div>
      <div className="flex flex-col w-1/4 items-center p-4">
        {/* <div className="w-2/4 bg-red-300">
          <div className="aspect-w-2 aspect-h-2">
            <img className="object-fill" src={BannerImg} alt="banner" />
          </div>
        </div> */}
        <div className="">
          <img className="object-fill" src={HeroImg} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
