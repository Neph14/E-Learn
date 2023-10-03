import React from "react";
import image from "../../asset/expertPeople.png";
const CardExpert = () => {
  return (
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img class="w-full h-68 p-4 object-cover  object-top" src={image} alt="Sunset in the mountains" />
      <div class="px-6  n">
        <div className="pb-2 flex justify-between">
          <div>
            <p class="text-gray-700 text-xl font-bold">Easther Howard</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-xl ">
            <div className="2xl text-yellow-500">
              <ion-icon name="star"></ion-icon>
            </div>
            <div>5.0</div>
          </div>
        </div>
        <h2 className="opacity-50 pb-4">Design Tutor</h2>
      </div>
    </div>
  );
};

export default CardExpert;
