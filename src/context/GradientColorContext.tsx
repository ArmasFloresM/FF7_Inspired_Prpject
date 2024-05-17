import { createContext, useState } from "react";
import { ColorValues } from "../interfaces/WindowColor_Interface";

export const GradientColorContext = createContext([] as ColorValues[]);
  



/* 
{ r: 0, g: 0, b: 255 },
  { r: 255, g: 0, b: 255 },
  { r: 0, g: 100, b: 255 },
  { r: 0, g: 0, b: 255 }, */