import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Stories = () => {
  const users = [
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "John Doe",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Albert Doe",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "John Chris",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
  ];

  const sliderSettings = {
    slidesToShow: 7.5,
    slidesToScroll: 1.5,
    infinite: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1.5,
        },
      },
    ],
  };

  return (
    <div className="h-[118px] w-full relative overflow-hidden">
      <Slider
        {...sliderSettings}
        className="h-full w-full flex items-center p-[16px] bg-white border border-gray-text/30 rounded space-x-3"
      >
        {users &&
          users.map((user, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
                <div className="w-[66px] aspect-square border-2 border-story rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={user.image}
                    alt="stories-img"
                    className="object-cover w-[56px] aspect-square rounded-full"
                  />
                </div>
                <p className="text-sm text-black">{user.name}</p>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Stories;
