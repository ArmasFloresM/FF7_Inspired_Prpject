import {
  ChangeEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { InputRange, InputRangeProps } from "../components/InputRange";
import { Button } from "../components/Button";

interface ColorValues {
  r: number;
  g: number;
  b: number;
}

export const WindowColor: React.FC = () => {
  const [colors, setColors] = useState([
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 },
  ]);

  const [ selectedColorIndex, setSelectedColorIndex ] = useState(0);
  const [ currentColor, setCurrentColor ] = useState({ r: 0, g: 0, b: 0})

  return (
    <div className="grid grid-cols-1 p-2 justify-center gap-3 items-center">
      <div className="flex  gap-3">
        <div
          style={{ height: "150px", width: "275px" }}
          className=" flex justify-center items-center "
        >
          <div
            style={{
              /* backgroundImage: `linear-gradient(to bottom right, ${ currentColorIsActive_1 ? colorCalculate() : "rgba(0, 0, 0)"},${ currentColorIsActive_2 ? colorCalculate2(): "rgba(0, 100, 0)"}, rgba(100, 0, 0))`, */
              backgroundImage: `linear-gradient(to bottom right, rgba(55, 0,255), rgba(0, 100, 0), rgba(100, 0, 0), rgba(200, 100, 10))`,
            }}
            className="w-full h-full bg-gray-200 rounded-md relative "
          >
            <button
              onClick={() => setSelectedColorIndex(0)}
              className=" bg-green-900 flex justify-center absolute left-0 top-0 "
            >
              TL
            </button>
            <button
              onClick={() => setSelectedColorIndex(1)}
              className=" bg-blue-700 flex justify-center absolute right-0 top-0 "
            >
              TR
            </button>
            <button
              onClick={() => setSelectedColorIndex(2)}
              className=" bg-pink-500 flex justify-center absolute bottom-0 left-0 "
            >
              BL
            </button>
            <button
              onClick={() => setSelectedColorIndex(3)}
              className=" bg-yellow-500 flex justify-center absolute bottom-0 right-0 "
            >
              BR
            </button>
          </div>
        </div>

        <div
          style={{ height: "full", width: "150px" }}
          className="border border-sky-700 flex justify-center items-center"
        >
          <div
            /*   style={{
              backgroundImage: `linear-gradient(to bottom, ${colorCalculate()}, ${colorCalculate()})`,
            }} */
            className="w-2/3 h-2/3 bg-gray-200 rounded-lg"
          ></div>
        </div>
      </div>

      <div
        style={{ height: "200px" }}
        className="border border-orange-400 h-full flex flex-col justify-center items-center gap-3"
      >
        <div className="flex gap-3">
          R
          <input
            type="range"
            name="r"
            min="0"
            max="255"
            value={currentColor.r}
            onChange={}
          />
        </div>
        <div className="flex gap-3">
          G
          <input
            type="range"
            name="g"
            min="0"
            max="255"
            value={currentColor.g}
            onChange={}
          />
        </div>
        <div className="flex gap-3">
          B
          <input
            type="range"
            name="b"
            min="0"
            max="255"
            value={currentColor.b}
            onChange={}
          />
        </div>
        <button onClick={}>ver valores</button>
      </div>
    </div>
  );
};



/* 
import React, { useState } from 'react';

const ColorGradientApp: React.FC = () => {
  const [colors, setColors] = useState([
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 },
    { r: 0, g: 0, b: 0 }
  ]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState({ r: 0, g: 0, b: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentColor({ ...currentColor, [name]: parseInt(value) });
  };

  const handleSetColor = () => {
    const newColors = [...colors];
    newColors[selectedColorIndex] = currentColor;
    setColors(newColors);
  };

  const getColorString = (color: { r: number, g: number, b: number }) =>
    `rgb(${color.r}, ${color.g}, ${color.b})`;

  return (
    <div>
      <div>
        <input
          type="range"
          name="r"
          min="0"
          max="255"
          value={currentColor.r}
          onChange={handleInputChange}
        />
        <input
          type="range"
          name="g"
          min="0"
          max="255"
          value={currentColor.g}
          onChange={handleInputChange}
        />
        <input
          type="range"
          name="b"
          min="0"
          max="255"
          value={currentColor.b}
          onChange={handleInputChange}
        />
      </div>
      <div>
        {colors.map((color, index) => (
          <button key={index} onClick={() => setSelectedColorIndex(index)}>
            Color {index + 1}
          </button>
        ))}
      </div>
      <button onClick={handleSetColor}>Set Color</button>
      <div
        style={{
          width: '100%',
          height: '200px',
          backgroundImage: `linear-gradient(to bottom, ${colors.map(getColorString).join(', ')})`
        }}
      ></div>
    </div>
  );
};

export default ColorGradientApp;


*/