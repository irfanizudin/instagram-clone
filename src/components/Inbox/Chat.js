import React from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Button from "../Common/Button";

const Chat = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col items-center justify-center border border-l-0 rounded-r">
      <div className="w-[96px] aspect-square rounded-full border-2 border-black flex items-center justify-center">
        <HiOutlinePaperAirplane size={50} className="" />
      </div>
      <h5 className="text-xl font-light mt-3">Your Messages</h5>
      <p className="text-gray-text">Send private photos and messages to a friend or group.</p>
      <Button className="bg-link text-white font-medium mt-5 px-3 py-2 rounded">
        Send Message
      </Button>
    </div>
  );
};

export default Chat;
