import { AddButton } from "./AddButton";
import { ColourButton } from "./ColourButton";

export const ColourSelector = ({ colours, colourCallback, addColour }) => {
  const handleColourEdit = (key, value) => {
    colourCallback(() => {
      let updatedColours = colours;
      updatedColours[key] = value;
      return [...updatedColours];
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
  }

  const colourList = colours.map((colour, idx) => {
    return <ColourButton key={idx} idx={idx} colour={colour} editCallback={handleColourEdit} deleteCallback={handleDeleteColour} />
  });

  return (
    <div>
      <h3 className="text-md text-gray-700 pl-2 pb-3">Colours</h3>
      <div className="flex flex-row flex-wrap gap-3">
        {colourList}
        <AddButton radius={5} callback={addColour} />
      </div>
    </div>
  );
}