import React from 'react'

const About = () => {
  return (
    <section>
      <div className="font-pop text-black max-w-container mx-auto flex flex-col lg:flex-row gap-6 md:gap-10 xl:gap-[176px] items-center py-10 md:py-16 xl:py-20 px-3 md:px-5 lg:px-8 xl:px-0">
        <h1 className="lg:w-1/3 text-3xl md:text-4xl xl:text-5xl lg:leading-[1.5] xl:leading-[1.5] font-bold ">
          The biggest supplier on the country
        </h1>
        <p className="lg:w-2/3 text-para font-medium">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution.
        </p>
      </div>
      <div className="flex flex-col smL:flex-row sm:flex-wrap xl:flex-nowrap gap-y-3 smL:gap-x-3 xl:gap-x-5 mb-6 lg:mb-8 xl:mb-9 md:justify-center md:items-center">
        <picture className="w-full smL:w-[49%]">
          <img className="w-full" src="images/about_img1.png"></img>
        </picture>
        <picture className="w-full smL:w-[49%]">
          <img className="w-full" src="images/about_img2.png"></img>
        </picture>
        <picture className="w-full smL:w-[49%]">
          <img className="w-full" src="images/about_img3.png"></img>
        </picture>
        <picture className="w-full smL:w-[49%]">
          <img className="w-full" src="images/about_img4.png"></img>
        </picture>
      </div>
    </section>
  );
}

export default About