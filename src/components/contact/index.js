import React from 'react'
import Button from '../button'

const Contact = () => {
  return (
    <section className="bg-primary font-pop text-base text-white border-b-4 border-solid border-yellowBorder">
      <div className="max-w-container mx-auto flex flex-col smL:flex-row gap-y-5 xl:gap-24 py-6 smL:py-8 lg:smL:py-12 px-3 smL:px-8 xl:smL:px-0 justify-center items-center">
        <div className="smL:w-4/5">
          <h1 className="text-xl text-center smL:text-left w-5/6 smL:w-full m-auto md:text-[22px] lg:text-3xl xl:text-4xl font-semibold xl:font-bold">
            Want to join as member branch in your area?
          </h1>
        </div>
        <div className="smL:w-1/5 flex justify-end items-center font-semibold">
          <Button
            customClass={
              "border-white text-xs lg:text-sm xl:text-base py-2 px-5 smL:py-2.5 smL:px-6 lg:smL:py-3 lg:smL:px-8 hover:bg-white hover:text-primary"
            }
            text={"CONTACT"}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact