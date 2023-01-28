import React from "react";
import Button from "../button";

const Company = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 xl:py-36 bg-ashLite">
      <div className="font-pop text-white max-w-container mx-auto lg:flex px-3 md:px-5 lg:px-8 xl:px-0">
        <div className="bg-primary lg:w-2/5 p-11 lg:p-24">
          <h1 className="text-3xl xl:text-4xl text-center lg:text-left lg:leading-normal xl:leading-normal font-bold">
            Learn more about our company
          </h1>
        </div>
        <div
          className="bg-no-repeat bg-cover lg:w-3/5 py-20 md:py-24 xl:py-36 flex justify-center items-center"
          style={{ backgroundImage: "url(images/company.png)" }}
        >
          <Button
            customClass="bg-white text-primary py-2 px-4 md:px-6 lg:py-3 lg:px-7 hover:border-primary hover:text-white hover:bg-primary text-sm md:text-base lg:text-lg"
            text="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Company;
