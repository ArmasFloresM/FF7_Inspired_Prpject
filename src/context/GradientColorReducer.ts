import { ColorValues } from "../interfaces/WindowColor_Interface";

type GradientColorAction = (e:React.ChangeEvent<HTMLInputElement>) => void;
// type GHradient = { type: React.ChangeEvent<HTMLInputElement>}

const INITIAL_STATE: ColorValues[] = [
    { r: 0,   g: 0,   b: 255 },
    { r: 255, g: 0,   b: 255 },
    { r: 0,   g: 100, b: 255 },
    { r: 0,   g: 0,   b: 255 }
  ];
    



export const GradientReducer = ( state: typeof INITIAL_STATE, action?: GradientColorAction ) => {


}