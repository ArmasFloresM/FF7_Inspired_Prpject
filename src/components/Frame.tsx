import React from "react";

/* Cloud icon =>    https://cdn2.steamgriddb.com/icon/a209ca7b50dcaab2db7c2d4d1223d4d5.ico */

export const Frame = () => {
  return (
    <div>
      <div className="flex gap-10 align-top border border-orange-500 ">
        <img
          src="data:image/jpeg;base64,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"
          alt=""
          style={{ height: "250px", width: "250px" }}
          className="border border-stone-950 "
        />
        <div
         style={{
          backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0), rgba(0, 0, 0), rgba(0, 200, 0), rgba(0, 0, 0))`
        }}
        
          className="border border-stone-950 p-5 items-center"
        >
          Text
        </div>
      </div>
    </div>
  );
};
