import { GradientColorContext } from "./GradientColorContext"

interface GradientColorProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const GradientColorProvider = ({ children }: GradientColorProviderProps ) => {
  return (
    <GradientColorContext.Provider value={{}}>
        { children }      
    </GradientColorContext.Provider>
  )
}


