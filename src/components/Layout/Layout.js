import React from "react";
import Header from "./Header";

const Layout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div
        className={`${className} w-full min-h-screen sm:px-[50px] md:px-[80px] xl:px-[150px] bg-gray-bg pt-14 sm:pt-16 lg:pt-24 pb-10 text-base text-black`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
