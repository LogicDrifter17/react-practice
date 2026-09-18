
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './Components/Products'
import ProductDetails from './Components/ProductDetails'
import Cart from './Components/Cart'
function App() {
   

  return (
    <>
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
   

    </>
  )
}

export default App
