import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Sobre from './assets/sobre';
import Ajude from './assets/Ajude';
import Iluminacao from './assets/Iluminacao';
import Alambrados from './assets/Alambrados';
import Equipamentos from './assets/Equipamentos';
import Raspagem from './assets/Raspagem';
import Redes from './assets/Redes';
import Pintura from './assets/Pintura';
import Concreto from './assets/Concreto';
import Restauracao from './assets/Restauracao';
import Ambiente from './assets/Ambiente';
import './index.css';
import Graficos from "./Graficos";
import OutrosEsportes from './outrosEsportes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/ajude" element={<Ajude />} />
      <Route path="/iluminacao" element={<Iluminacao />} />
      <Route path="/alambrados" element={<Alambrados />} />
      <Route path="/equipamentos" element={<Equipamentos />} />
      <Route path="/raspagem" element={<Raspagem />} />
      <Route path="/redes" element={<Redes />} />
      <Route path="/pintura" element={<Pintura />} />
      <Route path="/concreto" element={<Concreto />} />
      <Route path="/restauracao" element={<Restauracao />} />
      <Route path="/ambiente" element={<Ambiente />} />
      <Route path="/graficos" element={<Graficos />} />
      <Route path='/outrosEsportes' element={<OutrosEsportes />} />
    </Routes>
  </BrowserRouter>
);