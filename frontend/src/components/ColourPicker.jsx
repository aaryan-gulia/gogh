import { useState } from 'react';
import { ChromePicker } from 'react-color';

export const ColourPicker = ({colourCallback}) => {
  const [colour, setColour] = useState("#FFFFFF");

  const handleChange = (color) => {
    colourCallback(color.hex);
    setColour(color.hex);
  }

  return (
  <ChromePicker
    color={colour}
    onChange={handleChange}
  />
  );
}