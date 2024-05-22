import React from "react";

const numBars = 10;

const VolumeLevel = ({ volume }) => {
  return (
    <div>
      <div className="dark:text-white text-black">
        <p>Volume Level:</p>
      </div>
      <div className="flex">
        {Array.from({ length: numBars }, (_, i) => (
          <div
            key={i}
            style={{
              width: "20px",
              height: "20px",
              margin: "2px",
              backgroundColor: i / numBars < volume ? "#3ef07c" : "white",
              
            }}
          />
        ))}
      </div>
      <div className="dark:text-white text-black">{volume}</div>
    </div>
  );
};

export default VolumeLevel;
