
import React from "react";

const ProfileCircle = () => {
  return (
    <div className="flex justify-center items-center h-[300px] max-w-[300px] overflow-hidden">
      {/* Container for Overlapping Circles */}
      <div className="relative flex justify-center items-center w-[300px] h-[300px] m-auto overflow-hidden">

{/* Circle 1 - light Yellow */}
<div className="absolute w-[240px] h-[240px] rounded-full bg-[#ffebc4] translate-x-[0px] translate-y-[-15px] "></div>

 {/* Circle 2 - light blue */}
 <div className="absolute  w-[220px] h-[220px] rounded-full bg-[#CBDCDF] translate-x-[35px] translate-y-[12px]"></div>

   {/* Circle 3 - light pink */}
  <div className="absolute w-[220px] h-[220px] rounded-full bg-[#ffd6e5] translate-x-[-15px] translate-y-[30px]"></div>

          {/* Circle 4 - yellow */}
          <div className="absolute w-[230px] h-[230px] rounded-full bg-[#FCB13D]  translate-x-[-22px]  translate-y-[0px]"></div>

          {/* Circle 5 - green */}
          <div className="absolute w-[240px] h-[240px] rounded-full bg-[#1F8380] translate-x-[20px] translate-y-[-10px]"></div>

          {/* Circle 6 - red */}
          <div className="absolute  w-[240px] h-[240px] rounded-full bg-[#D6155B] translate-x-[10px] translate-y-[25px]"></div>

        {/* Profile Image */}
        <div className="absolute bg-black w-[240px] h-[240px] rounded-[280px] overflow-hidden shadow-lg translate-x-[3px] translate-y-[0px]">
          <img
            src={
              "https://media.istockphoto.com/id/1443887485/photo/young-adult-black-male-music-singer-passionately-singing-in-a-beautiful-illuminated-studio.jpg?s=612x612&w=0&k=20&c=wQp7zLdNQ72w10SaxpuvWvH8qg5rPb3r6qGeouwLD2E="
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCircle;
