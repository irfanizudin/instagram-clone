import React from "react";
import Button from "./../Common/Button";

const FooterProfile = () => {
  const links = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Hashtags",
    "Locations",
    "Instagram Lite",
  ];

  return (
    <div className="w-full text-sm text-gray-text mt-5">
      <div className="flex items-center justify-center space-x-4">
        {links &&
          links.map((link, index) => {
            return <Button key={index}>{link}</Button>;
          })}
      </div>
      <div className="flex items-center justify-center mt-3 space-x-4">
        <select name="language" className="bg-transparent outline-none cursor-pointer">
          <option value="english">English</option>
          <option value="indonesia">Indonesia</option>
        </select>
        <p>&copy; 2022 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default FooterProfile;
