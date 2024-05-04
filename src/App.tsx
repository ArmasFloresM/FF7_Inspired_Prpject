import React, { useState } from "react";
import "./App.css";
import { MainMenu } from "./layouts/MainMenu";
import { Frame } from "./components/Frame";

function App() {
  const [colorValue, setColorValue] = useState<string>("100");

  const handleColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value);
  };

  return (
    <div className="max-h-screen flex items-center justify-center m-10">
      <div
        className="p-5 flex flex-col border border-green-700 relative justify-between"
        style={{ height: "725px", width: "725px" }}
      >
        <Frame />

        <MainMenu />
      </div>
    </div>
  );
}

export default App;
