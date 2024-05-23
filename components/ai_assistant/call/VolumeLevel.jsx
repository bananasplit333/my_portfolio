import React from "react";

const numBars = 10;

const VolumeLevel = ({ volume }) => {
  return (
    <div>
      <div className="flex h-5">
        {Array.from({ length: numBars }, (_, i) => (
          <div
            key={i}
            style={{
              width: "7px",
              height: "7px",
              margin: "2px",
              backgroundColor: i / numBars < volume ? "#3ef07c" : "#FFF8DC",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default VolumeLevel;
