import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const HeaderStories = () => {
  const { pathname } = useLocation();
  const highlights = pathname.split("/").includes("highlights");
  return (
    <>
      <Link to="/" className="absolute top-4 left-4">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-dark.png/ff9b85f2b7ca.png"
          alt="instagram"
          className="object-contain w-[103px]"
        />
      </Link>
      <Link to={`${highlights ? "/johnDoe" : "/"} `} className="absolute top-4 right-4">
        <IoClose className="text-[30px] font-medium text-white" />
      </Link>
    </>
  );
};

export default HeaderStories;
