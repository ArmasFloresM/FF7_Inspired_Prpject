import { ReactNode } from "react";
import { ProjectsData } from "../data/ProjectsData";

export const Projects = () => {
 
  return (
    <div className="flex flex-wrap justify-center items-center ">
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
