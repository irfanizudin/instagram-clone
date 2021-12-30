import React from "react";
import FollowNotification from "./FollowNotification";
import PostNotification from "./PostNotification";

const Notification = () => {
  return (
    <div className="w-[483px] h-[400px] bg-white rounded shadow absolute right-[200px] top-[55px] overflow-auto">
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
  );
};

export default Notification;
