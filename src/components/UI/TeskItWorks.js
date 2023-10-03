import React from "react";

const TeskItWorks = (props) => {
  return (
    <div className="flex lg:items-center items-start  gap-3">
      <div className="text-[#0961f5ff] bg-[#f4f6f9ff] text-3xl p-3 rounded-full">
        <ion-icon name={`${props.icon}`}></ion-icon>
      </div>
      <div>
        <h1 className="font-semibold text-2xl">{props.teks}</h1>
        <h1 className="opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ullam esse cum quia vero ipsam officia cupiditate, magn</h1>
      </div>
    </div>
  );
};

export default TeskItWorks;
