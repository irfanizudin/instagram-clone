import React from "react";
import { MdOutlineExplore, MdExplore } from "react-icons/md";
import {
  HiSearch,
  HiOutlineHome,
  HiHome,
  HiOutlineChat,
  HiChat,
  HiOutlinePlusCircle,
  HiPlusCircle,
  HiOutlineHeart,
  HiHeart,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[60px] bg-white px-pageX flex items-center justify-between fixed border-b border-gray-text/30">
      <Link to="/">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram-logo"
        />
      </Link>

      <div className="flex justify-between gap-x-20">
        <div className="w-[268px] h-[36px] flex items-center bg-gray-bg px-2 rounded border-gray-text/30 border">
          <HiSearch size={14} fill="#8F8F8F" />
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-bg outline-none text-base ml-2"
          />
        </div>
        <div className="flex items-center space-x-5">
          <Link to="/">
            <HiOutlineHome size={28} stroke="#262626" />
          </Link>
          <Link to="/direct/inbox">
            <HiOutlineChat size={28} stroke="#262626" />
          </Link>
          <Link to="/create/select">
            <HiOutlinePlusCircle size={28} stroke="#262626" />
          </Link>
          <Link to="/explore">
            <MdOutlineExplore size={28} stroke="#262626" />
          </Link>
          <HiOutlineHeart size={28} stroke="#262626" className="cursor-pointer" />
          <div className="rounded-full w-[28px] overflow-hidden cursor-pointer">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="photo-profile"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
