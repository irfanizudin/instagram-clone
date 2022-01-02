import React, { useState } from "react";
import {
  HiDotsHorizontal,
  HiOutlineHeart,
  HiHeart,
  HiOutlineChat,
  HiOutlinePaperAirplane,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import Button from "./../Common/Button";
import PostMore from "./PostMore";

const Post = ({ data }) => {
  const { username, photoProfile, imagePost, captionPost, likeCount, commentCount, datePost } =
    data;

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [postMore, setPostMore] = useState(false);
  const hidePostMore = () => setPostMore(false);

  return (
    <div className="w-full bg-white border rounded border-gray-text/30 ">
      <div className="w-full h-[60px] flex items-center justify-between p-[16px]">
        <div className="flex items-center justify-center space-x-3 ">
          <img src={photoProfile} alt="profile" className="w-[40px] aspect-square rounded-full" />
          <p className="text-base font-medium text-black">{username}</p>
        </div>
        <Button onClick={() => setPostMore(true)}>
          <HiDotsHorizontal className="text-black" size={20} />
        </Button>
        {postMore && <PostMore hidePostMore={hidePostMore} />}
      </div>

      <div className="w-full h-auto overflow-hidden">
        <img src={imagePost} alt="post" className="w-full" />
      </div>

      <div className="w-full p-[16px] space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between space-x-4">
            <Button onClick={() => setLiked(!liked)}>
              {liked ? <HiHeart size={28} className="text-liked" /> : <HiOutlineHeart size={28} />}
            </Button>
            <Button>
              <HiOutlineChat size={28} />
            </Button>
            <Button>
              <HiOutlinePaperAirplane size={28} />
            </Button>
          </div>
          <Button onClick={() => setSaved(!saved)}>
            {saved ? <HiBookmark size={28} /> : <HiOutlineBookmark size={28} />}
          </Button>
        </div>
        <div className="flex items-center">
          <p className="text-base">
            Liked by <span className="font-medium">{likeCount} people</span>
          </p>
        </div>
        <div className="flex">
          <p className="text-base">
            <span className="font-medium">{username} </span>
            {captionPost}
          </p>
        </div>
        <p className="text-base text-gray-text">View all {commentCount} comments</p>
        <p className="text-[10px] text-gray-text uppercase">{datePost} minutes ago</p>
      </div>
      <div className="h-[53px] border-t border-gray-text/30 p-[16px] flex items-center justify-between">
        <div className="flex items-center w-full space-x-4">
          <FiSmile size={28} />
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full text-base outline-none"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <Button
          className={`${
            comment === "" ? "text-link/30 cursor-default" : "text-link"
          }  text-base font-medium`}
        >
          Post
        </Button>
      </div>
    </div>
  );
};

export default Post;
