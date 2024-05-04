import { useEffect } from "react";
import { listOfTools } from "../data/ListOfResources";

export const WorkTools = () => {
  return (
    <div className="flex gap-3 p-5 flex-wrap border border-blue-500 ">
      {listOfTools.map((tool) => (
        <div className="flex flex-col items-center ">
          <img
            style={{ height: "50px", width: "50px" }}
            src={tool.iconSVG}
            alt={tool.name}
            className="w-12 h-12 rounded-full"
          />
          {tool.name}
        </div>
      ))}
    </div>
  );
};
