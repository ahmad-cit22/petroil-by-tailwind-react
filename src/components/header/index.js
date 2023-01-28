import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";

const Header = () => {
  return (
    <header className="bg-secondary font-pop text-white border-b-[3px] border-solid border-yellowBorder">
      <div className="max-w-container mx-auto smL:flex px-3 md:px-5 lg:px-8 xl:px-0">
        <div className="smL:w-5/6 smL:flex gap-x-8 md:gap-14">
          <div className="text-xs relative after:absolute after:bg-[#5C6A92] after:h-4 after:w-0.5 after:top-4 after:right-[-18px] md:after:right-[-28px]">
            <MdOutlineMarkEmailRead className="absolute top-[13px] smL:top-[13px] text-xl" />
            <p className="ml-6 pt-4 smL:py-4">mail@yourcompany.com</p>
          </div>
          <div className="text-xs relative">
            <BiPhoneCall className="absolute top-[13px] smL:top-[13px] text-xl" />
            <p className="ml-6 pt-4 smL:py-4">+896 120 5889 (Toll free)</p>
          </div>
        </div>
        <div className="smL:w-1/6 py-3 smL:py-0 flex smL:justify-end items-center gap-2 md:gap-5 text-[20px] smL:text-[22px]">
          <a href="#">
            {" "}
            <TiSocialFacebook className="linear duration-300 hover:text-primary" />
          </a>
          <a href="#">
            {" "}
            <TiSocialTwitter className="linear duration-300 hover:text-primary" />
          </a>
          <a href="#">
            {" "}
            <TiSocialLinkedin className="linear duration-300 hover:text-primary" />
          </a>
          <a href="#">
            {" "}
            <TbBrandInstagram className="linear duration-300 hover:text-primary" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
