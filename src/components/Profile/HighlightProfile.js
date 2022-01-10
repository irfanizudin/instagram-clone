import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./../Home";

const HighlightProfile = () => {
  const highlights = [
    {
      name: "One Color",
      image: "https://source.unsplash.com/collection/1103088/one-color",
    },
    {
      name: "Office Life",
      image: "https://source.unsplash.com/collection/1895329/office-life",
    },
    {
      name: "Happy",
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
    },
    {
      name: "Night Lights",
      image: "https://source.unsplash.com/collection/291422/night-lights",
    },
    {
      name: "One Color",
      image: "https://source.unsplash.com/collection/1103088/one-color",
    },
    {
      name: "Office Life",
      image: "https://source.unsplash.com/collection/1895329/office-life",
    },
    {
      name: "Happy",
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
    },
    {
      name: "Night Lights",
      image: "https://source.unsplash.com/collection/291422/night-lights",
    },
    {
      name: "One Color",
      image: "https://source.unsplash.com/collection/1103088/one-color",
    },
    {
      name: "Office Life",
      image: "https://source.unsplash.com/collection/1895329/office-life",
    },
    {
      name: "Happy",
      image: "https://source.unsplash.com/collection/838038/happy-%2B-free-feels",
    },
  ];

  const sliderSettings = {
    slidesToShow: 7,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 906,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 709,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-[118px] w-full relative overflow-hidden mt-10">
      <Slider
        {...sliderSettings}
        className="h-full w-full flex items-center px-[15px] lg:px-[50px] space-x-4 sm:space-x-12 "
      >
        {highlights &&
          highlights.map((highlight, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
                <div className="w-[64px] sm:w-[87px] aspect-square border border-gray-text/30 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={highlight.image}
                    alt="stories"
                    className="object-cover w-[54px] sm:w-[77px] aspect-square rounded-full"
                  />
                </div>
                <p className="text-sm sm:text-base sm:font-medium mt-3 text-center">
                  {highlight.name}
                </p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default HighlightProfile;
