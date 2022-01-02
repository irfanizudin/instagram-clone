import React from "react";
import Modal from "./../Common/Modal";

const SettingProfile = ({ hideSettingProfile }) => {
  return (
    <Modal onClick={hideSettingProfile} className="overflow-hidden">
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Change Password</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Professional Account</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Nametag</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Apps and Websites</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Notifications</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Privacy and Security</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Login Activity</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Emails from Instagram</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Report a Problem</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Log Out</p>
      </div>
      <div
        onClick={hideSettingProfile}
        className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-base ">Cancel</p>
      </div>
    </Modal>
  );
};

export default SettingProfile;
