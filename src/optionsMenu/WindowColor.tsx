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

type colorFunction = () => void;

type DivAreas = "first" | "second" | "third" | "fourth";

interface ColorsArray extends Array<ColorValues> {}

export const WindowColor = () => {
  const [currentArea, setCurrentArea] = useState<DivAreas | null>();
  const [currentColor, setCurrentColor] = useState<ColorValues | null>(null);
  const [colorFormulas, setColorFormulas] = useState<ColorsArray>([]);

  /*   const [firstColor, setFirstColor] = useState<colorFunction>();
  const [SecondColor, setSecondColor] = useState<colorFunction>();
  const [ThirdColor, setThirdColor] = useState<colorFunction>();
  const [FourthColor, setFourthColor] = useState<colorFunction>(); */

  const [colorValues, setColorValues] = useState<ColorValues>({
    r: 0,
    g: 0,
    b: 0,
  });
  /* 
  const firstColor = (colorFormm: ColorValues) => {
    const { r, g, b } = colorFormm;
    return `rgba(${r}, ${g}, ${b})`;
  };
 */

  const colorCalculate = () => {
    const { r, g, b } = colorValues;
    

    return `rgba(${r}, ${g}, ${b})`;
  };

  const coloring = (area: DivAreas) => {
    const { r, g, b } = colorValues;
    if(area === "first"){
      firstColor({r,g,b})
    }else if(area === "second"){
      secondColor({r,g,b})
    }else if(area === "third"){
      thirdColor({r,g,b})
    }else{
      fourthColor({r,g,b})
    }
  };

  //colors functions
  const firstColor = ({ r, g, b }: ColorValues) => {
    return `rgba(${r}, ${g}, ${b})`;
  };
  const secondColor = ({ r, g, b }: ColorValues) => {
    return `rgba(${r}, ${g}, ${b})`;
  };
  const thirdColor = ({ r, g, b }: ColorValues) => {
    return `rgba(${r}, ${g}, ${b})`;
  };
  const fourthColor = ({ r, g, b }: ColorValues) => {
    return `rgba(${r}, ${g}, ${b})`;
  };

  const selectingArea = (area: DivAreas) => {
    setCurrentArea(area);
    console.log(currentArea);
  };

  const inputChange = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof ColorValues
  ) => {
    const value = parseInt(event.target.value);
    setColorValues((prevValues) => ({ ...prevValues, [key]: value }));
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
              backgroundImage: `linear-gradient(to bottom right, ${firstColor}, ${secondColor}, ${thirdColor}, ${fourthColor})`,
            }}
            className="w-full h-full bg-gray-200 rounded-md relative "
          >
            <button
              onClick={() => coloring("first")}
              className=" bg-green-900 flex justify-center absolute left-0 top-0 "
            >
              TL
            </button>
            <button
              onClick={() => coloring("second")}
              className=" bg-blue-700 flex justify-center absolute right-0 top-0 "
            >
              TR
            </button>
            <button
              onClick={() => coloring("third")}
              className=" bg-pink-500 flex justify-center absolute bottom-0 left-0 "
            >
              BL
            </button>
            <button
              onClick={() => coloring("fourth")}
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
             style={{
              backgroundImage: `linear-gradient(to bottom, ${colorCalculate()}, ${colorCalculate()})`,
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
            onChange={(e) => inputChange(e, "r")}
          />
        </div>
        <div className="flex gap-3">
          G
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.g}
            onChange={(e) => inputChange(e, "g")}
          />
        </div>
        <div className="flex gap-3">
          B
          <input
            type="range"
            min="0"
            max="255"
            value={colorValues.b}
            onChange={(e) => inputChange(e, "b")}
          />
        </div>
      </div>
    </div>
  );
};
