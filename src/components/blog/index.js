import React from "react";
import { FaAngleRight } from "react-icons/fa";
import BlogItem from "../blogItem";

const Blog = () => {
  return (
    <section className="py-10 md:py-20 lg:py-28 bg-ashLite">
      <div className="font-pop text-white max-w-container mx-auto px-3 md:px-5 lg:px-8 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-y-6 md:gap-y-10 lg:gap-x-5 xl:gap-16 mb-3 smL:mb-5 lg:smL:mb-7">
          <BlogItem
            bgImgName={"blog1.png"}
            title={
              "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
            }
            btnText="Read More"
          />
          <BlogItem
            bgImgName={"blog2.png"}
            title={
              "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
            }
            btnText="Read More"
          />
          <BlogItem
            bgImgName={"blog3.png"}
            title={
              "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod."
            }
            btnText="Read More"
          />
        </div>
        <div className="flex justify-center md:justify-end items-center">
          <a
            href="#"
            className="text-black text-sm md:text-base font-bold py-px hover:text-primary linear duration-300"
          >
            SEE MORE FROM THE BLOG{" "}
            <FaAngleRight className="inline-block mb-[2.1px]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
