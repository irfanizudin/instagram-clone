import React from "react";
import Button from "../Common/Button";

const FooterHome = () => {
  const links = [
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Top Accounts",
    "Hashtags",
    "Language",
  ];

  return (
    <div className="mt-6 hidden lg:block">
      <div className="flex flex-wrap">
        {links &&
          links.map((link, index) => {
            return (
              <>
                <Button key={index} className="text-sm text-gray-text/50">
                  {link}
                </Button>
                <p className="text-gray-text/50 mx-1 text-xs"> . </p>
              </>
            );
          })}
      </div>
      <p className="text-gray-text/50 text-xs uppercase mt-4">&copy; 2021 instagram from meta</p>
    </div>
  );
};

export default FooterHome;
