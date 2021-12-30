import React from "react";

const PostNotification = ({ type, post }) => {
  return (
    <div className="w-full flex items-center justify-between py-[10px] px-[16px] cursor-pointer hover:bg-gray-100">
      <div className="flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt="profile"
          className="w-[45px] aspect-square rounded-full"
        />
        <p className="ml-3 text-base">
          <span className="font-medium">cris.evans99 </span>
          {type === "liked" && "liked"}
          {type === "comment" && "commented"} your {post === "reel" && "reel"}
          {post === "post" && "post"}
          {post === "video" && "video"}.<span className="text-gray-text"> 2h</span>
        </p>
      </div>
      <img
        src="https://source.unsplash.com/collection/1103088/one-color"
        alt="photo"
        className="w-[45px] aspect-square"
      />
    </div>
  );
};

export default PostNotification;
