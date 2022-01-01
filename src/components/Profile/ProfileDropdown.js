import React, { useState } from "react";
import {
  HiOutlineUserCircle,
  HiOutlineBookmark,
  HiOutlineCog,
  HiOutlineSwitchHorizontal,
} from "react-icons/hi";
import SwitchAccount from "../Inbox/SwitchAccount";

const ProfileDropdown = ({ hideProfileDropdown }) => {
  const [switchAccount, setSwitchAccount] = useState(false);
  const showSwitch = () => setSwitchAccount(true);
  const hideSwitch = () => setSwitchAccount(false);

  return (
    <>
      <div
        onClick={hideProfileDropdown}
        className="w-full h-full bg-transparent fixed top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center"
      ></div>
      <div className="w-[230px] h-auto bg-white rounded shadow absolute right-[4%] sm:right-[2%] md:right-[10%] lg:right-[7%] xl:right-[11%] top-[55px] overflow-auto z-30">
        <div className="w-full flex items-center py-[10px] px-[16px] cursor-pointer hover:bg-gray-100">
          <HiOutlineUserCircle size={18} />
          <p className="text-base ml-3">Profile</p>
        </div>
        <div className="w-full flex items-center py-[10px] px-[16px] cursor-pointer hover:bg-gray-100">
          <HiOutlineBookmark size={18} />
          <p className="text-base ml-3">Saved</p>
        </div>
        <div className="w-full flex items-center py-[10px] px-[16px] cursor-pointer hover:bg-gray-100">
          <HiOutlineCog size={18} />
          <p className="text-base ml-3">Settings</p>
        </div>
        <div
          onClick={showSwitch}
          className="w-full flex items-center py-[10px] px-[16px] cursor-pointer hover:bg-gray-100"
        >
          <HiOutlineSwitchHorizontal size={18} />
          <p className="text-base ml-3">Switch Accounts</p>
        </div>
        {switchAccount && <SwitchAccount hideSwitch={hideSwitch} />}
        <div className="w-full flex items-center py-[10px] px-[16px] cursor-pointer hover:bg-gray-100 border border-t border-gray-text/30">
          <p className="text-base">Log Out</p>
        </div>
      </div>
    </>
  );
};

export default ProfileDropdown;
