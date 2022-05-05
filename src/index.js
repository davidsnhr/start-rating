import reportWebVitals from './reportWebVitals';
import App from './App';
import React, { createContext } from 'react';
import ColorProvider from './ColorProvider';
import ReactDOM from 'react-dom';;


export const ColorContext = createContext();

ReactDOM.render(
  <React.StrictMode>
    <ColorProvider>
      <App />
    </ColorProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
