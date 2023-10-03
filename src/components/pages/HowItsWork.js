import React from "react";
// import CarditWorks from "../UI/CarditWorks";
import CarditWorks from "../UI/CarditWorks";
import TeskItWorks from "../UI/TeskItWorks";
const HowItsWork = () => {
  return (
    <div className="py-28 pr-[8%] pl-[8%]">
      <div className="text-center flex items-center justify-center  gap-1 ">
        <span className="text-[#4285f7ff] font-semibold text-4xl pb-2">-</span>
        <span className="text-lg font-normal">How It Work</span>
      </div>
      <div className="text-4xl w-full text-center font-semibold">
        Unlocking Learning With <br />
        <span className="text-[#0961f5ff]">Four Easy Steps</span>
      </div>

      <div className="flex pt-20 flex-col lg:flex-row">
        <div className="lg:w-1/2 relative w-full ">
          <div className="bg-[#0960f2ff] w-[280px] h-[400px]  lg:w-[400px] rounded-3xl "></div>{" "}
          <div className="flex flex-col gap-3 absolute lg:top-[-18px] bottom-6 left-10 lg:left-12">
            <CarditWorks></CarditWorks>
            <CarditWorks></CarditWorks>
            <CarditWorks></CarditWorks>
          </div>
        </div>
        <div className="md:w-1/2 w-full lg:pt-0 pt-5 ">
          <div className="flex flex-col  gap-10">
            <div className="flex items-center gap-3">
              <div className="text-white bg-black text-3xl p-3 rounded-full">
                <ion-icon name="document-text"></ion-icon>
              </div>
              <div>
                <h1 className="font-semibold text-2xl">
                  Discover Latest Courses
                </h1>
                <h1 className="opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquid ullam esse cum quia vero ipsam officia cupiditate,
                  magn
                </h1>
              </div>
            </div>
            <TeskItWorks icon="checkmark-done-circle" teks="Enrol And Acces" />
            <TeskItWorks icon="videocam" teks="Learn and practice" />
            <TeskItWorks icon="checkmark-done-circle" teks="Enrol And Acces" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
