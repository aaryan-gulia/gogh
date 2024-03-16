import { AddButton } from "./AddButton";
import { colourButton } from "./ColourButton";
import { ColourPicker } from "./ColourPicker";

export const ColourSelector = ({ colours, colourCallback }) => {
  const handleColourEdit = (key, value) => {
    colourCallback(() => {
      let updatedColours = colours;
      updatedColours[key] = value;
      return [...updatedColours];
     });
  }

  const handleAddColour = () => {
    colourCallback(() => {
      return [...colours, "000000"];
    });
  }

  const handleDeleteColour = (idx) => {
    colourCallback(() => {
      let updatedList = [];
      for (let i = 0; i < colours.length; i++)
      {
        if (idx != i) updatedList.push(colours[i]);
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
      <div className="flex flex-row flex-wrap gap-3">
        {colourList}
        <AddButton radius={5} callback={handleAddColour}/>
        <ColourPicker />
      </div>
    </div>
  );
}