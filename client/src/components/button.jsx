import React from "react";

const Button = ({ title, className, ...rest }) => {
  return (
    <button
      className={`${className} w-full rounded my-5 px-6 py-[10px] bg-[#128020] font-[500] text-lg text-center text-[#ffffff]`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
