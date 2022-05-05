import { useState } from 'react';
import colorData from './color-data.json';
import ColorList from './components/ColorList';
import AddColorForm from './components/AddColorForm';

function App() {
  return (
    <div>
      <AddColorForm />
      <ColorList/>
    </div>
  );
}

export default App;
