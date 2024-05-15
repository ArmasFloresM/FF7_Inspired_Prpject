import React, { useState } from 'react';

export const HireMe: React.FC = () => {
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
