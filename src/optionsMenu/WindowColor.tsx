import React, { ChangeEvent, useContext, useState } from "react";
import { ColorValues } from "../interfaces/WindowColor_Interface";

export const WindowColor: React.FC = () => {
  const [colors, setColors] = useState<ColorValues[]>([
    { r: 0, g: 0, b: 255 },
    { r: 0, g: 0, b: 255 },
    { r: 0, g: 100, b: 255 },
    { r: 0, g: 0, b: 255 },
  ]);

  const GradientCreated = () => {
    return colors.map(getColorString).join(", ");
  };


 

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState<ColorValues>({
    r: 0,
    g: 0,
    b: 0,
  });

/*   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentColor({ ...currentColor, [name]: parseInt(value) });
    const newColors = [...colors];
    newColors[selectedColorIndex] = currentColor;
    setColors(newColors);
  }; */

  const getColorString = (color: ColorValues) =>
    `rgb(${color.r}, ${color.g}, ${color.b})`;

  /*   const handleSetColor = () => {
      const newColors = [...colors];
      newColors[selectedColorIndex] = currentColor;
      setColors(newColors);
    }; */
  return (
    <div className="grid grid-cols-1 p-2 justify-center gap-3 items-center">
      <div className="flex gap-3">
        <div
          style={{ height: "150px", width: "275px" }}
          className="flex justify-center items-center"
        >
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${GradientCreated()})`,
            }}
            className="w-full h-full bg-gray-200 rounded-md relative"
          >
            <button
              onClick={() => setSelectedColorIndex(0)}
              className="bg-green-900 flex justify-center absolute left-0 top-0"
            >
              TL
            </button>
            <button
              onClick={() => setSelectedColorIndex(1)}
              className="bg-blue-700 flex justify-center absolute right-0 top-0"
            >
              TR
            </button>
            <button
              onClick={() => setSelectedColorIndex(2)}
              className="bg-pink-500 flex justify-center absolute bottom-0 left-0"
            >
              BL
            </button>
            <button
              onClick={() => setSelectedColorIndex(3)}
              className="bg-yellow-500 flex justify-center absolute bottom-0 right-0"
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
            style={{
              backgroundImage: `linear-gradient(to bottom, ${getColorString(
                currentColor
              )}, ${getColorString(currentColor)})`,
            }}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
          />
        </div>
        {/* <button onClick={handleSetColor}>Set Color</button> */}
      </div>
    </div>
  );
};
