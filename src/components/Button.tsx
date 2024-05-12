import { ArrowBigRight } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  title: string;
  onHandleClick: () => void;
  
};

export const Button = ({ title, onHandleClick}: ButtonProps) => {
    const [isActive, setIsActive] = useState<boolean>(false)

  return (
    <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={onHandleClick}
     className="flex justify-center cursor-pointer  px-1 py-0.5 gap-3 rounded-xl hover:bg-gradient-to-r from-violet-500 to-white ">
       <div className={isActive ? '' : 'hidden'}><ArrowBigRight/></div><h2>{title}</h2>
    </div>
  );
}
