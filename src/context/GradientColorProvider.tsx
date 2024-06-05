import { ReactNode, useState } from "react";
import { ColorValues } from "../interfaces/WindowColor_Interface";
import { GradientColorContext } from "./GradientColorContext";

const INITIAL_STATE = [
  { r: 0, g: 0, b: 255 },
  { r: 255, g: 0, b: 255 },
  { r: 0, g: 100, b: 255 },
  { r: 0, g: 0, b: 255 },
];

interface GradientColorProviderProps {
  children: ReactNode;
}

export const GradientColorProvider = ({
  children,
}: GradientColorProviderProps) => {
  const [globalColors, setGlobalColors] =
    useState<Array<ColorValues>>(INITIAL_STATE);

  /* const globalGradient = () => {
     return globalColors.map( color => (`rgba(${color.r}, ${color.g}, ${color.b})`)).join(", ")}
  } */

  const color1 = globalColors[0];
  const color2 = globalColors[1];
  const color3 = globalColors[2];
  const color4 = globalColors[3];


/*   const ColorFormated = `linear-gradient(to bottom right,${globalColors
    .map((color) => `rgba(${color.r}, ${color.g}, ${color.b})`)
    .join(", ")})` */

  return (
    <GradientColorContext.Provider
      value={{ globalColors, setGlobalColors, color1, color2, color3, color4 }}
    >
      {children}
    </GradientColorContext.Provider>
  );
};
