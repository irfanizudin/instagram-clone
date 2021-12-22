import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="w-full min-h-screen px-pageX bg-gray-bg">{children}</div>
    </div>
  );
};

export default Layout;
