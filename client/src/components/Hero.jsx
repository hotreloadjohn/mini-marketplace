import React from "react";
import HeroImg from "../assets/heroshop.svg";
import BannerCarousel from "./BannerCarousel";
import BannerImg from "../assets/banner.png";

const Hero = () => {
  return (
    <div className="bg-gray-300 flex items-center justify-center">
      <BannerCarousel />
      <div className="flex flex-col space-y-8 ml-6">
        <img
          className="md:object-contain h-auto w-2/5"
          src={BannerImg}
          alt="banner"
        />
        <img
          className="md:object-scale-down h-32 w-2/5"
          src={HeroImg}
          alt="hero"
        />
      </div>
    </div>
  );
};

export default Hero;
