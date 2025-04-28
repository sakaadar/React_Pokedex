import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PokemonDetail from './Components/PokemonDetail.jsx';
import About from './Components/About.jsx';
import ReactDOM from 'react-dom/client';
import './index.css';
import React from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/React_Pokedex/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
