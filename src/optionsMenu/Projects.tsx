import { ReactNode, useContext } from "react";
import { ProjectsData } from "../data/ProjectsData";
import { GradientColorContext } from "../context/GradientColorContext";
import { GradientColorContextTypes } from "../interfaces/WindowColor_Interface";

export const Projects = () => {

  const { globalColors, setGlobalColors} = useContext( GradientColorContext) as GradientColorContextTypes
 
  return (
    <div style={{ backgroundImage: `linear-gradient(to bottom right,${globalColors.map( color => (`rgba(${color.r}, ${color.g}, ${color.b})`)).join(", ")})`}}>
     {
      ProjectsData.map( project => (
        <div style={{ height:"70px", width:"140px"}} className=" border rounded-lg p-1">
          <video muted playsInline  src={project.videoGrim}></video>

        </div>
      ))
     }
     </div>
  );
};
