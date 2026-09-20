
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
import { createContext, useEffect, useReducer, useState } from 'react'
export let context = createContext()
function App() {
    function reducer(state,action){
     switch(action.type){
      case "Add" :
         if(!state.includes(action.payload)){
               return [...state,action.payload];
         }
        else{
          return state;
        }  
      case "Remove" :
         let UpdatedCartId = state.filter((id)=>{
                return !(id == action.payload);
          })
           return UpdatedCartId;
        default :
          return state; 
                    }
      }
     
      let savedcart = JSON.parse(localStorage.getItem("cart"));
  let[cartid,dispatch]= useReducer(reducer,savedcart?savedcart:[])
     useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cartid));
       
      },[cartid]) 

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
