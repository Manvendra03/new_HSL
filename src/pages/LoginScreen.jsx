import React, { useContext, useState } from "react";
import { InputTextFeild } from "../common_components/InputTextFeild";
import { Navigate, useNavigate } from "react-router-dom";
import DragAndDropBox from "../components/DragAndDrop";
import { MyContext } from "../App";

export const LoginScreen = () => {
  const { isLocalFile ,currentFile,setCurrentUrl} = useContext(MyContext);

  const [name, setName] = useState("");
  const [url, setUrl] = useState(
    "https://d2ccagweq17i1k.cloudfront.net/Output/1733996982061_Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps/1733996982061_Tum%20Hi%20Ho%20-%20Aashiqui%202%20128%20Kbps.m3u8?Expires=1734007220&Key-Pair-Id=AKIA3M7ACXH2FQDUUG47&Signature=iBuHSU~oEq-G0V5dag-0FSD0cyHlYIf2EaNwroYxyAGC7vnEDmTJ3xndkEqkNnh~FGon4g3kP56yOFF-jeewpYepfPZAqL6B3emFk8W1OVDZltCED7ZuTKj5Bq5X03xdNWB-pJNdcSk9-vtdPF58om8ElFWScxb22NtgQHJiQYUFMtCk-6cljAyWpwinHejk6fEpM0zztzN-Lv4sSX3c23z0Cxq5CesQJAlCBg3D3FmmPMJ4Oe6M7HR3GZResTcrPUuDd4Cev~5ATLqEE3b~tuCsb9V7KzvMn1ps~qfe~vSzTufrogb~~Znoy9N7e1~PQ~KkU~ewMw~lOsAYw1QKjw__"
  );

  const navigation = useNavigate();


  const setDataToLocalDatabase = (url) => {

    localStorage.setItem("url",JSON.stringify(url));
  
  }



  return (
    <div className="h-screen w-screen bg-[white] flex justify-center items-center">
      <div className="px-[20px] py-[20px] flex-1 flex flex-col   max-w-[400px] bg-[#FBAE42] rounded-[10px]">
        <span className="self-center mb-[10px] font-bold text-[20px]">
          {" "}
          HSL Player
        </span>
        <InputTextFeild
          tittle={"Enter your Name"}
          placeholder={"ex.John Sharma"}
          value={name}
          setValue={setName}
        />
        <InputTextFeild
          tittle={"Enter url"}
          placeholder={"url : https//sample.mp3u8"}
          value={url}
          setValue={setUrl}
        />

        <DragAndDropBox />

        <button
          type="button"
          onClick={() => {

            if(url.trim()=== "" && currentFile === null)
                {
                    console.log("Nothing is selected ");
                    alert("Please enter the url or add a file ");
                    return;
                }   


              if(isLocalFile || url.trim()=== "")
              {
                  if (currentFile) {
                    console.log("#1 -- > file selected ",currentFile.name);
                    const fileUrl = URL.createObjectURL(currentFile);
                    
                    setCurrentUrl(fileUrl);
                    setDataToLocalDatabase(fileUrl);
                    navigation(`/home`);
                  }
              }else{  
                
                 setCurrentUrl(url);
                 setDataToLocalDatabase(url);
                 console.log("#2 -- > file selected ",url);

                    navigation(`/home`);
                    setName("");
                    setUrl("");

              }
          }}
          className="mt-[15px] text-white bg-gradient-to-r from-[#D21156] via-red-500 to-[#D21156] hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Stream Now
        </button>
      </div>
    </div>
  );
};
