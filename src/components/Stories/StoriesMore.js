import React from "react";
import Modal from "./../Common/Modal";

const StoriesMore = ({ hideStoriesMore }) => {
  return (
    <Modal onClick={hideStoriesMore} className="overflow-hidden">
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">Report Inappropriate</p>
      </div>
      <div
        onClick={hideStoriesMore}
        className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100"
      >
        <p className="text-base ">Cancel</p>
      </div>
    </Modal>
  );
};

export default StoriesMore;
