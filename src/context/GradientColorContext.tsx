import { createContext } from "react";



export type GradientColorContextProps = {
    colorsa: number
}




export const GradientColorContext = createContext({} as GradientColorContextProps);

