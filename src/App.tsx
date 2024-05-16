import React, { useState } from "react";
import "./App.css";
import { MainMenu } from "./layouts/MainMenu";
import { Frame } from "./components/Frame";
import { GradientColorProvider } from "./context/GradientColorProider";

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

style={{ backgroundImage: `linear-gradient(to bottom right,${colors.map( color => (`rgba(${color.r}, ${color.g}, ${color.b})`)).join(", ")})`}} 
 */

function App() {
  const [colorValue, setColorValue] = useState<string>("100");

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value);
  };

  return (
    <GradientColorProvider>
      <div className="max-h-screen flex items-center justify-center m-10">
        <div
          className="p-5 flex flex-col border border-green-700 relative justify-between"
          style={{ height: "725px", width: "725px" }}
        >
          <Frame />

          <MainMenu />
        </div>
      </div>
    </GradientColorProvider>
  );
}

export default App;
