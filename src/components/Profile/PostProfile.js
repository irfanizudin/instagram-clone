import React from "react";
import { BsGrid3X3 } from "react-icons/bs";
import {
  MdOndemandVideo,
  MdSlowMotionVideo,
  MdOutlineBookmarkBorder,
  MdOutlineAccountBox,
} from "react-icons/md";
import { Link, Outlet, useLocation } from "react-router-dom";

const PostProfile = () => {
  const { pathname } = useLocation();

  return (
    <div className="w-full mt-10">
      <div className="w-full h-[50px] border-t border-gray-text/30 flex items-center justify-center space-x-14">
        <Link
          to=""
          className={`${
            pathname === "/johnDoe" ? "font-medium border-t border-black" : "text-gray-text"
          } flex items-center h-full`}
        >
          <BsGrid3X3 size={12} />
          <p className="uppercase text-sm ml-2 tracking-widest">posts</p>
        </Link>
        <Link
          to="reels"
          className={`${
            pathname === "/johnDoe/reels" ? "font-medium border-t border-black" : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOndemandVideo size={12} />
          <p className="uppercase text-sm ml-2 tracking-widest">reels</p>
        </Link>
        <Link
          to="channel"
          className={`${
            pathname === "/johnDoe/channel" ? "font-medium border-t border-black" : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdSlowMotionVideo size={12} />
          <p className="uppercase text-sm ml-2 tracking-widest">videos</p>
        </Link>
        <Link
          to="saved"
          className={`${
            pathname === "/johnDoe/saved" ? "font-medium border-t border-black" : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOutlineBookmarkBorder size={12} />
          <p className="uppercase text-sm ml-2 tracking-widest">saved</p>
        </Link>
        <Link
          to="tagged"
          className={`${
            pathname === "/johnDoe/tagged" ? "font-medium border-t border-black" : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOutlineAccountBox size={12} />
          <p className="uppercase text-sm ml-2 tracking-widest">tagged</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PostProfile;
