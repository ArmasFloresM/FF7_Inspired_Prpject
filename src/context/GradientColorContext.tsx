import { Dispatch, SetStateAction, createContext, useState } from "react";
import { ColorValues } from "../interfaces/WindowColor_Interface";


interface contextProps {
  
   colors: ColorValues[]

   setColors:  Dispatch<SetStateAction<ColorValues[]>>

   GradientCreated: () => string;

   handleInputChange: React.ChangeEventHandler<HTMLInputElement>

   currentColor: ColorValues

   setSelectedColorIndex: Dispatch<SetStateAction<number>>

}



export const GradientColorContext = createContext({} as contextProps);
  



/* 
[] as ColorValues[]


{ r: 0, g: 0, b: 255 },
  { r: 255, g: 0, b: 255 },
  { r: 0, g: 100, b: 255 },
  { r: 0, g: 0, b: 255 }, */