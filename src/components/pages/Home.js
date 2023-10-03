import React from "react";
import people from "../../asset/people.png";

const Home = () => {
  return (
    <div className=" bg h-screen w-screen bg-[#f2f5f9ff]  pr-[8%] pl-[8%] overflow-hidden rounded-3xl ">
      <div className="flex  justify-center lg:justify-between  pt-32">
        <div className="hidden sm:block  relative w-[30%] lg:pt-20 lg:pr-32">
          <h1 className="font-semibold  text-4xl">5M+</h1>
          <h1 className="text-xl font-semibold opacity-50">Activate User</h1>
          <img src={people} alt="" />
        </div>
        <div className="lg:w-[50%] ">
          <h1 className="text-lg text-center font-medium pb-5 ">
            The Best Online Learning App
          </h1>
          <h1 className="text-4xl lg:text-5xl font-semibold text-center pb-2 pt-2 ">
            Your Ultimate online
            <span className="text-[#0961f5ff] underline lg:underline-offset-[16px] pt-2">
              Learning
            </span>
            Solution!
          </h1>
        </div>
        <div className="hidden sm:block  items-center  w-[30%] pl-[180px]  ">
          <div className="bg-white w-24 h-24 flex items-center text-center font-medium rounded-full text-xs">
            <p>Best Online Learning App</p>
          </div>
        </div>
      </div>

      {/* <div className=" bg flex lg:justify-center h-[400px]   "> */}
      {/* <div className=" flex  lg:justify-center   lg:gap-10 lg:w-full">
          <div className="lg:mt-22  mt-20">
            <img src={phone} alt="" className="lg:h-[600px]    " />
          </div>
          <div>
            <img src={phone} alt="" className="lg:h-[600px]    " />
          </div>
          <div className="lg:mt-22  mt-20">
            <img src={phone} alt="" className="lg:h-[600px]  " />
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
