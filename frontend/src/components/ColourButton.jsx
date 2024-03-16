import { useState } from "react";

export const colourButton = (key, colour, editCallback, deleteCallback) => {
  return (
    <div key={key} className="bg-white rounded-full px-2 py-1 flex flex-row gap-2">
      <div 
      style={{background: `#${colour}`}}
      className={`shrink-0 bg-[${colour}] my-auto border border-gray-200 min-w-5 h-5 rounded-full hover:opacity-30`}
      onClick={()=>{deleteCallback(key);}}
      ></div>
      <span>
      <span className="text-sm">#</span>
      <input
        className="max-w-16 text-sm"
        type="text"
        value={colour}
        onChange={(e) => {
          editCallback(key, e.target.value);
        }}
      >
      </input>
      </span>
    </div>
  );
}