import React from "react";
import logo from "../../asset/logo.png";
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram } from "react-icons/bs";
import { BiLogoBlogger } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-[#242424ff] pr-[8%] pl-[8%] pb-10">
      <div className=" grid grid-cols-1 md:grid-cols-3  py-10 lg:gap-40 border-b-2 border-opacity-50">
        <div>
          <button className="text-white sm:text-2xl text-xl font-bold w-1/2 lg:w-1/5 h-full my-auto lg:pr-0 flex items-center justify-start lg:justify-center bg-transparent">
            E-Learn
          </button>
          <h1 class="text-white opacity-50">
            Copyright © 2023 E-Learn. All Right Reserved
          </h1>
          <div className="hidden sm:flex gap-3 pt-6 pb-5">
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsFacebook />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BiLogoBlogger />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsYoutube />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsTwitter />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsInstagram />
            </div>
          </div>
        </div>

        <div className="flex gap-20 lg:pt-0 pt-5">
          <div className="text-white  ">
            <h1 className="text-white pb-2">Company</h1>
            <div className="text-white opacity-50 flex flex-col gap-2">
              <h1>Home</h1>
              <h1>Features</h1>
              <h1>Service</h1>
              <h1>About Us</h1>
              <h1>Contact Us</h1>
            </div>
          </div>
          <div className="text-white ">
            <h1 className="pb-2">Contact</h1>
            <div className="opacity-50 text-white flex-col gap-2">
              <h1>0123123123</h1>
              <h1>www.exampel.com</h1>
              <h1>exampel@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="text-white md:pt-0 pt-10 ">
          <h1>Get Latest Information</h1>
          <div className="flex sm:hidden gap-3 pt-6 pb-5">
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsFacebook />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BiLogoBlogger />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsYoutube />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsTwitter />
            </div>
            <div className="bg-[#404040ff] w-12 h-12 rounded-full text-2xl flex items-center justify-center text-white">
              <BsInstagram />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-10 text-white opacity-50 ">
        <h1>Copyright © 2023 E-Learn. All Right Reserved</h1>
        <h1>User Terms & Condition | Privacy Policy</h1>
      </div>
    </div>
  );
};

export default Footer;
