import React from "react";
import Header from "./Header";

const Layout = ({ children, className }) => {
  return (
    <div>
      <Header />
      <div className={`${className} w-full min-h-screen px-pageX bg-gray-bg `}>{children}</div>
    </div>
  );
};

export default Layout;
