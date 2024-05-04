import React from "react";
import { WindowColor } from "../optionsMenu/WindowColor";
import { WorkTools } from "../optionsMenu/WorkTools";
import { Projects } from "../optionsMenu/Projects";
import { AboutMe } from "../optionsMenu/AboutMe";
import { HireMe } from "../optionsMenu/HireMe";
import { ProjectName } from "./MainMenu";

type ProjectComponents = {
  [key in ProjectName]: React.FC;
};

const components: ProjectComponents = {
  WindowColor,
  WorkTools,
  Projects,
  AboutMe,
  HireMe,
};

interface DisplayerProps {
  projectItem: ProjectName | null;
}

export function Displayer({ projectItem }: DisplayerProps) {
  const ComponentToDisplay = projectItem ? components[projectItem] : null;

  if (!ComponentToDisplay) return null;

  return <ComponentToDisplay />;
}
