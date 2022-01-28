import React, { useState } from "react";
import Button from "../Common/Button";
import { NextArrow, PrevArrow } from "../Home";
import { BsFillPlayFill } from "react-icons/bs";
import { MdVolumeUp } from "react-icons/md";
import { HiDotsHorizontal } from "react-icons/hi";
import HighlightMore from "./HighlightMore";

const HighlightStories = () => {
  const [storiesMore, setStoriesMore] = useState(false);
  const hideStoriesMore = () => setStoriesMore(false);

  return (
    <div className="md:px-10 bg-transparent mx-auto my-auto relative">
      <PrevArrow />
      <NextArrow />
      <div className="w-[360px] h-[640px] bg-white mx-auto rounded-lg overflow-hidden relative">
        <img
          src="https://source.unsplash.com/collection/1103088/one-color"
          alt="stories"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-4 left-4 right-4">
          <div className="h-[3px] rounded-lg bg-white "></div>
          <div className="w-full mt-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="profile"
                className="w-[30px] aspect-square rounded-full"
              />
              <p className="text-base font-medium text-white">One Color</p>
              <p className="text-base font-medium text-white/50">5w</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button>
                <BsFillPlayFill className="text-white font-medium" size={26} />
              </Button>
              <Button>
                <MdVolumeUp className="text-white font-medium" size={26} />
              </Button>
              <Button onClick={() => setStoriesMore(true)}>
                <HiDotsHorizontal className="text-white font-medium" size={26} />
              </Button>
            </div>
          </div>
        </div>
        {storiesMore && <HighlightMore hideStoriesMore={hideStoriesMore} />}
      </div>
    </div>
  );
};

export default HighlightStories;
