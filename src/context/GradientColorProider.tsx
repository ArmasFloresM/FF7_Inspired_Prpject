import { ColorValues } from "../interfaces/WindowColor_Interface";
import { GradientColorContext } from "./GradientColorContext";
/* 
const INITIAL_STATE: ColorValues[] = [
  { r: 0,   g: 0,   b: 255 },
  { r: 255, g: 0,   b: 255 },
  { r: 0,   g: 100, b: 255 },
  { r: 0,   g: 0,   b: 255 }
]; */

interface GradientColorProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientColorProvider = ({
  children,
}: GradientColorProviderProps) => {



  





  return (
    <GradientColorContext.Provider value={{}}>
      {children}
    </GradientColorContext.Provider>
  );
};
