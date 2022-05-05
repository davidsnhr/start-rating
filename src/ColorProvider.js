import React, { createContext, useContext, useState } from 'react';
import { v4 } from 'uuid';
import colorData from './color-data.json';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);
const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(colorData);

  const addColor = (title, color) => {
    setColors([
      ...colors,
      {
        id: v4(),
        rating: 0,
        title,
        color,
      },
    ]);
  };

  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (id === color.id ? { ...color, rating } : color))
    );
  };

  const deleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <ColorContext.Provider value={{ colors, addColor, rateColor, deleteColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export default ColorProvider;
