import React, { useState, Fragment } from "react";

const Nav = () => {
  let [open, setopen] = useState(false);

  //   const navigate = useNavigate();

  let Links = [
    { name: "Home", link: "/" },
    { name: "Features", link: "/Features" },
    { name: "How it Works", link: "/Features" },
    { name: "About Us", link: "/Features" },
    { name: "Testimonial", link: "/about" },
    { name: "blog", link: "/sign_up" },
  ];

  // const searchHandler = () => {
  //   console.log("Not Working Yet");
  // };

  return (
    <>
      <div className="fixed w-full h-20 z-50">
        <div className="bg-white h-full  top-0 right-0 left-0 rounded-sm w-full flex items-center px-5">
          <button className="text-black sm:text-2xl text-xl font-bold w-1/2 lg:w-1/5 h-full my-auto lg:pr-0 flex items-center justify-start lg:justify-center bg-transparent">
            E-Learn
          </button>
          <div className="w-1/2 flex items-center justify-end">
            <button
              onClick={() => setopen(!open)}
              className="text-white sm:text-3xl bg-blue-600 text-4xl font-extrabold h-fit rounded-lg flex items-center w-fit lg:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </button>
          </div>

          <div className=" w-3/5 h-full hidden lg:flex items-center justify-center gap-7 text-lg font-semibold">
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Home
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Features
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              How It Works
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              About Us
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Testimonial
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Blog
            </button>
          </div>
          <div className="w-1/5 h-full hidden lg:flex items-center justify-center">
            <button className="bg-blue-600 rounded-full h-[60%] px-7 font-medium text-white">
              Get The App
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden absolute bg-white pr-8 py-5 w-1/2 h-screen transition-all duration-300 backdrop-blur-3xl ${
            open ? "right-0" : "-right-[120%]"
          } bg-opacity-80`}
        >
          <div className="grid h-auto gap-3 place-items-end text-white text-lg font-semibold">
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Home
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Features
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              How It Works
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              About Us
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Testimonial
            </button>
            <button className=" text-black hover:text-gray-500 focus:text-gray-300 transition-all duration-500">
              Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
