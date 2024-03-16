import { useState } from "react";
import { AddButton } from "./AddButton";
import { colourButton } from "./ColourButton";

export const ColourSelector = () => {
  const [colours, setColours] = useState([]);

  const handleColourEdit = (key, value) => {
    setColours((prev) => {
      prev[key] = value;
      return [...prev];
     });
  }

  const handleAddColour = () => {
    setColours((prev) => {
      return [...prev, "000000"];
    });
  }

  const handleDeleteColour = (idx) => {
    setColours((prev) => {
      let updatedList = [];
      for (let i = 0; i < colours.length; i++)
      {
        if (idx != i) updatedList.push(prev[i]);
      }
      return updatedList;
    });
  };

  const colourList = colours.map((colour, idx) => {
    return colourButton(idx, colour, handleColourEdit, handleDeleteColour)
  });

  return (
    <div>
      <h3 className="text-md text-gray-700 pl-2 pb-3">Colours</h3>
      <div className="flex flex-row gap-3">
        {colourList}
        <AddButton radius={5} callback={handleAddColour}/>
      </div>
    </div>
  );
}