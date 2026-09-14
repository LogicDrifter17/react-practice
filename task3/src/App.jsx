import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Components/Home'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import Products from './Components/Products'

function App() {
  
  return (
    <>
    <BrowserRouter>
    <div id="page">
      <Nav/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
        <Route path="/Cart" element={<Cart/>}/>
      </Routes>
      
      <Footer/>
      </div>
    </BrowserRouter>
     
   
    </>
  )
}

export default App
