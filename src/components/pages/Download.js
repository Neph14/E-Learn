import React from "react";
import CardDownload from "../UI/CardDownload";
import "./page.css";
const Download = () => {
  return (
    <div className="flex flex-col gap-20 lg:flex-row  pr-[8%] pl-[8%] bg-[#242424ff] py-20  overflow-hidden rounded-b-3xl ">
      <div className="lg:w-[40%] w-full">
        <div>
          <h1 className="text-white text-2xl lg:text-4xl font-semibold">
            Download our online <br /> <span className="text-[#0961f5ff]">Learning</span> Mobile App Now
          </h1>
        </div>
        <div className="text-white pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium enim aut, qui voluptate eius unde!</div>
        <div className="text-white flex lg:flex-row flex-col gap-5 pt-10">
          <div className="lg:border-r-2 border-b-2 lg:border-b-0 border-white pr-10 lg:pb-0 pb-2">
            <h1 className="text-xl font-bold">5 Million+</h1>
            <h1>World Activate User</h1>
          </div>
          <div className="lg:border-r-2 border-b-2  lg:border-b-0 border-white pr-10 lg:pb-0 pb-2">
            <h1 className="text-xl font-bold">1250+</h1>
            <h1>Tutors</h1>
          </div>
          <div className="lg:border-r-2 border-b-2 lg:border-b-0 border-white pr-10 lg:pb-0 pb-2">
            <h1 className="text-xl font-bold">8000+</h1>
            <h1>Courses</h1>
          </div>
        </div>
      </div>
      <div className=" flex gap-6 lg:flex-row flex-col">
        <div>
          <CardDownload />
        </div>
        <div>
          <CardDownload />
        </div>
      </div>
    </div>
  );
};

export default Download;
