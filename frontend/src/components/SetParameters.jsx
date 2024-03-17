import { useState, useEffect } from "react";
import { ShapeSelector } from "./ShapeSelector";
import { ColourSelector } from './ColourSelector';
import { GenerateButton } from './GenerateButton';
import histogram from "/icons/histogram.svg";

const algorithms = [
  {
    id: 1,
    name: "Algorithm 1"
  },
  {
    id: 2,
    name: "Algorithm 2"
  }
];

const selected = "bg-gray-500 px-5 py-1 text-sm rounded-full text-white border border-black";
const unSelected = "bg-gray-300 hover:bg-gray-200  px-5 py-1 text-sm rounded-full text-black";

export const SetParameters = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(1);
  const [shapes, setShapes] = useState(["square"]);
  const [colours, setColours] = useState(["#FFFFFF"]);

  const algorithmButtons = algorithms.map((algorithm) => {
    return (
      <button
        key={algorithm.id}
        onClick={() => setSelectedAlgorithm(algorithm.id)}
        className={(algorithm.id == selectedAlgorithm) ? selected : unSelected}
      >
        {algorithm.name}
      </button>
    );
  });

  const handleShapeChange = (name) => {
    if (!shapes.includes(name)) {
      setShapes((prev) => {
        return [...shapes, name]
      });
    }
    else {
      setShapes((prev) => {
        const updatedList = [];
        prev.forEach(shape => {
          if (shape !== name) {
            updatedList.push(shape);
          }
        });

        return updatedList;
      });
    }
  };

  const handleColoursChange = (updatedColours) => {
    setColours(updatedColours);
  }

  const handleAddColour = () => {
    setColours((prev) => {
     return [...prev, "#000000"];
    });
  }

  return (
    <>
      <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-row mb-6 border-b-[1px] border-gray-700"><img src={histogram} width={20}></img><h2 className="text-2xl w-full pl-2">Parameter Selection</h2></div>
      <div className="flex flex-row gap-5">
        {algorithmButtons}
      </div>
      <div className="bg-gray-100 min-h-[30rem] w-full p-8 rounded-2xl flex flex-col gap-10 h-full border border-gray-300">
        <ShapeSelector selectedShapes={shapes} shapeCallback={handleShapeChange} />
        <ColourSelector colours={colours} colourCallback={handleColoursChange} addColour={handleAddColour} />
      </div>
    </div>
    <br></br>
    <GenerateButton algorithm={selectedAlgorithm} shapes={shapes} colours={colours} />
    </>
  );
}