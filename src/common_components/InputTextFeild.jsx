import React, { useContext } from "react";
import { MyContext } from "../App";

export const InputTextFeild = ({tittle , placeholder , value , setValue}) => {

  const { setIsLocalFile } = useContext(MyContext);

  return (
    <div className=" my-[10px]">
      <span className="font-[600] text-[#D21156]">{tittle}</span>
      <input
        type="text"
        value={value}
        onChange={(x)=>{   
           
         
          setValue(x.target.value)
          
          if(tittle === "Enter url")
          {
            setIsLocalFile(false);
          }
          

        }}
        className=" mt-[8px] bg-white  text-[black] text-sm rounded-[4px]  block w-full p-2.5 "
        placeholder={placeholder}
        required
      />
    </div>
  );
};
