import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import ScoreContextProvider, {ScoreContext} from "./context/ScoreContext";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <ScoreContextProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </ScoreContextProvider>
  </React.StrictMode>
);



