import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TbBrandInstagram } from "react-icons/tb";
import { HiOutlineLocationMarker } from "react-icons/hi";
import FooterIcon from "../footerIcon";

const Footer = () => {
  return (
    <footer>
      <div className="py-10 xl:pt-32 xl:pb-36 bg-ashLite bg-[#1F1F1F]">
        <div className="font-pop text-white max-w-container mx-auto flex flex-col lg:flex-row gap-y-12 lg:gap-x-[90px] xl:gap-x-36 items-center px-3 md:px-5 lg:px-8 xl:px-0">
          <div className="lg:w-[33%] text-white/70 text-center lg:text-left">
            <a href="#" className="smL:grid justify-center lg:justify-start">
              <picture className="inline-block mb-3 smL:mb-5 lg:smL:mb-8 w-[4/5] smL:w-full">
                <img src="images/logo2.png" loading="lazy" />
              </picture>
            </a>
            <p className="mb-2 smL:mb-3 lg:smL:mb-4 text-xs smL:text-sm linear duration-300 cursor-pointer hover:text-white">
              <MdOutlineMarkEmailRead className="text-xl lg:text-[22px] mr-[4px] lg:mr-[5px] mb-[2px] lg:mb-[0px] inline-block" />
              mail@yourcompany.com
            </p>
            <p className="mb-2 smL:mb-2 lg:smL:mb-3 text-xs smL:text-sm linear duration-300 cursor-pointer hover:text-white">
              <BiPhoneCall className="text-xl lg:text-[22px] mr-[4px] lg:mr-[5px] mb-[2px] lg:mb-[0px] inline-block" />
              +896 120 5889 (Toll free)
            </p>
            <p className="mb-2 smL:mb-3 lg:smL:mb-4 text-xs smL:text-sm linear duration-300 cursor-pointer hover:text-white">
              <HiOutlineLocationMarker className="text-xl lg:text-[22px] mr-[4px] lg:mr-[5px] mb-[3px] lg:mb-[3px] inline-block" />
              101 Baker Street, New York, USA, 12345
            </p>
            <div className="mt-5 md:mt-6 lg:mt-8 flex items-center justify-center lg:justify-start gap-3 lg:gap-4 text-xl lg:text-[26px]">
              <FooterIcon linking={"#"} iconName={<TiSocialFacebook />} />
              <FooterIcon linking={"#"} iconName={<TiSocialTwitter />} />
              <FooterIcon linking={"#"} iconName={<TiSocialLinkedin />} />
              <FooterIcon linking={"#"} iconName={<TbBrandInstagram />} />
            </div>
          </div>
          <div className="lg:w-[67%] flex smL:gap-12 items-start">
            <div className="w-1/3">
              <p className="font-semibold text-sm smL:text-base mb-4 smL:mb-6">Company</p>
              <ul className="text-[13px] smL:text-sm text-white/70 list-none linear duration-300">
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Home</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">About</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Services</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Gallery</a>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <p className="font-semibold text-sm smL:text-base mb-4 smL:mb-6">Others</p>
              <ul className="text-[13px] smL:text-sm text-white/70 list-none linear duration-300">
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Blog</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Contact</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Terms & Conditions</a>
                </li>
                <li className="linear duration-300 hover:text-white hover:text-white mb-3.5 smL:mb-4">
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <p className="font-semibold text-sm mb-4 smL:mb-6">Certificate</p>
              <div className="flex gap-1 smL:gap-[5px]">
                <a href="#">
                  <picture>
                    <img src="images/cert1.png" loading="lazy" />
                  </picture>
                </a>
                <a href="#">
                  <picture>
                    <img src="images/cert2.png" loading="lazy" />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-secondary py-6 md:py-8 lg:py-10">
        <div className="font-pop text-white max-w-container mx-auto px-3 md:px-5 lg:px-8 xl:px-0">
          <p className="text-para text-xs smL:text-sm font-medium text-center">
            © Copyright 2022 by AltDesign Studio – All right reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
