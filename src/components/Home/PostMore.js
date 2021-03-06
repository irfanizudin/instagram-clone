import React from "react";
import Modal from "./../Common/Modal";
import { useNavigate } from "react-router-dom";

const PostMore = ({ hidePostMore }) => {
  const navigate = useNavigate();
  return (
    <Modal onClick={hidePostMore} className="overflow-hidden">
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base font-semibold text-liked">Report</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base font-semibold text-liked">Unfollow</p>
      </div>
      <div
        onClick={() => navigate("/p/1")}
        className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-base ">Go to Post</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Tagged accounts</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Share to...</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Copy Link</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Embed</p>
      </div>
      <div
        onClick={hidePostMore}
        className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-base ">Cancel</p>
      </div>
    </Modal>
  );
};

export default PostMore;
