import React, { useState } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Main from './views/Main';
import axios from 'axios';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';
import './App.css';


function App() {
  const [products, setProducts] = useState([]);
  const deleteProduct = (id) => {
    axios.delete('http://localhost:8000/api/products/' + id)
      .then(res => {
        setProducts(products.filter(product => product._id != id))
        // apparently you can only use useNavigate in a Router component? (not app.js at least)
        // and ALSO you can't just do useNavigate('/') -- can't put it in a callback, among other rules;
        // must do like const navigate = useNavigate() and then call on navigate
      })
      .catch(err => console.log(err))
  }
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main products={products} setProducts={setProducts} deleteProduct={deleteProduct} />} path="/" />
          <Route element={<ProductDetail products={products} setProducts={setProducts} deleteProduct={deleteProduct} />} path="/products/:_id" />
          <Route element={<UpdateProduct deleteProduct={deleteProduct} />} path="/products/edit/:_id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
