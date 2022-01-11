import React from "react";
import Button from "../Common/Button";
import { NextArrow, PrevArrow } from "../Home";
import { BsFillPlayFill } from "react-icons/bs";
import { MdVolumeUp, MdVolumeOff } from "react-icons/md";
import { HiDotsHorizontal, HiOutlinePaperAirplane } from "react-icons/hi";
import { useParams } from "react-router-dom";

const StoriesItem = () => {
  const { username } = useParams();

  return (
    <div className="px-10 bg-transparent mx-auto my-auto relative">
      <PrevArrow />
      <NextArrow />
      <div className="w-[360px] h-[640px] bg-white mx-auto rounded-lg overflow-hidden relative">
        <img
          src="https://source.unsplash.com/collection/pzzjY5_eQ4k/levitation-photography"
          alt="stories"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-4 left-4 right-5">
          <div className="h-[3px] rounded-lg bg-white "></div>
          <div className="w-full mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-[30px] aspect-square rounded-full"
              />
              <p className="text-base font-medium text-white">{username}</p>
              <p className="text-base font-medium text-gray-text">5h</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button>
                <BsFillPlayFill className="text-white font-medium" size={26} />
              </Button>
              <Button>
                <MdVolumeUp className="text-white font-medium" size={26} />
              </Button>
              <Button>
                <HiDotsHorizontal className="text-white font-medium" size={26} />
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-5 flex items-center">
          <div className="w-full bg-transparent border border-white/80 rounded-full">
            <input
              type="text"
              placeholder={`Reply to ${username}...`}
              className="w-full bg-transparent placeholder-white/80 text-white/80 px-[16px] py-[12px] text-base outline-none"
            />
          </div>
          <Button className="ml-2">
            <HiOutlinePaperAirplane className="text-white/80 font-medium" size={26} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoriesItem;
