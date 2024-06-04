import React, { useContext, useState } from "react";
import "./App.css";
import { MainMenu } from "./layouts/MainMenu";
import { Frame } from "./components/Frame";
import { GradientColorProvider } from "./context/GradientColorProvider";
import { GradientColorContext } from "./context/GradientColorContext";
import { GradientColorContextTypes } from "./interfaces/WindowColor_Interface";


function App() {

  const { globalColors,color1, color2, color3, color4 } = useContext(
    GradientColorContext
  ) as GradientColorContextTypes;

  return (
    <div className="max-h-screen flex items-center justify-center m-10">
      <div
        className=" p-5 flex flex-col border border-green-700 relative justify-between"
        style={{
          height: "725px",
          width: "725px",
          transition: "background-image 0.5s ease-in-out",
          backgroundImage: `linear-gradient(to bottom right,${globalColors
            .map((color) => `rgba(${color.r}, ${color.g}, ${color.b})`)
            .join(", ")})`,
        }}
      >
        <Frame />

        <MainMenu />
        
      </div>
    </div>
  );
}

export default App;
