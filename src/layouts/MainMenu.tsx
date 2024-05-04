import React, { useState } from "react";
import { Displayer } from "./Displayer";
import { Button } from "../components/Button";

export type ProjectName =
  | "WindowColor"
  | "WorkTools"
  | "Projects"
  | "AboutMe"
  | "HireMe";

//| "Project2" | "AboutMe" | "HireMe";

//correcciones hechas;
/* 
En vez de usar estados donde pasamos componenetes jsx, usamos cadenas de texto que 
corresponden al tipo de contenido que debe mostrar  => esto es mas sencillo que usar varios hooks


*/

export function MainMenu() {
  const [currentProject, setCurrentProject] = useState<ProjectName | null>(
    "WindowColor"
  );

  const handleProjectSelection = (project: ProjectName) => {
    setCurrentProject(project);
  };

  return (
    <div className="border border-red-600 flex p-1 h-3/5 justify-center">
      <div className="w-2/3 overflow-y-auto flex justify-center">
        <Displayer projectItem={currentProject} />
      </div>

      <div className="flex flex-col justify-center items-center gap-3 border border-stone-950 w-1/3">
        <div className="flex flex-col items-start">
          <Button
            title="Tools"
            onHandleClick={() => handleProjectSelection("WorkTools")}
          />
          <Button
            title="Projects"
            onHandleClick={() => handleProjectSelection("Projects")}
          />
          <Button
            title="Window Color"
            onHandleClick={() => handleProjectSelection("WindowColor")}
          />
          <Button
            title="About me"
            onHandleClick={() => handleProjectSelection("AboutMe")}
          />
          <Button
            title="contact me"
            onHandleClick={() => handleProjectSelection("HireMe")}
          />
        </div>
        
      </div>
    </div>
  );
}
