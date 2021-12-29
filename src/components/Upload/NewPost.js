import React from "react";
import Button from "../Common/Button";
import { FaPhotoVideo } from "react-icons/fa";

const NewPost = () => {
  return (
    <div className="min-w-[448px] h-full bg-white border rounded-lg border-gray-text/30">
      <div className="w-full py-[10px] relative border-b border-gray-text/30 flex items-center justify-center">
        <h6 className="text-lg font-medium">Create New Post</h6>
      </div>

      <div className="w-full h-[448px] flex flex-col justify-center items-center">
        <FaPhotoVideo className="text-2xl" size={70} />
        <p className="mt-3 text-xl font-light">Drag photos and videos here</p>
        <Button className="bg-link text-white font-medium px-[10px] py-[8px] mt-5 rounded">
          Select from computer
        </Button>
      </div>
    </div>
  );
};

export default NewPost;
