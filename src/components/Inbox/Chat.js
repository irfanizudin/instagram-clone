import React, { useState } from "react";
import { HiOutlinePaperAirplane } from "react-icons/hi";
import Button from "../Common/Button";
import NewMessage from "./NewMessage";

const Chat = () => {
  const [newMessage, setNewMessage] = useState(false);
  const showNewMessage = () => setNewMessage(true);
  const hideNewMessage = () => setNewMessage(false);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-white border border-l-0 rounded-r">
      <div className="w-[96px] aspect-square rounded-full border-2 border-black flex items-center justify-center">
        <HiOutlinePaperAirplane size={50} className="" />
      </div>
      <h5 className="mt-3 text-xl font-light">Your Messages</h5>
      <p className="text-center text-gray-text">
        Send private photos and messages to a friend or group.
      </p>
      <Button
        onClick={showNewMessage}
        className="px-3 py-2 mt-5 font-medium text-white rounded bg-link"
      >
        Send Message
      </Button>
      {newMessage && <NewMessage hideNewMessage={hideNewMessage} />}
    </div>
  );
};

export default Chat;
