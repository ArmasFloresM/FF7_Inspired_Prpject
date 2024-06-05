export interface ColorValues {
    r: number;
    g: number;
    b: number;
  }

 export type GradientColorContextTypes = {
  globalColors: Array<ColorValues> 
  setGlobalColors: (value: Array<ColorValues>) => void;
  color1: ColorValues;
  color2: ColorValues;
  color3: ColorValues;
  color4: ColorValues;

 }