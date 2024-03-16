import { useState } from "react";
import { ShapeSelector } from "./ShapeSelector";
import { ColourSelector } from './ColourSelector'


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

const selected = "bg-gray-300 px-5 py-1 text-sm rounded-full text-black hover:bg-gray-200";
const unSelected = "bg-gray-500 px-5 py-1 text-sm rounded-full text-white";

export const SetParameters = () => {
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(1);

  const algorithmButtons = algorithms.map((algorithm) => {
    return (
      <button
        key={algorithm.id}
        onClick={() => setSelectedAlgorithm(algorithm.id)}
        className={(algorithm.id == selectedAlgorithm) ? unSelected : selected}
      >
        {algorithm.name}
      </button>
    );
  });

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-row gap-5">
        {algorithmButtons}
      </div>
      <div className="bg-gray-100 w-full p-8 rounded-2xl flex flex-col gap-10 h-full">
        <ShapeSelector />
        <ColourSelector />
      </div>
    </div>
  );
}