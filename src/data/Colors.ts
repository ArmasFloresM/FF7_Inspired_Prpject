



import { useContext  } from "react";
import { GradientColorContext } from "../context/GradientColorContext";
import { GradientColorContextTypes } from "../interfaces/WindowColor_Interface";

const { globalColors } = useContext( GradientColorContext) as GradientColorContextTypes;



export const colorsAvailable = [globalColors[0], globalColors[1], globalColors[2], globalColors[3]];