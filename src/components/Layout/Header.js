import React, { useState } from "react";
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
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import Notification from "./../Notification/Notification";
import Button from "../Common/Button";
import { ProfileDropdown } from "./../Profile";

const Header = () => {
  const [notification, setNotification] = useState(false);
  const hideNotification = () => setNotification(false);

  const [profileDropdown, setProfileDropdown] = useState(false);
  const hideProfileDropdown = () => setProfileDropdown(false);

  const location = useLocation();
  const pathName = location.pathname;
  const direct = pathName.split("/").includes("direct");

  return (
    <div className="w-full h-[60px] bg-white px-[20px] md:px-[80px] xl:px-[150px] flex items-center justify-between fixed border-b border-gray-text/30 z-10">
      <Link to="/">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram-logo"
          className="object-cover w-full"
        />
      </Link>

      <div className="flex justify-between ml-4 sm:space-x-5 md:space-x-8 lg:space-x-10 xl:space-x-20">
        <div className="lg:w-[268px] h-[36px] sm:flex items-center bg-gray-bg px-2 rounded border-gray-text/30 border hidden">
          <HiSearch size={14} fill="#8F8F8F" />
          <input
            type="text"
            placeholder="Search"
            className="w-full ml-2 text-base outline-none bg-gray-bg"
          />
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link to="/">
            {pathName === "/" ? (
              <HiHome size={28} stroke="#262626" />
            ) : (
              <HiOutlineHome size={28} stroke="#262626" />
            )}
          </Link>
          <Link to="/direct/inbox">
            {direct ? (
              <HiChat size={28} stroke="#262626" />
            ) : (
              <HiOutlineChat size={28} stroke="#262626" />
            )}
          </Link>
          <Link to="/create/select">
            {pathName === "/create/select" ? (
              <HiPlusCircle size={28} stroke="#262626" />
            ) : (
              <HiOutlinePlusCircle size={28} stroke="#262626" />
            )}
          </Link>
          <Link to="/explore">
            {pathName === "/explore" ? (
              <MdExplore size={28} stroke="#262626" />
            ) : (
              <MdOutlineExplore size={28} stroke="#262626" />
            )}
          </Link>
          <Button onClick={() => setNotification(!notification)}>
            <HiOutlineHeart size={28} stroke="#262626" />
          </Button>
          <div
            onClick={() => setProfileDropdown(!profileDropdown)}
            className="rounded-full w-[28px] overflow-hidden cursor-pointer"
          >
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="profile"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {notification && <Notification hideNotification={hideNotification} />}
      {profileDropdown && <ProfileDropdown hideProfileDropdown={hideProfileDropdown} />}
    </div>
  );
};

export default Header;
