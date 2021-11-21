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
  "https://www.humanesociety.org/sites/default/files/styles/2000x850/public/2018/08/kitten-440379.jpg?h=c8d00152&itok=dz_bhvnR",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
  "https://www.nationalparks.nsw.gov.au/-/media/npws/images/native-animal-profiles/platypus-ornithorhynchus-anatinus/platypus-02.jpg",
  "https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg",
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
    <div className="flex flex-col w-3/5 ml-12">
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
