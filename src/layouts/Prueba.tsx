import React, { useState } from "react";

interface GradientStop {
  color: string;
  position: string;
}

export function Prueba() {
  const [gradientStops, setGradientStops] = useState<GradientStop[]>([
    { color: "#ff0000", position: "0%" },
    { color: "#00ff00", position: "100%" },
  ]);

  const handleColorChange = (index: number, color: string) => {
    const newGradientStops = [...gradientStops];
    newGradientStops[index].color = color;
    setGradientStops(newGradientStops);
  };

  const handlePositionChange = (index: number, position: string) => {
    const newGradientStops = [...gradientStops];
    newGradientStops[index].position = position;
    setGradientStops(newGradientStops);
  };

  const addStop = () => {
    setGradientStops([...gradientStops, { color: "#000000", position: "50%" }]);
  };

  const removeStop = (index: number) => {
    const newGradientStops = [...gradientStops];
    newGradientStops.splice(index, 1);
    setGradientStops(newGradientStops);
  };

  const gradientString = gradientStops
    .map((stop) => `${stop.color} ${stop.position}`)
    .join(", ");

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "200px",
          background: `linear-gradient(${gradientString})`,
        }}
      ></div>
      {gradientStops.map((stop, index) => (
        <div key={index}>
          <input
            type="color"
            value={stop.color}
            onChange={(e) => handleColorChange(index, e.target.value)}
          />
          <input
            type="text"
            value={stop.position}
            onChange={(e) => handlePositionChange(index, e.target.value)}
          />
          <button onClick={() => removeStop(index)}>Remove</button>
        </div>
      ))}
      <button onClick={addStop}>Add Stop</button>
    </div>
  );
}
