import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import Products from './Product/Products'
import Home from './Product/Home'
import Admin from './Product/Admin'
import UpdateProduct from './Product/UpdateProduct'
import CreateProduct from './Product/CreateProduct'
const App = () => {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/create" element={<CreateProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
