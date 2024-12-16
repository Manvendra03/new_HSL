import React, { useContext, useState } from "react";
import { useDropzone } from "react-dropzone";
import { MyContext } from "../App";

const DragAndDropBox = () => {
  const { setCurrentFile, setIsLocalFile } = useContext(MyContext);

  const [fileName, setFileName] = useState("");

  // Handle files dropped into the dropzone
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setCurrentFile(acceptedFiles[0]);
      setIsLocalFile(true);
      setFileName(acceptedFiles[0].name);
    }
  };

  // Create a dropzone using the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: ".m3u8, .mp3, .mp4 ", // Customize file types here
  });

  return (
    <div className="flex justify-center items-center flex-col h-[180px] max-w-[300px] rounded-[30px] mx-auto my-[10px]">
      {/* Dotted Border Box */}
      <div
        {...getRootProps()}
        className="w-[300px] h-[100%] border-[2px] border-dashed rounded-[20px] border-gray-400 flex justify-center items-center p-4 relative overflow-scroll"
      >
        <input {...getInputProps()} />

        {fileName.trim() ? (
          <span className="text-gray-600 text-sm ">{fileName}</span>
        ) : (
          <p className="text-center text-gray-600">
            Drag & Drop your files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};

export default DragAndDropBox;
