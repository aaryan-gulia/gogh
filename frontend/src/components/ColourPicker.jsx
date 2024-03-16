import { useState } from 'react';
import { ChromePicker } from 'react-color';

export const ColourPicker = () => {
  const [colour, setColour] = useState("#FFFFFF");

  const handleChange = (color) => {
    setColour(color.hex);
  }

  return (
  <ChromePicker
    color={colour}
    onChange={handleChange}
  />
  );
}