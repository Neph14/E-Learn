import React from "react";
import Qrcode from "../../asset/Qrcode.png";
import { AiFillApple } from "react-icons/ai";

const CardDownload = () => {
  return (
    <div className="bg-[#434343ff] text-white p-5 rounded-lg flex flex-col gap-2 lg:w-[300px] w-full  ">
      <div className="flex lg:flex-col justify-between gap-5">
        <div>
          <h1>For IOS</h1>
          <h1>IOS 15.6+</h1>
        </div>
        <button className="bg-[#0961f5ff] text-white px-3 py-1 rounded-full w-1/2">
          Download app
        </button>
      </div>
      <div className="pt-5 flex justify-between  relative">
        <img className="w-[30%]" src={Qrcode} alt="" />
        <div className="text-[70px] bg-[#242424ff] p-2 rounded-full  absolute   lg:left-52 lg:top-10  left-64 top-14 ">
          <AiFillApple />
        </div>
      </div>
    </div>
  );
};

export default CardDownload;
