import React from "react";
import Modal from "./../Common/Modal";

const ChangeProfilePhoto = ({ hideChangeProfilePhoto }) => {
  return (
    <Modal onClick={hideChangeProfilePhoto} className="overflow-hidden">
      <div className="w-full py-[25px] border-b border-gray-text/30 flex items-center justify-center ">
        <h5 className="text-[18px] font-medium">Change Profile Photo</h5>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base font-semibold text-link">Upload Photo</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base font-semibold text-liked">Remove Current Photo</p>
      </div>
      <div
        onClick={hideChangeProfilePhoto}
        className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-base ">Cancel</p>
      </div>
    </Modal>
  );
};

export default ChangeProfilePhoto;
