import { useState } from "react";
import { ColorValues } from "../interfaces/WindowColor_Interface";
import { GradientColorContext } from "./GradientColorContext";

const INITIAL_STATE: ColorValues[] = [
  { r: 0, g: 0, b: 255 },
  { r: 255, g: 0, b: 255 },
  { r: 0, g: 100, b: 255 },
  { r: 0, g: 0, b: 255 },
];

interface GradientColorProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientColorProvider = ({
  children,
}: GradientColorProviderProps) => {
  const [music, setMusic] = useState<string>("nada");

  const [colors, setColors] = useState<ColorValues[]>(INITIAL_STATE);

  const GradientCreated = () => {
    return colors.map(getColorString).join(", ");
  };

  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const [currentColor, setCurrentColor] = useState<ColorValues>({
    r: 0,
    g: 0,
    b: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCurrentColor({ ...currentColor, [name]: parseInt(value) });
    const newColors = [...colors];
    newColors[selectedColorIndex] = currentColor;
    setColors(newColors);
  };

  const getColorString = (color: ColorValues) =>
    `rgb(${color.r}, ${color.g}, ${color.b})`;

  

  return (
    <GradientColorContext.Provider
      value={{
        colors,
        setColors,
        GradientCreated,
        setSelectedColorIndex,
        handleInputChange,
        currentColor
      }}
    >
      {children}
    </GradientColorContext.Provider>
  );
};
