import React, { useContext, useState } from "react";
import "./App.css";
import { MainMenu } from "./layouts/MainMenu";
import { Frame } from "./components/Frame";
import { GradientColorProvider } from "./context/GradientColorProvider";
import { GradientColorContext } from "./context/GradientColorContext";
import { GradientColorContextTypes } from "./interfaces/WindowColor_Interface";

/* interface ColorValues {
  r: number;
  g: number;
  b: number;
}

const [colors, setColors] = useState<ColorValues[]>([
  { r: 255, g: 0, b: 255 },
  { r: 0, g: 255, b: 255 },
  { r: 0, g: 100, b: 255 },
  { r: 255, g: 0, b: 255 },
]);

style={{ backgroundImage: `linear-gradient(to bottom right,${globalColors.map( color => (`rgba(${color.r}, ${color.g}, ${color.b})`)).join(", ")})`}} 
 */

function App() {
  /* 
  const [colorValue, setColorValue] = useState<string>("100");

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value);
  }; */

  const { globalColors } = useContext(
    GradientColorContext
  ) as GradientColorContextTypes;

  return (
    <div className="max-h-screen flex items-center justify-center m-10">
      <div
        className=" p-5 flex flex-col border border-green-700 relative justify-between transition-all duration-500 bg-gradient-to-t to-white via-black from-color1 bg-size-200 bg-pos-0 hover:bg-pos-100"
         style={{ height: "725px", width: "725px", backgroundImage: `linear-gradient(to bottom right,${globalColors.map( color => (`rgba(${color.r}, ${color.g}, ${color.b})`)).join(", ")})`}}
         
         
      >
        
        <Frame />

        <MainMenu />
        <button className=" transition-all duration-500 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-400 bg-size-200 bg-pos-0 hover:bg-pos-100">Hover me</button>
        
      </div>
    </div>
  );
}

export default App;
