import React, { useState } from 'react';

interface Color {
  r: number;
  g: number;
  b: number;
}

export const HireMe: React.FC = () => {
  const [color1, setColor1] = useState<Color>({ r: 255, g: 0, b: 0 }); // Color por defecto: rojo
  const [color2, setColor2] = useState<Color>({ r: 0, g: 0, b: 255 }); // Color por defecto: azul

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, key: keyof Color) => {
    const value = parseInt(event.target.value);
    if (key === 'r') {
      setColor1(prevColor => ({
        ...prevColor,
        [key]: value
      }));
    } else {
      setColor2(prevColor => ({
        ...prevColor,
        [key]: value
      }));
    }
  };

  const generateColorString = (color: Color): string => {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
  };

  const generateGradient = (position: string): string => {
    let firstColor: string = generateColorString(color1);
    let secondColor: string = generateColorString(color2);

    switch (position) {
      case 'arriba izquierda':
        return `linear-gradient(to top left, ${firstColor}, ${secondColor})`;
      case 'arriba derecha':
        return `linear-gradient(to top right, ${firstColor}, ${secondColor})`;
      case 'abajo izquierda':
        return `linear-gradient(to bottom left, ${firstColor}, ${secondColor})`;
      case 'abajo derecha':
        return `linear-gradient(to bottom right, ${firstColor}, ${secondColor})`;
      default:
        return `linear-gradient(to bottom, ${firstColor}, ${secondColor})`;
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="r">Red</label>
        <input
          type="range"
          id="r"
          min={0}
          max={255}
          value={color1.r}
          onChange={(e) => handleInputChange(e, 'r')}
        />
        {color1.r}
      </div>
      <div>
        <label htmlFor="g">Green</label>
        <input
          type="range"
          id="g"
          min={0}
          max={255}
          value={color1.g}
          onChange={(e) => handleInputChange(e, 'g')}
        />
        {color1.g}
      </div>
      <div>
        <label htmlFor="b">Blue</label>
        <input
          type="range"
          id="b"
          min={0}
          max={255}
          value={color1.b}
          onChange={(e) => handleInputChange(e, 'b')}
        />
        {color1.b}
      </div>
      <div>
        <label htmlFor="r2">Red 2</label>
        <input
          type="range"
          id="r2"
          min={0}
          max={255}
          value={color2.r}
          onChange={(e) => handleInputChange(e, 'r')}
        />
        {color2.r}
      </div>
      <div>
        <label htmlFor="g2">Green 2</label>
        <input
          type="range"
          id="g2"
          min={0}
          max={255}
          value={color2.g}
          onChange={(e) => handleInputChange(e, 'g')}
        />
        {color2.g}
      </div>
      <div>
        <label htmlFor="b2">Blue 2</label>
        <input
          type="range"
          id="b2"
          min={0}
          max={255}
          value={color2.b}
          onChange={(e) => handleInputChange(e, 'b')}
        />
        {color2.b}
      </div>
      <div style={{ backgroundImage: generateGradient('arriba izquierda'), width: '100px', height: '100px' }}></div>
    </div>
  );
};

