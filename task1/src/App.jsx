
import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Product_Details from './Components/Product_Details'
function App() {
 
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path="/Product_Details" element = {<Product_Details/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
