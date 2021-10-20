import React from "react";

import Slider from "react-slick";
import { PrevArrow, NextArrow } from "../Carousal/Arrow";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CollectionCard = (props) => {
  return (
    <>
    <div className="w-full h-30 px-2">
    <img
      className="w-full h-full rounded-xl"
      src={props.src}
      alt="Collection Image"
     />
    </div>
    </>
  );
};

const NightLifeCollection = () => {
  const settings = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }

  const CollectionImages = [
    "https://b.zmtcdn.com/data/collections/7e296d5b75ca7b0f88e451b49e41ba99_1618208591.jpg",
    "https://b.zmtcdn.com/data/collections/a160564c07aa3014066acd8fe4b4a0a5_1617950136.jpg",
    "https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015782.jpg",
    "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
    "https://b.zmtcdn.com/data/collections/eb69f5f6e70ac43c8c0923fef39fabaf_1535615947.jpg",
    "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
    "https://b.zmtcdn.com/data/collections/332d70c0ff0894191d1661739ce18fbd_1605194226.jpg",
    "https://b.zmtcdn.com/data/collections/9bbfe4d4a19b26430fa930295ec88bc5_1615975717.jpg"
  ]


  return (
    <>
      <Slider {...settings}>
        {CollectionImages.map((image) => (
          <CollectionCard src={image} />
        ))}
      </Slider>
    </>
  );
};

export default NightLifeCollection;
