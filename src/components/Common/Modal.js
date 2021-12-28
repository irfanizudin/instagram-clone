import React from "react";

const Modal = ({ onClick, className, children }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-full h-full bg-black/50 fixed top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center"
      ></div>
      <div
        className={`${className} w-[400px] h-auto bg-white rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30`}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;
