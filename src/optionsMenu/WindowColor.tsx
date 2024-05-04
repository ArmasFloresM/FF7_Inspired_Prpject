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

interface DivAreas {
  TopLeft: string;
  TopRight: string;
  BottomLeft: string;
  BottomRight: string;
}

interface ColorsArray extends Array<ColorValues> {}

export const WindowColor = () => {
  const [currentArea, setCurrentArea] = useState<any | null>(null);
  const [currentColor, setCurrentColor] = useState<ColorValues | null>(null);
  const [colorFormulas, setColorFormulas] = useState<ColorsArray>([]);

  const [colorValues, setColorValues] = useState<ColorValues>({
    r: 0,
    g: 0,
    b: 0,
  });

  const saveColor = () => {
    const { r, g, b } = colorValues;
    
    setColorFormulas((prevState) => [...prevState, {r, g, b}])
    console.log(colorFormulas)
  };

  const calculateColor = () => {
    const { r, g, b } = colorValues;
    
    return `rgba(${r}, ${g}, ${b})`;
  };

  const handleColorChange = (
    e: ChangeEvent<HTMLInputElement>,
    channel: keyof ColorValues
  ) => {
    const value = parseInt(e.target.value);
    setColorValues((prevValues) => ({ ...prevValues, [channel]: value }));
  };

  return (
    <div className="grid grid-cols-1 p-2 justify-center gap-3 items-center">
      <div className="flex  gap-3">
        <div
          style={{ height: "150px", width: "275px" }}
          className=" flex justify-center items-center "
        >
          <div
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${calculateColor()}, rgba(50,50,50))`,
            }}
            className="w-full h-full bg-gray-200 rounded-md relative "
          >
            <button className=" bg-green-900 flex justify-center absolute left-0 top-0 ">
              TL
            </button>
            <button
              onClick={saveColor}
              className=" bg-blue-700 flex justify-center absolute right-0 top-0 "
            >
              TR
            </button>
            <button
              onClick={() => console.log("dasd")}
              className=" bg-pink-500 flex justify-center absolute bottom-0 left-0 "
            >
              BL
            </button>
            <button className=" bg-yellow-500 flex justify-center absolute bottom-0 right-0 ">
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
              backgroundImage: `linear-gradient(to bottom, ${calculateColor()}, ${calculateColor()})`,
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
            min="0"
            max="255"
            value={colorValues.r}
            onChange={(e) => handleColorChange(e, "r")}
          />
        </div>
        <div className="flex gap-3">
          G
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.g}
            onChange={(e) => handleColorChange(e, "g")}
          />
        </div>
        <div className="flex gap-3">
          B
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.b}
            onChange={(e) => handleColorChange(e, "b")}
          />
        </div>
      </div>
    </div>
  );
};
