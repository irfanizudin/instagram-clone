import React, { useState } from "react";
import { HiHeart } from "react-icons/hi";
import { BsFillChatFill } from "react-icons/bs";

const ExplorePost = ({ image, liked, comment, onClick }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="max-w-[300px] mx-auto sm:max-w-[292px] aspect-square overflow-hidden cursor-pointer relative"
    >
      <img src={image} alt="post" className="object-cover w-full h-full" />
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

export default ExplorePost;
