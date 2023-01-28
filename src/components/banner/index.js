import React from 'react'
import Button from '../button'

const Banner = () => {
    return (
      <section
        style={{ backgroundImage: "url(images/banner_bg.png)" }}
        className="bg-no-repeat bg-cover"
      >
        <div className="h-full w-full bg-darkLight py-16 md:py-32 xl:py-64">
          <div className="font-pop text-white max-w-container px-3 md:px-5 lg:px-8 xl:px-0 mx-auto">
            <h1 className="mb-6 md:mb-8 text-3xl md:text-5xl xl:text-large leading-normal md:leading-[1.5] font-bold w-4/5 md:w-3/4 ">
              We exist since 1975 on the oil and gas industry.
            </h1>
            <Button
              customClass="border-primary bg-primary hover:bg-transparent hover:border-white py-2 lg:py-2.5 xl:py-3 px-4 lg:px-6 xl:px-8 text-sm md:text-base lg:text-lg"
              text="LEARN MORE"
            />
          </div>
        </div>
      </section>
    );
}

export default Banner