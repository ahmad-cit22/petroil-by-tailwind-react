import React, { useState, useEffect } from "react";
import Button from "../button";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  let [open, setOpen] = useState(false);
  let [hamOpen, setHamOpen] = useState(true);
  const handleNavItems = () => {
    setOpen(!open);
    setHamOpen(!hamOpen);
  };

  useEffect(() => {
    window.innerWidth >= 1024 && setOpen(true);
    const screenResize = () => {
      window.innerWidth >= 1024 ? setOpen(true) : setOpen(false);
    };
    window.addEventListener("resize", screenResize);
  }, []);

  return (
    <nav className="bg-primary font-pop text-base text-white border-t-[.7px] border-solid border-black">
      <div className="max-w-container mx-auto flex flex-col lg:flex-row py-3 md:py-5 lg:py-5 xl:py-7 px-3 md:px-5 lg:px-8 xl:px-0 relative">
        <div className="w-auto lg:w-1/5 flex items-center">
          <a href="#">
            <picture>
              <img
                src="images/logo.png"
                className="w-3/4 md:w-full"
                loading="lazy"
              />
            </picture>
          </a>
        </div>
        {hamOpen ? (
          <RiBarChartHorizontalFill
            className="lg:hidden absolute top-[17px] md:top-[25px] right-[18px] md:right-[22px] text-2xl md:text-3xl cursor-pointer"
            onClick={handleNavItems}
          />
        ) : (
          <CgClose
            className="text-white lg:hidden absolute top-[17px] md:top-[25px] right-[18px] md:right-[22px] text-3xl md:text-4xl font-bold cursor-pointer"
            onClick={handleNavItems}
          />
        )}
        {open && (
          <div className="linear duration-300 w-4/5 lg:flex justify-start lg:justify-end items-center font-semibold pl-2 lg:pl-0 ">
            <ul className="cursor-pointer text-red-200 list-none flex flex-col lg:flex-row gap-4 md:gap-7 lg:gap-10 xl:gap-12 linear duration-300 my-6 md:my-9 lg:my-0">
              <li className="linear duration-300 hover:text-white">
                <a href="#">Home</a>
              </li>
              <li className="linear duration-300 hover:text-white">
                <a href="#">About</a>
              </li>
              <li className="linear duration-300 hover:text-white">
                <a href="#">Services</a>
              </li>
              <li className="linear duration-300 hover:text-white">
                <a href="#">Gallery</a>
              </li>
              <li className="linear duration-300 hover:text-white">
                <a href="#">Blog</a>
              </li>
            </ul>
            <Button
              customClass="lg:ml-12 xl:ml-16 mb-3 lg:mb-0 py-2 lg:py-2.5 xl:py-3 px-5 lg:px-6 xl:px-8 border-white hover:bg-white hover:text-primary"
              text="CONTACT"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
