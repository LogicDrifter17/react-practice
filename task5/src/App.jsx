
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { createContext, useReducer, useState } from 'react'
export let context = createContext()
function App() {
  let[cartid,dispatch]= useReducer(reducer,[])
  

  return (
    <>
    <context.Provider  value={{cartid,dispatch}}>
 <BrowserRouter> <div id = "Page">

     <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path ="/Products" element={<Products/>}/>
          <Route path="/ProductDetails/:id" element={<ProductDetails/>}/>
          <Route path="/Cart" element={<Cart/>}/>
        </Routes>
     <Footer/>

    </div>
    </BrowserRouter>

    </context.Provider>
   
   

    </>
  )
}

export default App
