import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import PokemonDetail from './Components/PokemonDetail.jsx';
import About from './Components/About.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/pokemon/:id" element={<PokemonDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </HashRouter>
);