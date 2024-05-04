import React, { useState } from "react";

type InputsColorsProps = {
    colorSample: any
};

export type InputRangeProps = {

    red: string;
    green: string;
    blue: string;

};

export const InputRange = ({colorSample}: InputsColorsProps ) => {

    
  const [redColor, setRedColor] = useState<string>();
  const [greenColor, setGreenColor] = useState<string>();
  const [blueColor, setBlueColor] = useState<string>();
  const [ sample, setSample ] = useState<InputRangeProps>({red: "0",blue:"0", green:"0"})

  colorSample = () => {
    return { redColor, greenColor, blueColor }
  }
 

  const gradientColor = () => {

    return `linear-gradient(rgba(${redColor},${greenColor},${blueColor}), rgba(${redColor},${greenColor},${blueColor}))`
  }

  return (
    <div
      style={{ height: "200px" }}
      className="border border-orange-400 h-full flex flex-col justify-center items-center gap-3"
    >
      <div className="flex gap-3">
        R
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setRedColor(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        G
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setGreenColor(e.target.value)}
        />
      </div>
      <div className="flex gap-3">
        B
        <input
          type="range"
          min="0"
          max="255"
          onChange={(e) => setBlueColor(e.target.value)}
        />
      </div>
      {/* <div
        style={{
          backgroundImage: `linear-gradient(rgba(${redColor},${greenColor},${blueColor}), rgba(${redColor},${greenColor},${blueColor}))`,
        }}
        className="w-2/3 h-2/3 bg-gray-200 rounded-lg"
      ></div> */}
    </div>
  );
};
