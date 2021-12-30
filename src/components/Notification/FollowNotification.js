import React from "react";
import Button from "./../Common/Button";

const FollowNotification = ({ type }) => {
  return (
    <div className="w-full flex items-center justify-between py-[10px] px-[16px] cursor-pointer hover:bg-gray-100">
      <div className="flex items-center">
        <img
          src="https://randomuser.me/api/portraits/men/44.jpg"
          alt="profile"
          className="w-[45px] aspect-square rounded-full"
        />
        <p className="ml-3 text-base">
          <span className="font-medium">tomholland88</span> started following you.{" "}
          <span className="text-gray-text">1w</span>
        </p>
      </div>
      {type === "following" && (
        <Button className="border rounded border-gray-text/30 font-medium py-[6px] px-[10px] text-base">
          Following
        </Button>
      )}
      {type === "follow" && (
        <Button className="border rounded bg-link text-white font-medium py-[6px] px-[10px] text-base">
          Follow
        </Button>
      )}
    </div>
  );
};

export default FollowNotification;
