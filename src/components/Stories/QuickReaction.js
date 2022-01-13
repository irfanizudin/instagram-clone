import React from "react";
import {
  FaRegGrinSquintTears,
  FaRegSurprise,
  FaRegGrinHearts,
  FaRegSadTear,
  FaRegHandPointRight,
  FaRegGrinTongueSquint,
  FaRegKissWinkHeart,
  FaRegSadCry,
} from "react-icons/fa";
import Button from "../Common/Button";

const QuickReaction = ({ hideQuickReaction }) => {
  return (
    <>
      <div
        onClick={hideQuickReaction}
        className="w-full h-full bg-black/50 absolute top-0 left-0 right-0 bottom-0 z-10"
      />
      <div className="absolute bg-transparent bottom-[100px] flex flex-col items-center justify-end z-20 left-1/2 -translate-x-1/2">
        <h5 className="text-lg font-medium text-white mb-5">Quick Reactions</h5>
        <div className="grid grid-cols-4 gap-5 text-2xl text-white">
          <Button>
            <FaRegGrinSquintTears />
          </Button>
          <Button>
            <FaRegSurprise />
          </Button>
          <Button>
            <FaRegGrinHearts />
          </Button>
          <Button>
            <FaRegSadTear />
          </Button>
          <Button>
            <FaRegHandPointRight />
          </Button>
          <Button>
            <FaRegGrinTongueSquint />
          </Button>
          <Button>
            <FaRegKissWinkHeart />
          </Button>
          <Button>
            <FaRegSadCry />
          </Button>
        </div>
      </div>
    </>
  );
};

export default QuickReaction;
