import React, { useState } from "react";
import Button from "../Common/Button";
import { HiOutlineInformationCircle, HiOutlineHeart } from "react-icons/hi";
import { FiSmile } from "react-icons/fi";
import { RiGalleryLine } from "react-icons/ri";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
  const [text, setText] = useState("");

  const { name } = useParams();
  return (
    <div className="relative flex flex-col w-full h-full bg-white border border-l-0 rounded-r">
      <div className="w-full h-[60px] py-[16px] px-[32px] flex items-center justify-between border-b border-gray-text/30">
        <div className="flex items-center">
          <img
            src="https://randomuser.me/api/portraits/men/10.jpg"
            alt="profile"
            className="w-[30px] aspect-square rounded-full"
          />
          <p className="ml-3 text-lg font-medium">{name}</p>
        </div>
        <Button>
          <HiOutlineInformationCircle size={26} />
        </Button>
      </div>
      <div className="w-full h-[390px] overflow-auto p-[25px]"></div>
      <div className="w-full h-[84px] flex items-center justify-center absolute bottom-0 right-0 px-[25px]">
        <div className="w-full rounded-full border border-gray-text/30 py-[10px] px-[16px] flex items-center justify-between ">
          <div className="flex items-center w-full">
            <Button>
              <FiSmile size={28} />
            </Button>
            <input
              type="text"
              placeholder="Message..."
              className="w-full h-full ml-4 outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {text === "" ? (
            <>
              <Button>
                <RiGalleryLine size={28} />
              </Button>
              <Button className="ml-3">
                <HiOutlineHeart size={28} />
              </Button>{" "}
            </>
          ) : (
            <Button className="font-medium text-link">Send</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
