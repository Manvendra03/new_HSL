import React from "react";

const ProgressBar = ({ currentTime, duration, onSeek }) => {

    console.log("updated currentTime ",currentTime,duration);
    
    if(!isFinite(duration) || duration === 0)
    {
       duration =100;
    }

  return (
    <div className="w-full h-[4px]  relative">
      <input
        type="range"
        className="w-screen h-[4px]  absolute top-0 left-0 appearance-none cursor-pointer"
        min="0"
        max={duration}
        value={currentTime}
        onChange={onSeek}
        step="0.01"
        style={{
          background: `linear-gradient(to right, #FCB13D ${(currentTime / duration)*100}%, #ffebc4 ${( currentTime / duration)*100}%)`,
          WebkitAppearance: 'none',
          appearance: 'none',
          transition: 'background 0.3s ease'
        }}
      />
        

<style>{`
  /* Style for Webkit-based browsers like Chrome and Safari */
  input[type="range"]::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: orange;
    border: 2px solid   orange;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  }
`}</style>
    </div>
  );
};

export default ProgressBar;
