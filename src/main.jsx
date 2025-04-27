import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import App from './App.jsx';
import PokemonDetail from './Components/PokemonDetail.jsx';
import './index.css'

import ReactDOM from 'react-dom/client';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
    <App />
  </BrowserRouter>
);

