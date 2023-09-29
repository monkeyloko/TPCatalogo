import React from 'react';
import './App.css';
import './index.css';
import ReactDOM from "react-dom/client";
import Home from './components/Home';
import Layout from './components/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './components/Productos';// Importa el componente DetalleProducto
import Detalle from './components/Detalle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          {/* Agrega la ruta para el detalle del producto */}
          <Route path="/detalle/:id" element={<Detalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
