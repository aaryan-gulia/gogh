import { useState } from "react";
import { AddButton } from "./AddButton";

const shapes = [
  {
    name: "square",
    value: <svg viewBox="0 0 24 24" width={53} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="4" y="4" width="16" height="16" rx="2" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></rect> </g></svg>,
  },
  {
    name: "circle",
    value: <svg viewBox="0 0 24 24" width={53} fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
  },
  {
    name: "triangle",
    value: <svg viewBox="0 0 24 24" width={49} fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2.39019 18.0983L10.6151 3.89171C11.0696 3.10655 11.2969 2.71396 11.5935 2.58211C11.8521 2.4671 12.1474 2.4671 12.4061 2.58211C12.7026 2.71396 12.9299 3.10654 13.3844 3.89171L21.6093 18.0983C22.0655 18.8863 22.2936 19.2803 22.2599 19.6037C22.2305 19.8857 22.0827 20.142 21.8534 20.3088C21.5904 20.5 21.1352 20.5 20.2246 20.5H3.77487C2.86435 20.5 2.40908 20.5 2.14613 20.3088C1.91677 20.142 1.769 19.8857 1.73959 19.6037C1.70588 19.2803 1.93398 18.8863 2.39019 18.0983Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>,
  },
];

export const ShapeSelector = () => {
  const [selectedShapes, setSelectedShapes] = useState({ "square": true });

  const toggle = (name) => {
    setSelectedShapes(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  const selected = "p-1 bg-[#c4cad2] w-fit my-auto rounded-lg";
  const unSelected = "p-1 w-fit my-auto";

  return (
    <div>
    <h3 className="text-md text-gray-700 pl-2">Shapes</h3>
    <div 
      className="bg-gray-300 h-20 rounded-xl mt-3 flex flex-row px-6 gap-3 overflow-x-scroll"
    >
      {shapes.map((shape) => {
        return (
          <div 
            key={shape.name}
            className={selectedShapes[shape.name] ? selected: unSelected}
            onClick={() => { toggle(shape.name); }}
          >
            {shape.value}
          </div>
        );
      })}
      <div className="grow"></div>
      <AddButton />
    </div>
  </div>
  );
}