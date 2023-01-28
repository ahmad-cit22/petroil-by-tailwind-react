import React from "react";
import Button from "../button";

const BlogItem = ({ bgImgName, title, btnText }) => {
  return (
    <div
      style={{ backgroundImage: `url(images/${bgImgName})` }}
      className="group bg-no-repeat bg-cover lg:w-1/3 py-10 px-12 smL:px-20 md:py-16 xl:smL:pt-[75px] xl:smL:pb-14 lg:smL:px-12"
    >
      <h1 className="linear duration-300 text-xl smL:text-2xl md:leading-normal font-semibold xl:font-bold mb-6 lg:mb-12 group-hover:text-primary">
        {title}
      </h1>
      <Button
        customClass={
          "bg-white/40 text-xs py-2 px-4 md:py-2.5 md:px-6 hover:bg-white/20"
        }
        text={btnText}
      />
    </div>
  );
};

export default BlogItem;
