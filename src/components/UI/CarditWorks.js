import React from "react";
import { FaUser } from "react-icons/fa";
import image from "../../asset/howitworks.png";

const CarditWorks = () => {
  return (
    <div className="flex bg-white shadow-lg  p-2 rounded-3xl w-[300px] lg:w-[400px] h-32 lg:h-36">
      <div>
        <img src={image} alt="" className="rounded-2xl bg-cover w-28 lg:w-32" />
      </div>
      <div className="p-4  text-sm lg:text-xl flex flex-col gap-2">
        <h1>Introduction of Figma</h1>
        <div className="flex items-center gap-3 text-[#797979ff]">
          <span className="">
            <FaUser />
          </span>
          jacob jones
        </div>
        <div className="flex gap-3 text-lg">
          <div className="text-[#176af5ff] font-semibold  text-xl">$190</div>
          <div className="bg-[#fff7e6ff] text-[#ffc046ff] px-3 rounded-lg text-sm lg:text-lg">
            Best Seler
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarditWorks;
