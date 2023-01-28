import React from "react";
import Button from "../button";

const ServiceItem = ({ bgImgName, title, btnText }) => {
  return (
    <div
      style={{ backgroundImage: `url(images/${bgImgName})` }}
      className="text-center lg:text-left bg-no-repeat bg-cover w-full lg:w-2/4 p-3 md:p-5 py-14 md:py-20 lg:px-12 xl:py-36 xl:px-24 text-white flex flex-col justify-center items-center lg:items-start"
    >
      <h1 className="mb-5 text-2xl md:text-3xl xl:text-4xl lg:leading-normal xl:leading-normal font-bold">
        {title}
      </h1>
      <Button
        customClass="md:mt-2 lg:mt-0 bg-primary border-primary py-2
px-4 md:px-6 lg:py-3 lg:px-7 hover:border-white hover:bg-transparent text-sm md:text-base lg:text-lg"
        text={btnText}
      />
    </div>
  );
};

export default ServiceItem;
