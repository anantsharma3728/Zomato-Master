import React from "react";

import Slider from "react-slick";
import {PrevArrow, NextArrow} from "./Arrow";
import Poster from "./poster";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const FirstOrderCarousal = () => {
  const settingsLg = {
    arrows: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    InitialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  }

  const FoodImages = [
    {
      src: "https://b.zmtcdn.com/data/o2_assets/7e83ad932f340bacd71bd7e891ede6541632716696.png",
      title: "Biryani"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/ed782b0b295520da4d4d92c01fb779811632716695.png",
      title: "Basundi"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/3d902eb4bb267efea010ade87bcb1f3f1632716698.png",
      title: "Chaat"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/dff007e05e2f72a4abc0772c7a8cd0951632716697.png",
      title: "Burger"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/adbe5236974520ecba7cb9f47e4c92011632716658.png",
      title: "Chicken"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/b78083afb63995c7e0a676d01dcc164d1632716549.png",
      title: "Thali"
    },
    {
      src: "https://b.zmtcdn.com/data/o2_assets/7f5ceb9a6ae7e662ba2fec0e994fc0ad1632716550.png",
      title: "Veg Kolhapuri"
    },
  ];


  return (
    <>
    <div className="items-start">
    <Slider {...settingsLg}>
    {FoodImages.map((image)=> (
    <Poster {...image} />
  ))}
  </Slider>
</div>
    </>
  )
};

export default FirstOrderCarousal;
