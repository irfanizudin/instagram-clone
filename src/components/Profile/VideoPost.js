import React, { useState } from "react";
import { HiHeart } from "react-icons/hi";
import { BsFillChatFill, BsFillPlayFill } from "react-icons/bs";

const VideoPost = ({ image, liked, comment, play }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-[212px] h-[330px] aspect-square overflow-hidden cursor-pointer relative mx-auto"
    >
      <img src={image} alt="video-post" className="object-cover w-full h-full" />
      <div className={`${hover ? "hidden" : "flex"} absolute bottom-3 left-3 items-center`}>
        <BsFillPlayFill className="text-white font-medium" size={28} />
        <p className="text-white ml-1 text-lg font-medium">{play}</p>
      </div>

      {hover && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full space-x-7 bg-black/50">
          <div className="flex items-center">
            <HiHeart className="text-white" size={26} />
            <p className="ml-1 text-lg font-medium text-white">{liked}</p>
          </div>
          <div className="flex items-center">
            <BsFillChatFill className="text-white" size={26} />
            <p className="ml-1 text-lg font-medium text-white">{comment}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPost;
