import React from "react";
import {
  Carousel,
  CarouselProvider,
  Dots,
  NextButton,
  PreviousButton,
} from "react-slim-carousel";
import "../../node_modules/react-slim-carousel/dist/index.css";

const images = [
  "https://images.unsplash.com/photo-1607082352121-fa243f3dde32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1607083205626-956228d6185d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
];

const BannerCarousel = () => {
  const slides = images.map((image) => (
    <img
      className="object-fill h-64 w-full"
      key={image}
      src={image}
      alt="img"
      draggable={false}
    />
  ));
  return (
    <div className="flex flex-col">
      <CarouselProvider>
        <div className="flex flex-col w-full h-full ">
          <div className="flex justify-evenly items-center w-full">
            <PreviousButton>&lt;</PreviousButton>
            <Carousel
              autoPlay={true}
              autoSize={false}
              centerMode={false}
              draggable={true}
              easing="ease-in-out"
              edgeFriction={0.3}
              gap={20}
              infinite
              initialSlide={0}
              interval={3000}
              orientation="horizontal"
              playDirection="normal"
              slidesToScroll={1}
              slideSpeed={400}
              threshold={0.2}
              visibleSlides={1}
            >
              {slides}
            </Carousel>
            <NextButton>&gt;</NextButton>
          </div>
        </div>
        <Dots dot={() => <div />} />
      </CarouselProvider>
    </div>
  );
};

export default BannerCarousel;
