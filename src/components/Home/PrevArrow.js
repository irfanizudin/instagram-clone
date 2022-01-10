import React from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Button from "../Common/Button";

const PrevArrow = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      className={`${
        onClick === null ? "hidden" : "block"
      } text-gray-text text-xl absolute top-1/2 left-2 -translate-y-1/2 z-[2] rounded-full`}
    >
      <IoIosArrowDropleftCircle />
    </Button>
  );
};

export default PrevArrow;
