import React from "react";
import HeaderPages from "../UI/HeaderPages";
import CardExpert from "../UI/CardExpert";

const ExpertTutor = () => {
  return (
    <div className="bg-[#f4f6f9ff]  pr-[8%] pl-[8%] py-16">
      <div>
        <div className=" flex items-center   gap-1  ">
          <span className="text-[#4285f7ff] font-semibold text-4xl pb-2">-</span>
          <span className="text-lg font-semibold">Expert Tutors</span>
        </div>
        <div className="flex justify-between gap-8 ">
          <div>
            <h1 className="text-4xl font-semibold  lg:w-[60%]">
              <span className="text-[#4285f7ff]">Your E-Learning Expert:</span> Unlocking Knowledge
            </h1>
          </div>
          <div className="justify-end">
            <button className="bg-[#0961f5ff] text-white py-2 px-3 rounded-2xl">View All Agent</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:pt-16">
        <CardExpert />
        <CardExpert />
        <CardExpert />
      </div>
    </div>
  );
};

export default ExpertTutor;
