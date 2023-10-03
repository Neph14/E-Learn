import React from "react";
import newsimg from "../../asset/news1.png";
const NewsCard = () => {
  return (
    // <div class="shadow-xl  h-[70%]  ">
    //   <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl" />
    //   <img
    //     className="w-full rounded-t-xl  h-1/2 object-cover
    //   r"
    //     src={newsimg}
    //     alt="Mountain "
    //   />
    //   <div class="px-6 py-4">
    //     <div class="font-semibold text-lg mb-2 bg-[#f4f6f9ff] w-24 text-[#4285f7ff] flex justify-center items-center rounded-3xl">Finance</div>
    //     <p class="text-gray-700 text-base">
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
    //     </p>
    //   </div>
    //   <div class="px-6 pt-4 pb-2 flex  gap-2">
    //     <div className="flex items-center justify-center gap-2">
    //       <div className="text-[#4285f7ff]  text-3xl">
    //         <ion-icon name="person"></ion-icon>
    //       </div>

    //       <div className="opacity-50 text-lg ">by Admin</div>
    //     </div>
    //     <div className="flex items-center justify-center gap-2">
    //       <div className="text-[#4285f7ff]  text-3xl ">
    //         <ion-icon name="calendar"></ion-icon>
    //       </div>
    //       <div className="opacity-50 text-lg">23 Sept ,2023</div>
    //     </div>
    //   </div>
    // </div>
    <div class="max-w-sm rounded-xl overflow-hidden shadow-lg">
      <img class="w-full h-56 object-cover" src={newsimg} alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-semibold text-lg mb-2 bg-[#f4f6f9ff] w-24 text-[#4285f7ff] flex justify-center items-center rounded-3xl">Finance</div>
        <p class="text-gray-700 text-xl font-bold">Smart Money Moves : Building Your Emergency Fund</p>
      </div>
      <div class="px-6 pt-4 pb-2 flex gap-2">
        <div className="flex items-center justify-center gap-2">
          <div className="text-[#4285f7ff]  text-3xl">
            <ion-icon name="person"></ion-icon>
          </div>
          <div className="opacity-50 text-lg ">by Admin</div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-[#4285f7ff]  text-3xl ">
            <ion-icon name="calendar"></ion-icon>
          </div>
          <div className="opacity-50 text-lg">23 Sept ,2023</div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
