import React from "react";
import FollowNotification from "./FollowNotification";
import PostNotification from "./PostNotification";

const Notification = ({ hideNotification }) => {
  return (
    <>
      <div
        onClick={hideNotification}
        className="w-full h-full bg-transparent fixed top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center"
      ></div>
      <div className="w-full sm:w-[483px] h-[400px] bg-white rounded shadow absolute right-0 sm:right-[9%] md:right-[15%] lg:right-[12%] xl:right-[15%] top-[55px] overflow-auto z-30">
        <h6 className="text-base font-medium my-[10px] mx-[16px]">This Month</h6>
        <FollowNotification type="following" />
        <FollowNotification type="following" />
        <FollowNotification type="follow" />
        <FollowNotification type="following" />
        <PostNotification type="liked" post="reel" />
        <FollowNotification type="following" />
        <PostNotification type="liked" post="video" />
        <PostNotification type="liked" post="post" />
        <PostNotification type="comment" post="post" />
        <PostNotification type="comment" post="video" />
        <PostNotification type="comment" post="reel" />
        <FollowNotification type="follow" />
        <FollowNotification type="following" />
      </div>
    </>
  );
};

export default Notification;
