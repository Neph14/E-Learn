import React from "react";

const HeaderPages = () => {
  return (
    <div>
      <div className=" flex items-center   gap-1  ">
        <span className="text-[#4285f7ff] font-semibold text-4xl pb-2">-</span>
        <span className="text-lg font-semibold">Benefit of Online Learning App</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
        <div>
          <h1 className="text-4xl font-semibold  lg:w-1/2">
            <span className="text-[#4285f7ff]">Exclusive Benefits</span> of E-Learn App
          </h1>
        </div>
        <div className="border-l-4 pl-4 border-[#ffa800ff] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque odio, corrupti reprehenderit doloremque qui quas, eos, consequuntur molestiae esse sit aspernatur quae?
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;
