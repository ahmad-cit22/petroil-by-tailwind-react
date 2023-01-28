import React from "react";
import ServiceItem from "../serviceItem";

const Services = () => {
  return (
    <section className="font-pop flex flex-col lg:flex-row flex-wrap">
      <div className="w-full lg:w-2/4 p-3 md:p-5 pt-8 md:pt-10 pb-10 md:pb-12 xl:p-28 flex flex-col justify-center lg:items-center text-center xl:items-end text-black">
        <div className="w-full block lg:w-[74%] xl:w-[80%] text-center lg:text-left lg:ml-9 xl:ml-0">
          <h1 className="text-4xl md:text-5xl lg:text-[50px] xl:text-large lg:leading-normal font-bold mb-3 md:mb-4 lg:smL:mb-0">
            Our Services
          </h1>
          <p className="w-full smL:w-[85%] m-auto lg:m-0 text-para font-medium lg:text-base">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>

      <ServiceItem
        bgImgName="services1.png"
        title="Modern natural oil and gas refineries"
        btnText="Learn More"
      />
      <ServiceItem
        bgImgName="services3.png"
        title="Supply of national industries."
        btnText="Learn More"
      />
      <ServiceItem
        bgImgName="services2.png"
        title="National fuel distribution and supply."
        btnText="Learn More"
      />
    </section>
  );
};

export default Services;
