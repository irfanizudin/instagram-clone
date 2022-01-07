import React from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Button from "../Common/Button";

const ChatGeneral = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white border border-l-0 rounded-r">
      <div className="w-[96px] aspect-square rounded-full border-2 border-black flex items-center justify-center">
        <HiOutlinePaperAirplane size={50} className="" />
      </div>
      <h5 className="mt-3 text-xl font-light">Your General Messages</h5>
      <p className="text-center text-gray-text">
        Notifications are off for messages you move here, but you can turn them on anytime.
      </p>
      <Button className="px-3 py-2 mt-5 font-medium text-white rounded bg-link">
        Go to Notification Settings
      </Button>
    </div>
  );
};

export default ChatGeneral;
