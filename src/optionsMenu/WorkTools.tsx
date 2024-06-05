import { useEffect } from "react";
import { listOfTools } from "../data/ListOfResources";
import { formatText } from "../helpers/formatResources";

export const WorkTools = () => {









  return (
    <div className="flex gap-3 p-5 flex-wrap border border-blue-500 justify-center overflow-y-auto bg-scroll">
      {listOfTools.map((tool) => (
        <div className="flex flex-col items-center border border-red-600 w-[120px] gap-1 justify-center">
          <img
            style={{ height: "50px", width: "50px" }}
            src={tool.iconSVG}
            alt={tool.name}
            className="w-12 h-12 rounded-full"
          />
          <div className={`text-center ${tool.name.length >= 11 ? 'text-sm text-wrap ' : null}`}>
            {tool.name}
          </div>
        </div>
      ))}
    </div>
  );
};
