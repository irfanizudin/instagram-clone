import React from "react";
import Modal from "./../Common/Modal";

const HighlightMore = ({ hideStoriesMore }) => {
  return (
    <Modal onClick={hideStoriesMore} className="overflow-hidden">
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base text-story font-medium">Delete</p>
      </div>
      <div className="w-full py-[14px] border-b border-gray-text/30 flex items-center justify-center cursor-pointer hover:bg-gray-100">
        <p className="text-base ">View Insights</p>
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

export default HighlightMore;
