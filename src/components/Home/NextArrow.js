import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Button from "./../Common/Button";

const NextArrow = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`${
        onClick === null ? "hidden" : "block"
      } shadow-md text-gray-text text-xl absolute top-1/2 right-2 -translate-y-1/2 z-[2] rounded-full`}
    >
      <IoIosArrowDroprightCircle />
    </Button>
  );
};

export default NextArrow;
