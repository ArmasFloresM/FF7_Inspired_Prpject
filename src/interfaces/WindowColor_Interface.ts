export interface ColorValues {
    r: number;
    g: number;
    b: number;
  }

 export type GradientColorContextTypes = {
  globalColors: Array<ColorValues> 
  setGlobalColors: (value: Array<ColorValues>) => void
 }