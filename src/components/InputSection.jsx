import React from "react";

export const InputSection = () => {
  return (
    <div className=" flex items-end  bg-white pt-[20px] pb-[10px] pl-[15px] pr-[15px] mt-[20px] rounded-[8px]">
      <div className="flex-1">
      <p className="font-[500]">Enter media url </p>
      <input
        type="text"
        class="bg-slate-600  text-white text-sm rounded-[4px]  block w-full p-2.5 "
        placeholder="url here: https//sample.mp3"
        required
      />
      </div>
      <button class="relative mx-[10px] inline-flex items-center justify-center p-0.5  me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white ">
        <span class="text-[black] relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Stream Now
        </span>
      </button>
    </div>
  );
};
