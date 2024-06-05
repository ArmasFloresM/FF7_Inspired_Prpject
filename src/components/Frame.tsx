import React from "react";

/* Cloud icon =>    https://cdn2.steamgriddb.com/icon/a209ca7b50dcaab2db7c2d4d1223d4d5.ico */

export const Frame = () => {
  return (
    <div>
      <div className="flex gap-10 align-top border border-orange-500 ">
        <img
          src="https://cdn2.steamgriddb.com/icon/a209ca7b50dcaab2db7c2d4d1223d4d5.ico"
          alt=""
          style={{ height: "250px", width: "250px" }}
          className="border border-stone-950 "
        />
        <div
         style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0), rgba(0, 0, 0), rgba(0, 200, 0), rgba(0, 0, 0))`
        }}
        
          className="border border-stone-950 p-5 items-center "
        >
          Text
        </div>
      </div>
    </div>
  );
};
