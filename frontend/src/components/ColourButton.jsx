import { useState } from "react";
import { ColourPicker } from "./ColourPicker";
import cross from "/icons/cross.svg";

export const ColourButton = ({idx, colour, editCallback, deleteCallback}) => {
  const [hover, setHover] = useState(false);
  const [showColourPicker, setShowColourPicker] = useState(false);

  const handleShowColourPicker = () => {
    setShowColourPicker((prev) => {return !prev});
  }

  return (
    <div className="relative">
    <div key={idx} className="bg-white rounded-full px-2 py-1 flex flex-row gap-2 w-fit" 
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    >
      <div 
      style={{background: `${colour}`}}
      className={`shrink-0 bg-[${colour}] my-auto border border-gray-200 w-5 h-5 rounded-full hover:opacity-30`}
      onClick={handleShowColourPicker}
      ></div>
      <span>
      <input
        className="text-sm w-min max-w-16"
        type="text"
        value={colour}
        onChange={(e) => {
          editCallback(idx, e.target.value);
        }}
      >
      </input>
      <div className={(hover ? "visible" : "invisible") + " inline-block pl-2 my-auto place-content-center"} 
      onClick={()=>{deleteCallback(idx);}}
      >
        <img src={cross} width={14}></img>
      </div>
      </span>
    </div>
      <div className={"absolute top-10 " + (showColourPicker ? " block" : " hidden")}>
        <ColourPicker colour={colour} colourCallback={(c) => {editCallback(idx, c)}} />
      </div>
    </div>
  );
}