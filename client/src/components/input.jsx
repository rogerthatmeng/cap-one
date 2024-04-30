import React from "react";

const Input = ({ title, children, ...rest }) => {
  return (
    <div className="w-full relative cursor-pointer">
      <label className="mb-[2px] block text-sm">{title}</label>
      <input
        type="text"
        className={`p-3 text-sm bg-[#ffffff] w-full border rounded border-[#687680] mb-4`}
        required
        {...rest}
      />
      {children ? children : null}
    </div>
  );
};

export default Input;
