import React from "react";
import Header from "./Header";

const Layout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div
        className={`${className} w-full min-h-screen sm:px-[50px] md:px-[80px] xl:px-[150px] bg-gray-bg `}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
