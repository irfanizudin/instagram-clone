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
      <div className="w-full h-[50px] border-b border-t sm:border-b-0 border-gray-text/30 flex items-center justify-center space-x-14">
        <Link
          to=""
          className={`${
            pathname === "/johnDoe"
              ? "text-link sm:text-black font-medium sm:border-t sm:border-black"
              : "text-gray-text"
          } flex items-center h-full`}
        >
          <BsGrid3X3 className="text-lg sm:text-base" />
          <p className="hidden sm:block uppercase text-sm ml-2 tracking-widest">posts</p>
        </Link>
        <Link
          to="reels"
          className={`${
            pathname === "/johnDoe/reels"
              ? "text-link sm:text-black font-medium sm:border-t sm:border-black"
              : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOndemandVideo className="text-lg sm:text-base" />
          <p className="hidden sm:block uppercase text-sm ml-2 tracking-widest">reels</p>
        </Link>
        <Link
          to="channel"
          className={`${
            pathname === "/johnDoe/channel"
              ? "text-link sm:text-black font-medium sm:border-t sm:border-black"
              : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdSlowMotionVideo className="text-lg sm:text-base" />
          <p className="hidden sm:block uppercase text-sm ml-2 tracking-widest">videos</p>
        </Link>
        <Link
          to="saved"
          className={`${
            pathname === "/johnDoe/saved"
              ? "text-link sm:text-black font-medium sm:border-t sm:border-black"
              : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOutlineBookmarkBorder className="text-lg sm:text-base" />
          <p className="hidden sm:block uppercase text-sm ml-2 tracking-widest">saved</p>
        </Link>
        <Link
          to="tagged"
          className={`${
            pathname === "/johnDoe/tagged"
              ? "text-link sm:text-black font-medium sm:border-t sm:border-black"
              : "text-gray-text"
          } flex items-center h-full`}
        >
          <MdOutlineAccountBox className="text-lg sm:text-base" />
          <p className="hidden sm:block uppercase text-sm ml-2 tracking-widest">tagged</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default PostProfile;
