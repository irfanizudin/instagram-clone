import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${className} bg-transparent border-none outline-none`}>
      {children}
    </button>
  );
};

export default Button;
