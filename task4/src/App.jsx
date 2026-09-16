import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import Products from "./Components/Products"
import Cart from "./Components/Cart"
import NavBar from "./Components/NavBar"
import Footer from "./Components/Footer"
import ProductDetails from "./Components/ProductDetails"
import { createContext } from "react"
import { useState } from "react"
 export let context = createContext() // cannot export something inside the function
function App() {

 let [CartId,setCartId]  = useState([]);
  return (
    <>
    <context.Provider value={{CartId,setCartId}}>
    <BrowserRouter>
       <div id="Page">
         <NavBar/>
        <Routes>
         
            <Route path = "/" element={<Home/>}/>
            <Route path = "/Products" element={<Products/>}/>
            <Route path = "/Cart" element = {<Cart/>}/>
            <Route path = "/ProductDetails/:id" element ={<ProductDetails/>}/>
        </Routes>
       <Footer/>
       </div>
     
    
    </BrowserRouter>
      </context.Provider> 
    </>
  )
}

export default App
