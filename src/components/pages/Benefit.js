import React from "react";
import HeaderPages from "../UI/HeaderPages";
import { MdTimer } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

const Benefit = () => {
  return (
    <div className=" bg-[#f4f6f9ff] pr-[8%] pl-[8%] py-20 rounded-2xl">
      <HeaderPages />
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 gap-4">
        <div className="grid gap-2">
          <div className="text-[#9dc0fbff] bg-white w-20 h-20  flex items-center justify-center text-6xl rounded-xl">
            <MdTimer />
          </div>
          <div className="text-xl font-semibold">Cost Savings</div>
          <div className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi quaerat iure quidem hic doloremque necessitatibus magni ab veniam minima.
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-[#9dc0fbff] bg-white w-20 h-20  flex items-center justify-center text-6xl rounded-xl">
            <BsPeopleFill />
          </div>
          <div className="text-xl font-semibold">Expert Instructors</div>
          <div className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi quaerat iure quidem hic doloremque necessitatibus magni ab veniam minima.
          </div>
        </div>
        <div className="grid gap-2">
          <div className="text-[#9dc0fbff] bg-white w-20 h-20  flex items-center justify-center text-6xl rounded-xl">
            <FaMedal />
          </div>
          <div className="text-xl font-semibold">Certification</div>
          <div className="opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero animi quaerat iure quidem hic doloremque necessitatibus magni ab veniam minima.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
