import React from 'react'
import { useColors } from '../ColorProvider';
import Color from './Color'

const ColorList = () => {
  const { colors } = useColors();
  console.log("colors", colors);
  if(!colors.length) return <div>No Colors listed.(Add a color)</div>
  return (
    <div>
     {
         colors.map(color => <Color key={color.id} {...color}/>)
     }
    </div>
  )
}

export default ColorList