import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import ProductDetail from './components/ProductDetail';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/" />
          <Route element={<ProductDetail/>} path="/products/:_id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
