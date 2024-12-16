import React, { useContext, useEffect, useRef } from "react";
import Hls from "hls.js";
import { MyContext } from "../App";

const VideoPlayer = ({ setDuration }) => {

  const { currentRef,currentUrl} = useContext(MyContext);
    

    useEffect(() => {
        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(currentUrl);
            hls.attachMedia(currentRef.current);

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                console.log("Manifest loaded");
                currentRef.current.play();
            });

            return () => hls.destroy();
        } else if (currentRef.current.canPlayType("application/vnd.apple.mpegurl")) {
            // For Safari browsers
            currentRef.current.src = currentUrl;
            currentRef.current.addEventListener("loadedmetadata", () => {
                currentRef.current.play();
            });
        }
    }, [currentUrl]);

    return <div className="h-screen fixed w-screen flex flex-col justify-center items-center bg-[rgb(27,27,27)] px-4">
    <span className="text-white mb-4 text-center sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-[80%] lg:max-w-[60%]">
      Test M3U8, DASH streams with Free HTML5 Player
    </span>
    <div
      className="
        w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]
        aspect-[16/9]
      "
    >
      <video
        className="w-full h-full object-contain"
        ref={currentRef}
        controls
        onLoadedMetadata={()=>{
          if (currentRef) {
            setDuration(currentRef.current.duration);
          }
        }}
      />
    </div>
  </div>
  
  
  
};

export default VideoPlayer;
