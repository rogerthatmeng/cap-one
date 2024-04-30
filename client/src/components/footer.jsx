import React from "react";

const Footer = () => {
  return (
    <div className="bg-white p-4">
      <div className="text-xs flex w-full md:items-center md:justify-center gap-2 max-md:[&>p]:hidden max-md:flex-col">
        <a href="#">Contact us</a>
        <p className="h-5 w-[1px] bg-[#bebebe]"></p>
        <a href="#">Legal</a>
        <p className="h-5 w-[1px] bg-[#bebebe]"></p>
        <a href="#">Privacy</a>
        <p className="h-5 w-[1px] bg-[#bebebe]"></p>
        <a href="#">Security</a>
        <p className="h-5 w-[1px] bg-[#bebebe]"></p>
        <a href="#">Terms & Conditions</a>
        <p className="h-5 w-[1px] bg-[#bebebe]"></p>
        <a href="#">Accessibility</a>
      </div>
    </div>
  );
};

export default Footer;
